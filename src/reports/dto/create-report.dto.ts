import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReportDto {
  @ApiProperty({ example: '507f1f77bcf86cd799439011', description: 'ID de la trampa' })
  @IsString()
  @IsNotEmpty()
  trapId: string;

  @ApiProperty({ example: 'Trampa N°2', description: 'Nombre de la trampa' })
  @IsString()
  @IsNotEmpty()
  trapName: string;

  @ApiProperty({ example: 'La trampa no enciende', description: 'Descripción del problema' })
  @IsString()
  @IsNotEmpty({ message: 'La descripción del problema es obligatoria' })
  description: string;
}
