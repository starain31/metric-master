import { Injectable } from '@nestjs/common';
import { IDataSourceService } from '../data-source/data-source.service';

@Injectable()
export class LogsService {
  constructor(private readonly dataSourceService: IDataSourceService) {}

  findAll() {
    return this.dataSourceService.findAll();
  }
}
