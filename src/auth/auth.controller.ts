import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GoogleGuard } from '../google.guard';

@Controller('/api/auth')
export class AuthController {
  @UseGuards(AuthGuard('google'))
  @Get('google/login')
  async googleLogin() {
    return;
  }

  @UseGuards(GoogleGuard)
  @Get('google/callback')
  async googleCallback() {
    return '<a href="/api/auth/test-login">Check to see session works</a>';
  }

  @UseGuards(GoogleGuard)
  @Get('test-login')
  async testLogin() {
    return 'All is good. You\'re signed in';
  }
}
