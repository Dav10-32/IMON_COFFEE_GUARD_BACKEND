import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTrapDto {
  @ApiProperty({ example: 'Trampa N°4', description: 'Nombre identificador de la trampa' })
  @IsString()
  @IsNotEmpty({ message: 'El nombre de la trampa es obligatorio' })
  name: string;

  @ApiProperty({ example: 'Lote Alto - Cerca del tanque', description: 'Ubicación de la trampa en la finca' })
  @IsString()
  @IsNotEmpty({ message: 'La ubicación es obligatoria' })
  location: string;
}
