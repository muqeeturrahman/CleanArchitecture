import { Injectable, Inject } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginUseCase {
  constructor(@Inject('UserRepository') private readonly repo: any) {}

  async execute(email: string, password: string) {
    const user = await this.repo.findByEmail(email);
    if (!user) throw new Error('Invalid credentials');
    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error('Invalid credentials');
    return user;
  }
}
