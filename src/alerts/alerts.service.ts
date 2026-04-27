import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Alert, AlertDocument } from './schemas/alert.schema';

@Injectable()
export class AlertsService {
  constructor(
    @InjectModel(Alert.name) private alertModel: Model<AlertDocument>,
  ) {}

  async findAllByFarmer(farmerId: string): Promise<AlertDocument[]> {
    return this.alertModel
      .find({ farmerId: new Types.ObjectId(farmerId) })
      .sort({ read: 1, createdAt: -1 });
  }

  async findByTrap(trapId: string, farmerId: string): Promise<AlertDocument[]> {
    return this.alertModel
      .find({
        trapId: new Types.ObjectId(trapId),
        farmerId: new Types.ObjectId(farmerId),
      })
      .sort({ createdAt: -1 });
  }

  async markAsRead(id: string, farmerId: string): Promise<AlertDocument> {
    const alert = await this.alertModel.findById(id);
    if (!alert) {
      throw new NotFoundException('Alerta no encontrada');
    }
    if (alert.farmerId.toString() !== farmerId) {
      throw new ForbiddenException('No tienes acceso a esta alerta');
    }
    alert.read = true;
    return alert.save();
  }

  async countUnread(farmerId: string): Promise<number> {
    return this.alertModel.countDocuments({
      farmerId: new Types.ObjectId(farmerId),
      read: false,
    });
  }
}
