import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthController } from '../controllers/auth.controller';
import { AuthService } from '../../application/services/auth.service';
import { RegisterUseCase } from '../../core/use-cases/auth/register.use-case';
import { LoginUseCase } from '../../core/use-cases/auth/login.use-case';
import { PrismaUserRepository } from '../../infrastructure/database/repositories/user.repository';
import { PrismaService } from '../../infrastructure/database/prisma.service';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: configService.get('JWT_EXPIRATION') || '3600s' }
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    RegisterUseCase,
    LoginUseCase,
    PrismaService,
    {
      provide: 'UserRepository',
      useClass: PrismaUserRepository,
    },
  ],
  exports: [AuthService],
})
export class AuthModule {}
