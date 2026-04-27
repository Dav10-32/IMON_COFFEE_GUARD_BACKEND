import { AlertsService } from './alerts.service';
export declare class AlertsController {
    private alertsService;
    constructor(alertsService: AlertsService);
    findAll(req: any): Promise<import("./schemas/alert.schema").AlertDocument[]>;
    markAsRead(id: string, req: any): Promise<import("./schemas/alert.schema").AlertDocument>;
}
