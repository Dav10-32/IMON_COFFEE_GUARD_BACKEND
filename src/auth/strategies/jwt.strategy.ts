import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { FarmersService } from '../../farmers/farmers.service';

interface JwtPayload {
  sub: string;
  email: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private farmersService: FarmersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'coffee-guard-jwt-secret',
    });
  }

  async validate(payload: JwtPayload) {
    const farmer = await this.farmersService.findById(payload.sub);
    if (!farmer) {
      throw new UnauthorizedException('Usuario no encontrado');
    }
    return { userId: payload.sub, email: payload.email };
  }
}
