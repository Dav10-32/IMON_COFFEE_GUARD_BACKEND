import { Controller, Get, Patch, Param, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { AlertsService } from './alerts.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('alerts')
@Controller('alerts')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('JWT-auth')
export class AlertsController {
  constructor(private alertsService: AlertsService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todas las alertas del agricultor' })
  @ApiResponse({ status: 200, description: 'Lista de alertas obtenida exitosamente' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  findAll(@Request() req: any) {
    return this.alertsService.findAllByFarmer(req.user.userId);
  }

  @Patch(':id/read')
  @ApiOperation({ summary: 'Marcar alerta como leída' })
  @ApiParam({ name: 'id', description: 'ID de la alerta' })
  @ApiResponse({ status: 200, description: 'Alerta marcada como leída' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  @ApiResponse({ status: 404, description: 'Alerta no encontrada' })
  markAsRead(@Param('id') id: string, @Request() req: any) {
    return this.alertsService.markAsRead(id, req.user.userId);
  }
}
