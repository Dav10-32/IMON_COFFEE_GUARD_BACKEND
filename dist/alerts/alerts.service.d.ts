import { Model } from 'mongoose';
import { AlertDocument } from './schemas/alert.schema';
export declare class AlertsService {
    private alertModel;
    constructor(alertModel: Model<AlertDocument>);
    findAllByFarmer(farmerId: string): Promise<AlertDocument[]>;
    findByTrap(trapId: string, farmerId: string): Promise<AlertDocument[]>;
    markAsRead(id: string, farmerId: string): Promise<AlertDocument>;
    countUnread(farmerId: string): Promise<number>;
}
