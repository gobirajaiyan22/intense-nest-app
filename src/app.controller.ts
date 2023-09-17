import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("intense")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("count/:id")
  getHello(@Param('id') id: Number): Int32Array[] {
    return this.appService.getHello(id);
  }
}
