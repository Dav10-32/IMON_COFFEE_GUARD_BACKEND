import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Trap, TrapSchema } from './schemas/trap.schema';
import { TrapsService } from './traps.service';
import { TrapsController } from './traps.controller';
import { AlertsModule } from '../alerts/alerts.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Trap.name, schema: TrapSchema }]),
    forwardRef(() => AlertsModule),
  ],
  controllers: [TrapsController],
  providers: [TrapsService],
  exports: [TrapsService],
})
export class TrapsModule { }
