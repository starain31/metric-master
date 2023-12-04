import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { IDataSourceService } from 'src/data-source/data-source.service';

@Injectable()
export class PersistLogsService {
	constructor(private readonly dataSourceService: IDataSourceService) {}
	private readonly logger = new Logger(PersistLogsService.name);

	@Cron('*/10 * * * * *')
	persistLogs() {
		this.logger.debug(`Logs persisting at ${new Date().toDateString()}...`);

		this.dataSourceService.findAll().then((logs) => {
			this.logger.debug(logs);
		});
	}
}
