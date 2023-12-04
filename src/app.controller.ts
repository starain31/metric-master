import { Controller, Get } from '@nestjs/common';
import { LogsService } from './logs/logs.service';
import { Log } from './data-source/data-source.service';

@Controller()
export class AppController {
  constructor(private readonly logService: LogsService) {}

  @Get('/logs')
  getHello(): Promise<Log[]> {
    return this.logService.findAll();
  }
}
