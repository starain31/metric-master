import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { IDataSourceService } from 'src/data-source/data-source.service';
import { IDataBaseService } from 'src/database/database.service';

const LOG_RETENTION_MINUTES = 1;

@Injectable()
export class PersistLogsService {
	constructor(
		private readonly dataSourceService: IDataSourceService,
		private readonly dataBaseService: IDataBaseService,

		) {}
	private readonly logger = new Logger(PersistLogsService.name);

	@Cron('*/10 * * * * *')
	persistLogs() {
		this.logger.debug(`Logs persisting at ${new Date().toDateString()}...`);

		const timestamp = new Date();
		timestamp.setMinutes(timestamp.getMinutes() - LOG_RETENTION_MINUTES);
		this.dataSourceService.findAll({}).then((logs) => {
			return this.dataBaseService.insertLogs(logs);
		});
	}
}
