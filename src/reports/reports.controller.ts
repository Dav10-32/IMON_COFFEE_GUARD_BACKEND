import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateReportDto } from './dto/create-report.dto';

@Controller('reports')
@UseGuards(JwtAuthGuard)
export class ReportsController {
  constructor(private reportsService: ReportsService) { }

  @Post()
  create(@Request() req: any, @Body() dto: CreateReportDto) {
    return this.reportsService.create(req.user.userId, dto);
  }

  @Get()
  findAll(@Request() req: any) {
    return this.reportsService.findAllByFarmer(req.user.userId);
  }
}
