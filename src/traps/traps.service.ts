import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Trap, TrapDocument } from './schemas/trap.schema';
import { CreateTrapDto } from './dto/create-trap.dto';
import { UpdateTrapDto } from './dto/update-trap.dto';

@Injectable()
export class TrapsService {
  constructor(
    @InjectModel(Trap.name) private trapModel: Model<TrapDocument>,
  ) {}

  async findAllByFarmer(farmerId: string): Promise<TrapDocument[]> {
    return this.trapModel.find({ farmerId: new Types.ObjectId(farmerId) }).sort({ createdAt: -1 });
  }

  async findById(id: string, farmerId: string): Promise<TrapDocument> {
    const trap = await this.trapModel.findById(id);
    if (!trap) {
      throw new NotFoundException('Trampa no encontrada');
    }
    if (trap.farmerId.toString() !== farmerId) {
      throw new ForbiddenException('No tienes acceso a esta trampa');
    }
    return trap;
  }

  async create(farmerId: string, dto: CreateTrapDto): Promise<TrapDocument> {
    return this.trapModel.create({
      ...dto,
      farmerId: new Types.ObjectId(farmerId),
      status: 'active',
      batteryLevel: 100,
      lastDetection: 'Recién instalada',
      connectivity: 'online',
      weeklyActivity: [0, 0, 0, 0, 0, 0, 0],
    });
  }

  async update(id: string, farmerId: string, dto: UpdateTrapDto): Promise<TrapDocument> {
    const trap = await this.findById(id, farmerId);
    Object.assign(trap, dto);
    return trap.save();
  }

  async delete(id: string, farmerId: string): Promise<void> {
    await this.findById(id, farmerId);
    await this.trapModel.findByIdAndDelete(id);
  }

  async countByFarmer(farmerId: string): Promise<{ total: number; active: number }> {
    const total = await this.trapModel.countDocuments({ farmerId: new Types.ObjectId(farmerId) });
    const active = await this.trapModel.countDocuments({
      farmerId: new Types.ObjectId(farmerId),
      status: { $in: ['active', 'alert'] },
    });
    return { total, active };
  }
}
