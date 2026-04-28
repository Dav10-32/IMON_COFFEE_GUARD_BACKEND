import { Controller, Get, Patch, Body, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { FarmersService } from './farmers.service';
import { TrapsService } from '../traps/traps.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UpdateFarmerDto } from './dto/update-farmer.dto';

@ApiTags('farmers')
@Controller('farmers')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('JWT-auth')
export class FarmersController {
  constructor(
    private farmersService: FarmersService,
    private trapsService: TrapsService,
  ) {}

  @Get('me')
  @ApiOperation({ summary: 'Obtener perfil del agricultor actual' })
  @ApiResponse({ status: 200, description: 'Perfil obtenido exitosamente' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  async getMe(@Request() req: any) {
    const farmer = await this.farmersService.findById(req.user.userId);
    const trapCounts = await this.trapsService.countByFarmer(req.user.userId);
    
    return {
      ...farmer?.toObject(),
      activeTraps: trapCounts.active,
      totalTraps: trapCounts.total,
    };
  }

  @Patch('me')
  @ApiOperation({ summary: 'Actualizar perfil del agricultor' })
  @ApiResponse({ status: 200, description: 'Perfil actualizado exitosamente' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  async updateMe(@Request() req: any, @Body() dto: UpdateFarmerDto) {
    return this.farmersService.update(req.user.userId, dto);
  }
}
