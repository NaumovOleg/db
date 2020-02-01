import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    console.log(ExtractJwt.fromAuthHeaderWithScheme('Authorization'))
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
      ignoreExpiration: false,
      secretOrKey: 'secret',
    });
  }

  async validate(payload: any) {
    console.log(payload)
    return { userId: payload.sub, username: payload.username };
  }
  async login(user: any) {
    console.log('fvmrjknvjknjh')

  }

}