import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth2';
import { AuthService } from './auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly authService: AuthService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      scope: process.env.GOOGLE_SCOPE.split(' '),
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    callback: (err: Error, user: any) => void,
  ) {
    const user = await this.authService.findOrCreateUser(profile);
    if (!user) {
      callback(new Error('No user found'), null);
    }
    callback(null, user);
  }
}
