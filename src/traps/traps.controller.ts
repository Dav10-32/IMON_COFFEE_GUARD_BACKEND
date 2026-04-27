import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards, Request } from '@nestjs/common';
import { TrapsService } from './traps.service';
import { AlertsService } from '../alerts/alerts.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateTrapDto } from './dto/create-trap.dto';
import { UpdateTrapDto } from './dto/update-trap.dto';

@Controller('traps')
@UseGuards(JwtAuthGuard)
export class TrapsController {
  constructor(
    private trapsService: TrapsService,
    private alertsService: AlertsService,
  ) {}

  @Get()
  findAll(@Request() req: any) {
    return this.trapsService.findAllByFarmer(req.user.userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Request() req: any) {
    const trap = await this.trapsService.findById(id, req.user.userId);
    const alerts = await this.alertsService.findByTrap(id, req.user.userId);
    return {
      ...trap.toObject(),
      lastAlerts: alerts,
    };
  }

  @Post()
  create(@Request() req: any, @Body() dto: CreateTrapDto) {
    return this.trapsService.create(req.user.userId, dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Request() req: any, @Body() dto: UpdateTrapDto) {
    return this.trapsService.update(id, req.user.userId, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Request() req: any) {
    return this.trapsService.delete(id, req.user.userId);
  }
}
