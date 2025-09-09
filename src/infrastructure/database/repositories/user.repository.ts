import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User } from '../../../core/entities/user.entity';

@Injectable()
export class PrismaUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(email: string, password: string, name?: string): Promise<User> {
    const rec = await this.prisma.user.create({ data: { email, password, name } });
    return User.fromPersistence(rec);
  }

  async findByEmail(email: string): Promise<User | null> {
    const rec = await this.prisma.user.findUnique({ where: { email } });
    return rec ? User.fromPersistence(rec) : null;
  }

  async findById(id: string): Promise<User | null> {
    const rec = await this.prisma.user.findUnique({ where: { id } });
    return rec ? User.fromPersistence(rec) : null;
  }
}
