import { IsEmail, IsString, IsNotEmpty, MinLength, IsOptional, IsNumber, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'Carlos Mora', description: 'Nombre completo del agricultor' })
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  name: string;

  @ApiProperty({ example: 'carlos@coffeeguard.co', description: 'Email del agricultor' })
  @IsEmail({}, { message: 'Email inválido' })
  email: string;

  @ApiProperty({ example: 'demo1234', description: 'Contraseña (mínimo 6 caracteres)', minLength: 6 })
  @IsString()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password: string;

  @ApiProperty({ example: 'La Esperanza', description: 'Nombre de la finca' })
  @IsString()
  @IsNotEmpty({ message: 'El nombre de la finca es obligatorio' })
  farmName: string;

  @ApiProperty({ example: 'Pitalito', description: 'Municipio donde está la finca' })
  @IsString()
  @IsNotEmpty({ message: 'El municipio es obligatorio' })
  municipality: string;

  @ApiProperty({ example: 'Huila', description: 'Departamento donde está la finca' })
  @IsString()
  @IsNotEmpty({ message: 'El departamento es obligatorio' })
  department: string;

  @ApiProperty({ example: 4.5, description: 'Extensión de la finca en hectáreas' })
  @IsNumber({}, { message: 'Las hectáreas deben ser un número' })
  @Min(0.1, { message: 'Las hectáreas deben ser mayor a 0' })
  hectares: number;

  @ApiPropertyOptional({ example: 'Cooperativa Cafetera del Huila', description: 'Cooperativa a la que pertenece (opcional)' })
  @IsOptional()
  @IsString()
  cooperative?: string;
}
