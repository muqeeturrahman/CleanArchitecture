import { Category } from '../entities/category.entity';

export interface CategoryRepository {
  save(category: Category): Promise<Category>;
  findById(id: string): Promise<Category | null>;
  findAll(): Promise<Category[]>;
  exists(id: string): Promise<boolean>;
}
