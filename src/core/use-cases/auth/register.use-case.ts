import { Injectable, Inject } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class RegisterUseCase {
  constructor(@Inject('UserRepository') private readonly repo: any) {}

  async execute(email: string, password: string, name?: string) {
    const hashed = await bcrypt.hash(password, 10);
    return this.repo.create(email, hashed, name);
  }
}
