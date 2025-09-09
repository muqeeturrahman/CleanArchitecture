"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMapper = void 0;
const product_entity_1 = require("../../core/entities/product.entity");
const price_value_object_1 = require("../../core/value-objects/price.value-object");
const sku_value_object_1 = require("../../core/value-objects/sku.value-object");
class ProductMapper {
    static toDomain(dto) {
        return new product_entity_1.Product({
            name: dto.name,
            description: undefined,
            sku: new sku_value_object_1.SKU(dto.sku),
            price: new price_value_object_1.Price(dto.price),
            categoryId: dto.categoryId
        });
    }
    static toResponse(product) {
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
exports.ProductMapper = ProductMapper;
//# sourceMappingURL=product.mapper.js.map