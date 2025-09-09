import { Module } from '@nestjs/common';
import { CategoryController } from '../controllers/category.controller';
import { CreateCategoryUseCase } from '../../core/use-cases/category/create-category.use-case';
import { PrismaCategoryRepository } from '../../infrastructure/database/repositories/category.repository';
import { PrismaService } from '../../infrastructure/database/prisma.service';

@Module({
  controllers: [CategoryController],
  providers: [
    CreateCategoryUseCase,
    PrismaService,
    {
      provide: 'CategoryRepository',
      useClass: PrismaCategoryRepository,
    },
  ],
})
export class CategoryModule {}
