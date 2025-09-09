"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const register_use_case_1 = require("../../core/use-cases/auth/register.use-case");
const login_use_case_1 = require("../../core/use-cases/auth/login.use-case");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(registerUseCase, loginUseCase, jwtService, config) {
        this.registerUseCase = registerUseCase;
        this.loginUseCase = loginUseCase;
        this.jwtService = jwtService;
        this.config = config;
    }
    async register(dto) {
        const user = await this.registerUseCase.execute(dto.email, dto.password, dto.name);
        return { id: user.id, email: user.email, name: user.name };
    }
    async login(dto) {
        const user = await this.loginUseCase.execute(dto.email, dto.password);
        const token = this.jwtService.sign({ sub: user.id, email: user.email }, {
            secret: this.config.get('JWT_SECRET'),
            expiresIn: this.config.get('JWT_EXPIRATION') || '3600s'
        });
        return { accessToken: token };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [register_use_case_1.RegisterUseCase,
        login_use_case_1.LoginUseCase,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map