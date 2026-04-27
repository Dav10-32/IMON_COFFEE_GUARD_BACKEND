import { OnModuleInit } from '@nestjs/common';
import { Model } from 'mongoose';
import { FarmerDocument } from '../farmers/schemas/farmer.schema';
import { TrapDocument } from '../traps/schemas/trap.schema';
import { AlertDocument } from '../alerts/schemas/alert.schema';
export declare class SeedService implements OnModuleInit {
    private farmerModel;
    private trapModel;
    private alertModel;
    private readonly logger;
    constructor(farmerModel: Model<FarmerDocument>, trapModel: Model<TrapDocument>, alertModel: Model<AlertDocument>);
    onModuleInit(): Promise<void>;
    private seed;
}
