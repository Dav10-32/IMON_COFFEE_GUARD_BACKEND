import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SimulateDetectionDto {
  @ApiProperty({ example: '507f1f77bcf86cd799439011', description: 'ID de la trampa' })
  @IsString()
  @IsNotEmpty()
  trapId: string;

  @ApiProperty({ 
    example: 'high', 
    description: 'Nivel de alerta',
    enum: ['low', 'medium', 'high']
  })
  @IsEnum(['low', 'medium', 'high'])
  level: 'low' | 'medium' | 'high';
}
