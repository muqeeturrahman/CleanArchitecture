import { Injectable, Inject } from '@nestjs/common';
import { Category } from '../../entities/category.entity';

@Injectable()
export class CreateCategoryUseCase {
  constructor(@Inject('CategoryRepository') private readonly repo: any) {}

  async execute(category: Category) {
    return this.repo.save(category);
  }
}
