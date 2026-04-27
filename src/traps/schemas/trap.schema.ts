import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TrapDocument = Trap & Document;

@Schema({ timestamps: true })
export class Trap {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true, enum: ['active', 'inactive', 'alert'], default: 'active' })
  status: string;

  @Prop({ default: 100 })
  batteryLevel: number;

  @Prop({ default: 'Recién instalada' })
  lastDetection: string;

  @Prop({ required: true, enum: ['online', 'offline', 'weak'], default: 'online' })
  connectivity: string;

  @Prop({ type: [Number], default: [0, 0, 0, 0, 0, 0, 0] })
  weeklyActivity: number[];

  @Prop({ type: Types.ObjectId, ref: 'Farmer', required: true })
  farmerId: Types.ObjectId;
}

export const TrapSchema = SchemaFactory.createForClass(Trap);
