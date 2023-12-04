import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSourceModule } from './data-source/data-source.module';
import { LogsModule } from './logs/logs.module';

@Module({
  imports: [DataSourceModule, LogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
