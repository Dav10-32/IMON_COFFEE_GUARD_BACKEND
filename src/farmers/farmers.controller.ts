import { Controller, Get, Patch, Body, UseGuards, Request } from '@nestjs/common';
import { FarmersService } from './farmers.service';
import { TrapsService } from '../traps/traps.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UpdateFarmerDto } from './dto/update-farmer.dto';

@Controller('farmers')
@UseGuards(JwtAuthGuard)
export class FarmersController {
  constructor(
    private farmersService: FarmersService,
    private trapsService: TrapsService,
  ) {}

  @Get('me')
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
  async updateMe(@Request() req: any, @Body() dto: UpdateFarmerDto) {
    return this.farmersService.update(req.user.userId, dto);
  }
}
