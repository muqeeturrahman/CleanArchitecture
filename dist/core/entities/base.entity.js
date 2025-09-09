"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntity = void 0;
const uuid_1 = require("uuid");
class BaseEntity {
    constructor(id) {
        this._id = id !== null && id !== void 0 ? id : (0, uuid_1.v4)();
        this._createdAt = new Date();
        this._updatedAt = new Date();
    }
    get id() { return this._id; }
    get createdAt() { return this._createdAt; }
    get updatedAt() { return this._updatedAt; }
    touch() { this._updatedAt = new Date(); }
}
exports.BaseEntity = BaseEntity;
//# sourceMappingURL=base.entity.js.map