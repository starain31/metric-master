import { Controller, Get, Query } from '@nestjs/common';
import { LogsService } from './logs/logs.service';
import { Log } from './data-source/data-source.service';
import { ErrorHandlerService } from './error-handler/error-handler.service';

@Controller()
export class AppController {
  constructor(
    private readonly logService: LogsService,
    private readonly errorHandlerService: ErrorHandlerService,
  ) {}

  @Get('/logs')
  getLogs(@Query('level') level: string): Promise<Log[]> {
    try {
      return this.logService.findAll({
        level,
      });
    } catch (error) {
      throw this.errorHandlerService.handleError(error);
    }
  }
}
