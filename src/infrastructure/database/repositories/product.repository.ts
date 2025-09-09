import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Product } from '../../../core/entities/product.entity';

@Injectable()
export class PrismaProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  private toDomain(rec: any): Product {
    return Product.fromPersistence(rec);
  }

  async save(product: Product): Promise<Product> {
    const data: any = {
      id: product.id,
      name: product.name,
      slug: product.slug.getValue(),
      sku: product.sku.getValue(),
      price: product.price.getValue(),
      inventory:  product['inventory'] ?? 0,
      images: product.images,
      tags: product.tags,
      isActive: true,
      isFeatured: false,
      categoryId: product.categoryId,
    };
    const rec = await this.prisma.product.upsert({
      where: { id: product.id },
      create: data,
      update: data,
    });
    return this.toDomain(rec);
  }

  async findById(id: string): Promise<Product | null> {
    const rec = await this.prisma.product.findUnique({ where: { id } });
    return rec ? this.toDomain(rec) : null;
  }

  async findBySku(sku: string): Promise<Product | null> {
    const rec = await this.prisma.product.findUnique({ where: { sku } });
    return rec ? this.toDomain(rec) : null;
  }

  async search(filters: any, options: any) {
    const page = options?.page ?? 1;
    const limit = options?.limit ?? 20;
    const skip = (page - 1) * limit;
    const where: any = {};
    if (filters?.search) {
      where.OR = [
        { name: { contains: filters.search, mode: 'insensitive' } },
        { description: { contains: filters.search, mode: 'insensitive' } },
      ];
    }
    const [items, total] = await Promise.all([
      this.prisma.product.findMany({ where, skip, take: limit, orderBy: { createdAt: 'desc' } }),
      this.prisma.product.count({ where }),
    ]);
    const products = items.map((r) => this.toDomain(r));
    return { products, total, page, limit, totalPages: Math.ceil(total / limit) };
  }
}
