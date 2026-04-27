import { IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdateFarmerDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  farmName?: string;

  @IsOptional()
  @IsString()
  municipality?: string;

  @IsOptional()
  @IsString()
  department?: string;

  @IsOptional()
  @IsNumber()
  hectares?: number;

  @IsOptional()
  @IsString()
  cooperative?: string | null;
}
