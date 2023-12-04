import { Body, Controller, Get, Query, Post } from '@nestjs/common';
import { LogsService } from './logs/logs.service';
import { Log } from './data-source/data-source.service';
import { ErrorHandlerService } from './error-handler/error-handler.service';
import { IDataBaseService } from './database/database.service';
import { query } from 'express';

@Controller()
export class AppController {
	constructor(
		private readonly logService: LogsService,
		private readonly errorHandlerService: ErrorHandlerService,
		private readonly dataBaseService: IDataBaseService,
	) {}

	@Get('/logs')
	getLogs(@Query() query: any): Promise<Log[]> {
		try {
			return this.logService.findAll(query);
		} catch (error) {
			throw this.errorHandlerService.handleError(error);
		}
	}

	@Post('/logs')
	saveLogs(@Body() logs: Log[]): Promise<any> {
		try {
			console.log(logs);
			return this.dataBaseService.insertLogs(logs);
		} catch (error) {
			throw this.errorHandlerService.handleError(error);
		}
	}
}
