import { Injectable } from '@nestjs/common';

@Injectable()
export class LogsService {
  findAll() {
    return [{
        id: 1,
        label: 'service-1',
        level: 'info',
        message: 'Service 1 is running',
        timestamp: new Date().toISOString(),
    }];
  }
}
