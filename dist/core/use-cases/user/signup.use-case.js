"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupUseCase = void 0;
const user_entity_1 = require("../../entities/user.entity");
class SignupUseCase {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async execute(data) {
        const existing = await this.userRepo.findByEmail(data.email.toLowerCase());
        if (existing)
            throw new Error('User already exists with this email');
        const user = new user_entity_1.User({
            fullName: data.fullName,
            phoneNumber: data.phoneNumber,
            email: data.email.toLowerCase(),
            password: data.password,
            deviceToken: data.deviceToken ? [data.deviceToken] : [],
        });
        const createdUser = await this.userRepo.create(user);
        const token = 'signed-jwt-token';
        return { user: createdUser, token };
    }
}
exports.SignupUseCase = SignupUseCase;
//# sourceMappingURL=signup.use-case.js.map