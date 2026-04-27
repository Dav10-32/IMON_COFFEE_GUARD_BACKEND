import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Report, ReportDocument } from './schemas/report.schema';
import { CreateReportDto } from './dto/create-report.dto';

@Injectable()
export class ReportsService {
  constructor(
    @InjectModel(Report.name) private reportModel: Model<ReportDocument>,
  ) {}

  async create(farmerId: string, dto: CreateReportDto): Promise<ReportDocument> {
    return this.reportModel.create({
      ...dto,
      farmerId: new Types.ObjectId(farmerId),
      trapId: new Types.ObjectId(dto.trapId),
      status: 'pending',
    });
  }

  async findAllByFarmer(farmerId: string): Promise<ReportDocument[]> {
    return this.reportModel
      .find({ farmerId: new Types.ObjectId(farmerId) })
      .sort({ createdAt: -1 });
  }
}
