import { Injectable } from '@nestjs/common';

const mockLogs = [
  {
    id: 1,
    label: 'service-1',
    level: 'info',
    message: 'Service 1 is running',
    timestamp: new Date().toISOString(),
  },
  {
    id: 2,
    label: 'service-1',
    level: 'error',
    message: 'Service 1 is down',
    timestamp: new Date().toISOString(),
  },

  {
    id: 3,
    label: 'service-2',
    level: 'info',
    message: 'Service 2 is running',
    timestamp: new Date().toISOString(),
  },
  {
    id: 4,
    label: 'service-2',
    level: 'error',
    message: 'Service 2 is down',
    timestamp: new Date().toISOString(),
  },

  {
    id: 5,
    label: 'service-3',
    level: 'info',
    message: 'Service 3 is running',
    timestamp: new Date().toISOString(),
  },
  {
    id: 6,
    label: 'service-3',
    level: 'error',
    message: 'Service 3 is down',
    timestamp: new Date().toISOString(),
  },
];

@Injectable()
export class MockDataSourceService {
  findAll(query?: any) {
    return mockLogs.filter((log) => {
      if(!query) return true;
      if(query.level) return log.level === query.level;
    });
  }
}
