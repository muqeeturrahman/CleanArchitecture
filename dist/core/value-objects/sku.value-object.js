"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SKU = void 0;
class SKU {
    constructor(sku) {
        if (!sku || sku.trim().length === 0)
            throw new Error('SKU required');
        this.value = sku.trim();
    }
    getValue() { return this.value; }
}
exports.SKU = SKU;
//# sourceMappingURL=sku.value-object.js.map