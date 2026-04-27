import { IsString, IsNotEmpty } from 'class-validator';

export class CreateReportDto {
  @IsString()
  @IsNotEmpty()
  trapId: string;

  @IsString()
  @IsNotEmpty()
  trapName: string;

  @IsString()
  @IsNotEmpty({ message: 'La descripción del problema es obligatoria' })
  description: string;
}
