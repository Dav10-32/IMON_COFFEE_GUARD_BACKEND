import { Model } from 'mongoose';
import { Farmer, FarmerDocument } from './schemas/farmer.schema';
export declare class FarmersService {
    private farmerModel;
    constructor(farmerModel: Model<FarmerDocument>);
    findById(id: string): Promise<FarmerDocument | null>;
    findByEmail(email: string): Promise<FarmerDocument | null>;
    create(data: Partial<Farmer>): Promise<FarmerDocument>;
    update(id: string, data: Partial<Farmer>): Promise<FarmerDocument | null>;
    count(): Promise<number>;
}
