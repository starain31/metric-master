import { Module } from '@nestjs/common';
import { LogsService } from './logs.service';
import { DataSourceModule } from 'src/data-source/data-source.module';

@Module({
    imports: [DataSourceModule],
    providers: [LogsService],
    exports: [LogsService],
})
export class LogsModule {}
