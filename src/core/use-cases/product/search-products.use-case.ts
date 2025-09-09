import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class SearchProductsUseCase {
  constructor(@Inject('ProductRepository') private readonly repo: any) {}

  async execute(filters: any, options: any) {
    return this.repo.search(filters, options);
  }
}
