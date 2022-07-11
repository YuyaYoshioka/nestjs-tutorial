import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({ host: 'admin.example.com' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
