import { Module } from '@nestjs/common';
import { ProductController } from '../controllers/product.controller';
import { ProductService } from '../../application/services/product.service';
import { CreateProductUseCase } from '../../core/use-cases/product/create-product.use-case';
import { PrismaProductRepository } from '../../infrastructure/database/repositories/product.repository';
import { PrismaService } from '../../infrastructure/database/prisma.service';

@Module({
  controllers: [ProductController],
  providers: [
    ProductService,
    CreateProductUseCase,
    PrismaService,
    {
      provide: 'ProductRepository',
      useClass: PrismaProductRepository,
    },
  ],
})
export class ProductModule {}
