import { ReportsService } from './reports.service';
import { CreateReportDto } from './dto/create-report.dto';
export declare class ReportsController {
    private reportsService;
    constructor(reportsService: ReportsService);
    create(req: any, dto: CreateReportDto): Promise<import("./schemas/report.schema").ReportDocument>;
    findAll(req: any): Promise<import("./schemas/report.schema").ReportDocument[]>;
}
