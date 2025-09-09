import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString() @IsNotEmpty() name: string;
  @IsString() @IsNotEmpty() slug: string;
  @IsString() @IsNotEmpty() sku: string;
  @IsNumber() price: number;
  @IsString() categoryId: string;
}
