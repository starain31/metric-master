import { Injectable } from '@nestjs/common';
import { IDataSourceService } from '../data-source/data-source.service';
import { FindLogsQuery } from './log.service.interface';

@Injectable()
export class LogsService {
  constructor(private readonly dataSourceService: IDataSourceService) {}

  findAll(query?: FindLogsQuery) {
    return this.dataSourceService.findAll(query);
  }
}
