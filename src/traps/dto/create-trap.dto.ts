import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTrapDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre de la trampa es obligatorio' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'La ubicación es obligatoria' })
  location: string;
}
