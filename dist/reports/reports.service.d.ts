import { Model } from 'mongoose';
import { ReportDocument } from './schemas/report.schema';
import { CreateReportDto } from './dto/create-report.dto';
export declare class ReportsService {
    private reportModel;
    constructor(reportModel: Model<ReportDocument>);
    create(farmerId: string, dto: CreateReportDto): Promise<ReportDocument>;
    findAllByFarmer(farmerId: string): Promise<ReportDocument[]>;
}
