import { Injectable } from '@nestjs/common';
import { RegisterUseCase } from '../../core/use-cases/auth/register.use-case';
import { LoginUseCase } from '../../core/use-cases/auth/login.use-case';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly registerUseCase: RegisterUseCase,
    private readonly loginUseCase: LoginUseCase,
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
  ) {}

  async register(dto: any) {
    const user = await this.registerUseCase.execute(dto.email, dto.password, dto.name);
    return { id: user.id, email: user.email, name: user.name };
  }

  async login(dto: any) {
    const user = await this.loginUseCase.execute(dto.email, dto.password);
    const token = this.jwtService.sign({ sub: user.id, email: user.email }, {
      secret: this.config.get('JWT_SECRET'),
      expiresIn: this.config.get('JWT_EXPIRATION') || '3600s'
    });
    return { accessToken: token };
  }
}
