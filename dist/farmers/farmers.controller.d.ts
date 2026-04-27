import { FarmersService } from './farmers.service';
import { TrapsService } from '../traps/traps.service';
import { UpdateFarmerDto } from './dto/update-farmer.dto';
export declare class FarmersController {
    private farmersService;
    private trapsService;
    constructor(farmersService: FarmersService, trapsService: TrapsService);
    getMe(req: any): Promise<any>;
    updateMe(req: any, dto: UpdateFarmerDto): Promise<import("./schemas/farmer.schema").FarmerDocument | null>;
}
