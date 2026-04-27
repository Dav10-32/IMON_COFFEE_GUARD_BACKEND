import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SeedService } from './seed.service';
import { Farmer, FarmerSchema } from '../farmers/schemas/farmer.schema';
import { Trap, TrapSchema } from '../traps/schemas/trap.schema';
import { Alert, AlertSchema } from '../alerts/schemas/alert.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Farmer.name, schema: FarmerSchema },
      { name: Trap.name, schema: TrapSchema },
      { name: Alert.name, schema: AlertSchema },
    ]),
  ],
  providers: [SeedService],
})
export class SeedModule { }
