import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Category } from '../../../core/entities/category.entity';

@Injectable()
export class PrismaCategoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(category: Category): Promise<Category> {
    const rec = await this.prisma.category.create({
      data: {
        id: category.id,
        name: category.name,
        slug: category.slug.getValue(),
        description: category.description ?? null,
        isActive: category.isActive,
      }
    });
    return Category.fromPersistence(rec);
  }

  async findById(id: string): Promise<Category | null> {
    const rec = await this.prisma.category.findUnique({ where: { id } });
    return rec ? Category.fromPersistence(rec) : null;
  }

  async findAll(): Promise<Category[]> {
    const items = await this.prisma.category.findMany();
    return items.map((r)=> Category.fromPersistence(r));
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.prisma.category.count({ where: { id } });
    return count > 0;
  }
}
