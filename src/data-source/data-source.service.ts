import { Injectable } from '@nestjs/common';
import { FindLogsQuery } from 'src/logs/log.service.interface';

@Injectable()
export abstract class IDataSourceService {
	abstract findAll(query?: FindLogsQuery): Promise<Log[]>;
}

export class Log {
	id: number;
	label: string;
	level: string;
	timestamp: string;
	message: string;
}
