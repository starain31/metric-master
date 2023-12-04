import { Module } from '@nestjs/common';
import { PersistLogsService } from './persist-logs.service';
import { DataSourceModule } from 'src/data-source/data-source.module';

@Module({
	imports: [DataSourceModule],
	providers: [PersistLogsService],
})
export class PersistLogsModule {}
