import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Farmer, FarmerDocument } from '../farmers/schemas/farmer.schema';
import { Trap, TrapDocument } from '../traps/schemas/trap.schema';
import { Alert, AlertDocument } from '../alerts/schemas/alert.schema';

@Injectable()
export class SeedService implements OnModuleInit {
  private readonly logger = new Logger(SeedService.name);

  constructor(
    @InjectModel(Farmer.name) private farmerModel: Model<FarmerDocument>,
    @InjectModel(Trap.name) private trapModel: Model<TrapDocument>,
    @InjectModel(Alert.name) private alertModel: Model<AlertDocument>,
  ) { }

  async onModuleInit() {
    const farmerCount = await this.farmerModel.countDocuments();
    if (farmerCount === 0) {
      this.logger.log('🌱 Base de datos vacía, insertando datos de prueba...');
      await this.seed();
      this.logger.log('✅ Datos de prueba insertados exitosamente');
    } else {
      this.logger.log('📦 Base de datos ya tiene datos, omitiendo seed');
    }
  }

  private async seed() {
    // Create demo farmer
    const hashedPassword = await bcrypt.hash('demo1234', 10);
    const farmer = await this.farmerModel.create({
      name: 'Carlos Mora',
      email: 'carlos@coffeeguard.co',
      password: hashedPassword,
      farmName: 'La Esperanza',
      municipality: 'Pitalito',
      department: 'Huila',
      hectares: 4.5,
      cooperative: 'Cooperativa Cafetera del Huila',
    });

    // Create traps
    const trap1 = await this.trapModel.create({
      name: 'Trampa N°1',
      location: 'Lote Alto - Cerca del tanque',
      status: 'active',
      batteryLevel: 87,
      lastDetection: 'Hace 2 días',
      connectivity: 'online',
      weeklyActivity: [0, 0, 1, 0, 0, 2, 0],
      farmerId: farmer._id,
    });

    const trap2 = await this.trapModel.create({
      name: 'Trampa N°2',
      location: 'Lote Centro - Entrada principal',
      status: 'alert',
      batteryLevel: 62,
      lastDetection: 'Hace 3 horas',
      connectivity: 'online',
      weeklyActivity: [1, 0, 3, 2, 1, 4, 2],
      farmerId: farmer._id,
    });

    const trap3 = await this.trapModel.create({
      name: 'Trampa N°3',
      location: 'Lote Bajo - Cerca de la quebrada',
      status: 'active',
      batteryLevel: 91,
      lastDetection: 'Hace 5 días',
      connectivity: 'weak',
      weeklyActivity: [0, 0, 0, 0, 1, 0, 0],
      farmerId: farmer._id,
    });

    // Create alerts
    await this.alertModel.create([
      {
        trapId: trap2._id,
        farmerId: farmer._id,
        trapName: 'Trampa N°2',
        date: '24 abr 2026',
        time: '06:15 a.m.',
        level: 'high',
        message: '¡Atención! Tu trampa N°2 detectó actividad de broca el 24 abr 2026 a las 06:15 a.m. Te recomendamos revisar el cultivo en esa zona.',
        read: false,
      },
      {
        trapId: trap3._id,
        farmerId: farmer._id,
        trapName: 'Trampa N°3',
        date: '20 abr 2026',
        time: '08:30 a.m.',
        level: 'low',
        message: 'Tu trampa N°3 detectó 1 broca el 20 abr 2026 a las 08:30 a.m. Nivel bajo, mantener monitoreo.',
        read: true,
      },
      {
        trapId: trap2._id,
        farmerId: farmer._id,
        trapName: 'Trampa N°2',
        date: '23 abr 2026',
        time: '05:40 a.m.',
        level: 'medium',
        message: 'Tu trampa N°2 detectó 2 brocas el 23 abr 2026 a las 05:40 a.m. Está en nivel de revisión.',
        read: true,
      },
      {
        trapId: trap2._id,
        farmerId: farmer._id,
        trapName: 'Trampa N°2',
        date: '22 abr 2026',
        time: '07:00 a.m.',
        level: 'medium',
        message: 'Tu trampa N°2 detectó 1 broca el 22 abr 2026 a las 07:00 a.m. Está en nivel de revisión.',
        read: true,
      },
    ]);

    this.logger.log(`  👤 Farmer: carlos@coffeeguard.co / demo1234`);
    this.logger.log(`  🪤 Trampas: ${trap1.name}, ${trap2.name}, ${trap3.name}`);
    this.logger.log(`  🔔 4 alertas creadas`);
  }
}
