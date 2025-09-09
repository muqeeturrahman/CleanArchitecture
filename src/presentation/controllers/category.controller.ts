import { Body, Controller, Post } from '@nestjs/common';
import { CreateCategoryUseCase } from '../../core/use-cases/category/create-category.use-case';
import { Category } from '../../core/entities/category.entity';

@Controller('categories')
export class CategoryController {
  constructor(private readonly createCategoryUseCase: CreateCategoryUseCase) {}
  @Post()
  async create(@Body() dto: any) {
    const c = new Category({ name: dto.name, description: dto.description });
    return this.createCategoryUseCase.execute(c);
  }
}
