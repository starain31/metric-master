import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSourceModule } from './data-source/data-source.module';
import { LogsModule } from './logs/logs.module';
import { ErrorHandlerModule } from './error-handler/error-handler.module';
import { ScheduleModule } from '@nestjs/schedule';
import { PersistLogsModule } from './persist-logs/persist-logs.module';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [
		DataSourceModule,
		LogsModule,
		ErrorHandlerModule,
		PersistLogsModule,
		DatabaseModule,
		ScheduleModule.forRoot(),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
