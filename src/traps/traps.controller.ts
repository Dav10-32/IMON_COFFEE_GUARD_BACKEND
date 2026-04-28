import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { TrapsService } from './traps.service';
import { AlertsService } from '../alerts/alerts.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateTrapDto } from './dto/create-trap.dto';
import { UpdateTrapDto } from './dto/update-trap.dto';
import { SimulateDetectionDto } from './dto/simulate-detection.dto';

@ApiTags('traps')
@Controller('traps')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('JWT-auth')
export class TrapsController {
  constructor(
    private trapsService: TrapsService,
    private alertsService: AlertsService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Listar todas las trampas del agricultor' })
  @ApiResponse({ status: 200, description: 'Lista de trampas obtenida exitosamente' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  findAll(@Request() req: any) {
    return this.trapsService.findAllByFarmer(req.user.userId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener detalle de una trampa con sus alertas' })
  @ApiParam({ name: 'id', description: 'ID de la trampa' })
  @ApiResponse({ status: 200, description: 'Detalle de trampa obtenido exitosamente' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  @ApiResponse({ status: 404, description: 'Trampa no encontrada' })
  async findOne(@Param('id') id: string, @Request() req: any) {
    const trap = await this.trapsService.findById(id, req.user.userId);
    const alerts = await this.alertsService.findByTrap(id, req.user.userId);
    return {
      ...trap.toObject(),
      lastAlerts: alerts,
    };
  }

  @Post()
  @ApiOperation({ summary: 'Crear nueva trampa' })
  @ApiResponse({ status: 201, description: 'Trampa creada exitosamente' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  create(@Request() req: any, @Body() dto: CreateTrapDto) {
    return this.trapsService.create(req.user.userId, dto);
  }

  @Post('simulate-detection')
  @ApiOperation({ summary: '🎯 Simular detección de broca (para demos)' })
  @ApiResponse({ status: 201, description: 'Detección simulada exitosamente' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  @ApiResponse({ status: 404, description: 'Trampa no encontrada' })
  async simulateDetection(@Request() req: any, @Body() dto: SimulateDetectionDto) {
    return this.trapsService.simulateDetection(dto.trapId, req.user.userId, dto.level);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar trampa' })
  @ApiParam({ name: 'id', description: 'ID de la trampa' })
  @ApiResponse({ status: 200, description: 'Trampa actualizada exitosamente' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  @ApiResponse({ status: 404, description: 'Trampa no encontrada' })
  update(@Param('id') id: string, @Request() req: any, @Body() dto: UpdateTrapDto) {
    return this.trapsService.update(id, req.user.userId, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar trampa' })
  @ApiParam({ name: 'id', description: 'ID de la trampa' })
  @ApiResponse({ status: 200, description: 'Trampa eliminada exitosamente' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  @ApiResponse({ status: 404, description: 'Trampa no encontrada' })
  delete(@Param('id') id: string, @Request() req: any) {
    return this.trapsService.delete(id, req.user.userId);
  }
}
