"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModule = void 0;
const common_1 = require("@nestjs/common");
const category_controller_1 = require("../controllers/category.controller");
const create_category_use_case_1 = require("../../core/use-cases/category/create-category.use-case");
const category_repository_1 = require("../../infrastructure/database/repositories/category.repository");
const prisma_service_1 = require("../../infrastructure/database/prisma.service");
let CategoryModule = class CategoryModule {
};
exports.CategoryModule = CategoryModule;
exports.CategoryModule = CategoryModule = __decorate([
    (0, common_1.Module)({
        controllers: [category_controller_1.CategoryController],
        providers: [
            create_category_use_case_1.CreateCategoryUseCase,
            prisma_service_1.PrismaService,
            {
                provide: 'CategoryRepository',
                useClass: category_repository_1.PrismaCategoryRepository,
            },
        ],
    })
], CategoryModule);
//# sourceMappingURL=category.module.js.map