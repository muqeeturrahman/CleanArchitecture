import { Product } from '../entities/product.entity';

export interface ProductRepository {
  save(product: Product): Promise<Product>;
  findById(id: string): Promise<Product | null>;
  findBySku(sku: string): Promise<Product | null>;
  search(filters: any, options?: any): Promise<{ products: Product[]; total: number; page: number; limit: number; totalPages: number }>;
}
