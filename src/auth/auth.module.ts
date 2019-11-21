import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SessionSerializer } from './session.serializer';
import { GoogleStrategy } from './google.strategy';

@Module({
  imports: [
    PassportModule.register({
      authType: 'reauthenticate',
      prompt: 'select_account',
    }),
  ],
  providers: [AuthService, SessionSerializer, GoogleStrategy],
  controllers: [AuthController],
  exports: [AuthService, PassportModule],
})
export class AuthModule {}
