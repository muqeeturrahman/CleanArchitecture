import { IUserRepository } from '../../repositories/user.repository.interface';
import { User } from '../../entities/user.entity';

interface SignupRequest {
  fullName: string;
  phoneNumber?: string;
  email: string;
  password: string;
  deviceToken?: string;
}

export class SignupUseCase {
  constructor(private readonly userRepo: IUserRepository) {}

  async execute(data: SignupRequest): Promise<{ user: User; token: string }> {
    const existing = await this.userRepo.findByEmail(data.email.toLowerCase());
    if (existing) throw new Error('User already exists with this email');

    const user = new User({
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      email: data.email.toLowerCase(),
      password: data.password,
      deviceToken: data.deviceToken ? [data.deviceToken] : [],
    });

    const createdUser = await this.userRepo.create(user);

    // JWT signing (Infra service)
    const token = 'signed-jwt-token'; // placeholder → will use JWTService later

    return { user: createdUser, token };
  }
}