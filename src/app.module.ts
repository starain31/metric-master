import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogsService } from './logs/logs.service';
import { DataSourceService } from './data-source/data-source.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, LogsService, DataSourceService],
})
export class AppModule {}
