import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Farmer, FarmerDocument } from './schemas/farmer.schema';

@Injectable()
export class FarmersService {
  constructor(
    @InjectModel(Farmer.name) private farmerModel: Model<FarmerDocument>,
  ) {}

  async findById(id: string): Promise<FarmerDocument | null> {
    return this.farmerModel.findById(id).select('-password');
  }

  async findByEmail(email: string): Promise<FarmerDocument | null> {
    return this.farmerModel.findOne({ email: email.toLowerCase() });
  }

  async create(data: Partial<Farmer>): Promise<FarmerDocument> {
    return this.farmerModel.create(data);
  }

  async update(id: string, data: Partial<Farmer>): Promise<FarmerDocument | null> {
    return this.farmerModel
      .findByIdAndUpdate(id, { $set: data }, { new: true })
      .select('-password');
  }

  async count(): Promise<number> {
    return this.farmerModel.countDocuments();
  }
}
