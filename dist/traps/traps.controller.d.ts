import { TrapsService } from './traps.service';
import { AlertsService } from '../alerts/alerts.service';
import { CreateTrapDto } from './dto/create-trap.dto';
import { UpdateTrapDto } from './dto/update-trap.dto';
export declare class TrapsController {
    private trapsService;
    private alertsService;
    constructor(trapsService: TrapsService, alertsService: AlertsService);
    findAll(req: any): Promise<import("./schemas/trap.schema").TrapDocument[]>;
    findOne(id: string, req: any): Promise<any>;
    create(req: any, dto: CreateTrapDto): Promise<import("./schemas/trap.schema").TrapDocument>;
    update(id: string, req: any, dto: UpdateTrapDto): Promise<import("./schemas/trap.schema").TrapDocument>;
    delete(id: string, req: any): Promise<void>;
}
