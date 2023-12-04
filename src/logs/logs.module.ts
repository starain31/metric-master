import { Module } from '@nestjs/common';
import { LogsService } from './logs.service';
import { DataSourceModule } from 'src/data-source/data-source.module';
import { DatabaseModule } from 'src/database/database.module';

@Module({
	imports: [DatabaseModule],
	providers: [LogsService],
	exports: [LogsService],
})
export class LogsModule {}
