import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type AlertDocument = Alert & Document;

@Schema({ timestamps: true })
export class Alert {
  @Prop({ type: Types.ObjectId, ref: 'Trap', required: true })
  trapId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Farmer', required: true })
  farmerId: Types.ObjectId;

  @Prop({ required: true })
  trapName: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  time: string;

  @Prop({ required: true, enum: ['low', 'medium', 'high'] })
  level: string;

  @Prop({ required: true })
  message: string;

  @Prop({ default: false })
  read: boolean;
}

export const AlertSchema = SchemaFactory.createForClass(Alert);
