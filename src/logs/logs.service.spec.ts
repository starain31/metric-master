import { Test, TestingModule } from '@nestjs/testing';
import { LogsService } from './logs.service';
import { MockDataSourceService } from '../data-source/mock-data-source/data-source.mock.service';
import { IDataSourceService } from '../data-source/data-source.service';
import { MockDataSourceModule } from '../data-source/mock-data-source/mock-data-source.module';

describe('LogsService', () => {
  let service: LogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MockDataSourceModule
      ],
      providers: [
        LogsService,
        {
          provide: IDataSourceService,
          useClass: MockDataSourceService,
        },
      ],
    }).compile();

    service = module.get<LogsService>(LogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of logs', async () => {
    const result = await service.findAll();
    expect(result).toBeInstanceOf(Array);
  });

  it('should return an array of logs with length greater than 0', async () => {
    const result = await service.findAll();
    expect(result.length).toBeGreaterThan(0);
  });

  it('should return log with valid interface', async () => {
    const logs = await service.findAll();
    for (const log of logs) {
      expect(log).toHaveProperty('id');
      expect(log).toHaveProperty('label');
      expect(log).toHaveProperty('level');
      expect(log).toHaveProperty('timestamp');
      expect(log).toHaveProperty('message');
    }
  });

  it('should return log from mock data source', async () => {
    const firstLog = await service.findAll()[0];
    
    expect(firstLog.id).toEqual(1);
    expect(firstLog.label).toEqual('service-1');
    expect(firstLog.level).toEqual('info');
    expect(firstLog.message).toEqual('Service 1 is running');
  });
});
