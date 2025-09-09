import { Injectable } from '@nestjs/common';
import { CreateProductUseCase } from '../../core/use-cases/product/create-product.use-case';
import { CreateProductDto } from '../dto/product/create-product.dto';
import { ProductMapper } from '../mappers/product.mapper';

@Injectable()
export class ProductService {
  constructor(private readonly createProductUseCase: CreateProductUseCase) {}

  async create(dto: CreateProductDto) {
    const domain = ProductMapper.toDomain(dto);
    const created = await this.createProductUseCase.execute(domain);
    return ProductMapper.toResponse(created);
  }
}
