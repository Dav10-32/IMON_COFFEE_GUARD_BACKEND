import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FarmerDocument = Farmer & Document;

@Schema({ timestamps: true })
export class Farmer {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true, lowercase: true, trim: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  farmName: string;

  @Prop({ default: '' })
  municipality: string;

  @Prop({ default: '' })
  department: string;

  @Prop({ default: 0 })
  hectares: number;

  @Prop({ type: String, default: null })
  cooperative: string | null;
}

export const FarmerSchema = SchemaFactory.createForClass(Farmer);
