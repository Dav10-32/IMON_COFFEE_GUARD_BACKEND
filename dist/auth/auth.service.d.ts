import { JwtService } from '@nestjs/jwt';
import { FarmersService } from '../farmers/farmers.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private farmersService;
    private jwtService;
    constructor(farmersService: FarmersService, jwtService: JwtService);
    register(dto: RegisterDto): Promise<{
        access_token: string;
        farmer: {
            id: import("mongoose").Types.ObjectId;
            name: string;
            email: string;
            farmName: string;
        };
    }>;
    login(dto: LoginDto): Promise<{
        access_token: string;
        farmer: {
            id: import("mongoose").Types.ObjectId;
            name: string;
            email: string;
            farmName: string;
        };
    }>;
    private generateToken;
}
