import { IsString, IsOptional, IsNumber, IsIn, IsArray } from 'class-validator';

export class UpdateTrapDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsIn(['active', 'inactive', 'alert'])
  status?: string;

  @IsOptional()
  @IsNumber()
  batteryLevel?: number;

  @IsOptional()
  @IsString()
  lastDetection?: string;

  @IsOptional()
  @IsIn(['online', 'offline', 'weak'])
  connectivity?: string;

  @IsOptional()
  @IsArray()
  weeklyActivity?: number[];
}
