"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const base_entity_1 = require("./base.entity");
const price_value_object_1 = require("../value-objects/price.value-object");
const sku_value_object_1 = require("../value-objects/sku.value-object");
const slug_value_object_1 = require("../value-objects/slug.value-object");
class Product extends base_entity_1.BaseEntity {
    constructor(props, id) {
        var _a, _b;
        super(id);
        this._name = props.name;
        this._slug = new slug_value_object_1.Slug(props.name);
        this._description = props.description;
        this._sku = props.sku;
        this._price = props.price;
        this._categoryId = props.categoryId;
        this._images = (_a = props.images) !== null && _a !== void 0 ? _a : [];
        this._tags = (_b = props.tags) !== null && _b !== void 0 ? _b : [];
    }
    get name() { return this._name; }
    get slug() { return this._slug; }
    get description() { return this._description; }
    get sku() { return this._sku; }
    get price() { return this._price; }
    get categoryId() { return this._categoryId; }
    get images() { return [...this._images]; }
    get tags() { return [...this._tags]; }
    static fromPersistence(rec) {
        var _a, _b;
        const p = new Product({
            name: rec.name,
            description: rec.description,
            sku: new sku_value_object_1.SKU(rec.sku),
            price: new price_value_object_1.Price(Number(rec.price)),
            categoryId: rec.categoryId,
            images: (_a = rec.images) !== null && _a !== void 0 ? _a : [],
            tags: (_b = rec.tags) !== null && _b !== void 0 ? _b : []
        }, rec.id);
        p._createdAt = rec.createdAt;
        p._updatedAt = rec.updatedAt;
        p._slug = { getValue: () => rec.slug };
        return p;
    }
}
exports.Product = Product;
//# sourceMappingURL=product.entity.js.map