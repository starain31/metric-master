import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSourceModule } from './data-source/data-source.module';
import { LogsModule } from './logs/logs.module';
import { ErrorHandlerModule } from './error-handler/error-handler.module';

@Module({
  imports: [DataSourceModule, LogsModule, ErrorHandlerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
