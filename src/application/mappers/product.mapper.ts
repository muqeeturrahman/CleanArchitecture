import { CreateProductDto } from '../dto/product/create-product.dto';
import { Product } from '../../core/entities/product.entity';
import { Price } from '../../core/value-objects/price.value-object';
import { SKU } from '../../core/value-objects/sku.value-object';

export class ProductMapper {
  static toDomain(dto: CreateProductDto): Product {
    return new Product({
      name: dto.name,
      description: undefined,
      sku: new SKU(dto.sku),
      price: new Price(dto.price),
      categoryId: dto.categoryId
    });
  }

  static toResponse(product: Product) {
    return {
      id: product.id,
      name: product.name,
      slug: product.slug.getValue(),
      sku: product.sku.getValue(),
      price: product.price.getValue(),
      categoryId: product.categoryId
    };
  }
}
