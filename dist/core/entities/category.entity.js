"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const base_entity_1 = require("./base.entity");
const slug_value_object_1 = require("../value-objects/slug.value-object");
class Category extends base_entity_1.BaseEntity {
    constructor(props, id) {
        var _a;
        super(id);
        this._name = props.name;
        this._slug = new slug_value_object_1.Slug(props.name);
        this._description = props.description;
        this._isActive = (_a = props.isActive) !== null && _a !== void 0 ? _a : true;
    }
    get name() { return this._name; }
    get slug() { return this._slug; }
    get description() { return this._description; }
    get isActive() { return this._isActive; }
    static fromPersistence(rec) {
        const c = new Category({ name: rec.name, description: rec.description, isActive: rec.isActive }, rec.id);
        c._createdAt = rec.createdAt;
        c._updatedAt = rec.updatedAt;
        c._slug = { getValue: () => rec.slug };
        return c;
    }
}
exports.Category = Category;
//# sourceMappingURL=category.entity.js.map