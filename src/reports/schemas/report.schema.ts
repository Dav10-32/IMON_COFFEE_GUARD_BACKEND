import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ReportDocument = Report & Document;

@Schema({ timestamps: true })
export class Report {
  @Prop({ type: Types.ObjectId, ref: 'Trap', required: true })
  trapId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Farmer', required: true })
  farmerId: Types.ObjectId;

  @Prop({ required: true })
  trapName: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, enum: ['pending', 'reviewing', 'resolved'], default: 'pending' })
  status: string;
}

export const ReportSchema = SchemaFactory.createForClass(Report);
