import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Farmer, FarmerSchema } from './schemas/farmer.schema';
import { FarmersService } from './farmers.service';
import { FarmersController } from './farmers.controller';
import { TrapsModule } from '../traps/traps.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Farmer.name, schema: FarmerSchema }]),
    forwardRef(() => TrapsModule),
  ],
  controllers: [FarmersController],
  providers: [FarmersService],
  exports: [FarmersService],
})
export class FarmersModule {}
