import { Module } from '@nestjs/common';
import { PersistLogsService } from './persist-logs.service';
import { DataSourceModule } from 'src/data-source/data-source.module';
import { DatabaseModule } from 'src/database/database.module';

@Module({
	imports: [DataSourceModule, DatabaseModule],
	providers: [PersistLogsService],
})
export class PersistLogsModule {}
