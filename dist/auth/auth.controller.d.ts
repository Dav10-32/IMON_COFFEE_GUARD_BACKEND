import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
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
}
