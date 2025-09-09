import { Injectable, Inject } from '@nestjs/common';
import { Product } from '../../entities/product.entity';

@Injectable()
export class CreateProductUseCase {
  constructor(@Inject('ProductRepository') private readonly repo: any) {}

  async execute(product: Product): Promise<Product> {
    const existing = await this.repo.findBySku(product.sku.getValue());
    if (existing) throw new Error('SKU already exists');
    return this.repo.save(product);
  }
}
