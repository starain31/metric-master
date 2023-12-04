import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { IDataSourceService } from 'src/data-source/data-source.service';
import { IDataBaseService } from 'src/database/database.service';

const LOG_RETENTION_INTERVAL_MINUTE = 120;
const LOG_RETENTION_CROM = CronExpression.EVERY_10_SECONDS;

@Injectable()
export class PersistLogsService {
	private readonly logger = new Logger(PersistLogsService.name);

	constructor(
		private readonly dataSourceService: IDataSourceService,
		private readonly dataBaseService: IDataBaseService,
	) {}

	@Cron(LOG_RETENTION_CROM)
	persistLogs() {
		try {
			this.logger.debug(
				`Logs persisting at ${new Date().toDateString()}...`,
			);

			const timestamp = new Date();
			timestamp.setMinutes(
				timestamp.getMinutes() - LOG_RETENTION_INTERVAL_MINUTE,
			);
			this.dataSourceService.findAll({timestamp: timestamp.toISOString()}).then((logs) => {
				return this.dataBaseService.insertLogs(logs);
			});
		} catch (error) {
			this.logger.error(error);
		}
	}
}
