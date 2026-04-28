import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ReportsService } from './reports.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateReportDto } from './dto/create-report.dto';

@ApiTags('reports')
@Controller('reports')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('JWT-auth')
export class ReportsController {
  constructor(private reportsService: ReportsService) { }

  @Post()
  @ApiOperation({ summary: 'Crear reporte de problema' })
  @ApiResponse({ status: 201, description: 'Reporte creado exitosamente' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  create(@Request() req: any, @Body() dto: CreateReportDto) {
    return this.reportsService.create(req.user.userId, dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos los reportes del agricultor' })
  @ApiResponse({ status: 200, description: 'Lista de reportes obtenida exitosamente' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  findAll(@Request() req: any) {
    return this.reportsService.findAllByFarmer(req.user.userId);
  }
}
