import { Injectable, ExecutionContext, CanActivate } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService, private readonly config: ConfigService) {}
  canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    const auth = req.headers['authorization'] as string;
    if (!auth) return false;
    const [type, token] = auth.split(' ');
    if (type !== 'Bearer' || !token) return false;
    try {
      const payload = this.jwtService.verify(token, { secret: this.config.get('JWT_SECRET') });
      req.user = payload;
      return true;
    } catch (e) {
      return false;
    }
  }
}
