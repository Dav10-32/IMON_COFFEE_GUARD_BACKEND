import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { FarmersService } from '../farmers/farmers.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private farmersService: FarmersService,
    private jwtService: JwtService,
  ) { }

  async register(dto: RegisterDto) {
    // Check if email already exists
    const existing = await this.farmersService.findByEmail(dto.email);
    if (existing) {
      throw new ConflictException('Ya existe una cuenta con este email');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    // Create farmer
    const farmer = await this.farmersService.create({
      name: dto.name,
      email: dto.email.toLowerCase(),
      password: hashedPassword,
      farmName: dto.farmName,
      municipality: dto.municipality,
      department: dto.department,
      hectares: dto.hectares,
      cooperative: dto.cooperative || null,
    });

    // Generate token
    const token = this.generateToken(farmer._id.toString(), farmer.email);

    return {
      access_token: token,
      farmer: {
        id: farmer._id.toString(),
        name: farmer.name,
        email: farmer.email,
        farmName: farmer.farmName,
      },
    };
  }

  async login(dto: LoginDto) {
    const farmer = await this.farmersService.findByEmail(dto.email);
    if (!farmer) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    const isPasswordValid = await bcrypt.compare(dto.password, farmer.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    const token = this.generateToken(farmer._id.toString(), farmer.email);

    return {
      access_token: token,
      farmer: {
        id: farmer._id.toString(),
        name: farmer.name,
        email: farmer.email,
        farmName: farmer.farmName,
      },
    };
  }

  private generateToken(userId: string, email: string): string {
    return this.jwtService.sign({ sub: userId, email });
  }
}
