import { Injectable } from '@nestjs/common';
import { FindLogsQuery } from './log.service.interface';
import { IDataBaseService } from '../database/database.service';

@Injectable()
export class LogsService {
	constructor(
		private readonly dataBaseService: IDataBaseService,
		) {}

	findAll(query?: FindLogsQuery) {
		return this.dataBaseService.findAll(query);
	}
}
