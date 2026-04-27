import { Model } from 'mongoose';
import { TrapDocument } from './schemas/trap.schema';
import { CreateTrapDto } from './dto/create-trap.dto';
import { UpdateTrapDto } from './dto/update-trap.dto';
export declare class TrapsService {
    private trapModel;
    constructor(trapModel: Model<TrapDocument>);
    findAllByFarmer(farmerId: string): Promise<TrapDocument[]>;
    findById(id: string, farmerId: string): Promise<TrapDocument>;
    create(farmerId: string, dto: CreateTrapDto): Promise<TrapDocument>;
    update(id: string, farmerId: string, dto: UpdateTrapDto): Promise<TrapDocument>;
    delete(id: string, farmerId: string): Promise<void>;
    countByFarmer(farmerId: string): Promise<{
        total: number;
        active: number;
    }>;
}
