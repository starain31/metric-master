import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSourceModule } from './data-source/data-source.module';
import { LogsModule } from './logs/logs.module';
import { ErrorHandlerModule } from './error-handler/error-handler.module';
import { ScheduleModule } from '@nestjs/schedule';
import { PersistLogsModule } from './persist-logs/persist-logs.module';

@Module({
	imports: [
		DataSourceModule,
		LogsModule,
		ErrorHandlerModule,
		ScheduleModule.forRoot(),
		PersistLogsModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
