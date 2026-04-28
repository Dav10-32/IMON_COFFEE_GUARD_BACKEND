import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Trap, TrapDocument } from './schemas/trap.schema';
import { Alert, AlertDocument } from '../alerts/schemas/alert.schema';
import { CreateTrapDto } from './dto/create-trap.dto';
import { UpdateTrapDto } from './dto/update-trap.dto';

@Injectable()
export class TrapsService {
  constructor(
    @InjectModel(Trap.name) private trapModel: Model<TrapDocument>,
    @InjectModel(Alert.name) private alertModel: Model<AlertDocument>,
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

  async simulateDetection(trapId: string, farmerId: string, level: 'low' | 'medium' | 'high'): Promise<{ trap: TrapDocument; alert: AlertDocument }> {
    const trap = await this.findById(trapId, farmerId);

    // Update trap status
    trap.status = level === 'high' ? 'alert' : 'active';
    trap.lastDetection = 'Hace unos segundos';
    
    // Update weekly activity (increment last day)
    const activity = [...trap.weeklyActivity];
    activity[6] = (activity[6] || 0) + (level === 'high' ? 3 : level === 'medium' ? 2 : 1);
    trap.weeklyActivity = activity;
    
    await trap.save();

    // Create alert
    const now = new Date();
    const dateStr = now.toLocaleDateString('es-CO', { day: 'numeric', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit', hour12: true });

    const messages = {
      high: `¡Atención! Tu trampa ${trap.name} detectó actividad alta de broca. Te recomendamos revisar el cultivo en esa zona inmediatamente.`,
      medium: `Tu trampa ${trap.name} detectó actividad moderada de broca. Mantén monitoreo constante en esa zona.`,
      low: `Tu trampa ${trap.name} detectó 1 broca. Nivel bajo, mantener monitoreo.`,
    };

    const alert = await this.alertModel.create({
      trapId: trap._id,
      farmerId: new Types.ObjectId(farmerId),
      trapName: trap.name,
      date: dateStr,
      time: timeStr,
      level: level,
      message: messages[level],
      read: false,
    });

    return { trap, alert };
  }
}
