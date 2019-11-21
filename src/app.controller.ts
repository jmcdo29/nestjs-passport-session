import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { GoogleGuard } from './google.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(GoogleGuard)
  getHello(): string {
    return this.appService.getHello();
  }
}
