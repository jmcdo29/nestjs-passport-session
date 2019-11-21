import {
  Controller,
  Get,
  UseGuards,
  Req,
  Post,
  Redirect,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GoogleGuard } from '../google.guard';
import { GoogleLoginGuard } from '../google-login.guard';

@Controller('/api/auth')
export class AuthController {
  @UseGuards(AuthGuard('google'))
  @Get('google/login')
  async googleLogin() {
    return;
  }

  @UseGuards(GoogleLoginGuard)
  @Redirect('/')
  @Get('google/callback')
  async googleCallback() {
    return;
  }

  @UseGuards(GoogleGuard)
  @Post('test-login')
  async testLoginPost() {
    return 'All is good. You\'re signed in';
  }

  @UseGuards(GoogleGuard)
  @Get('test-login')
  async testLoginGet() {
    return 'All is good. You\'re signed in';
  }
}
