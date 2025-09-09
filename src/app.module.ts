import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './presentation/modules/auth.module';
import { CategoryModule } from './presentation/modules/category.module';
import { ProductModule } from './presentation/modules/product.module';
import { PrismaService } from './infrastructure/database/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    CategoryModule,
    ProductModule,
  ],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
