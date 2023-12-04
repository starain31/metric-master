import { Test, TestingModule } from '@nestjs/testing';
import { LogsService } from './logs.service';

describe('LogsService', () => {
  let service: LogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogsService],
    }).compile();

    service = module.get<LogsService>(LogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of logs', () => {
    const result = service.findAll();
    expect(result).toBeInstanceOf(Array);
  });

  it('should return an array of logs with length greater than 0', () => {
    const result = service.findAll();
    expect(result.length).toBeGreaterThan(0);
  });

  it("should return log with valid interface", () => {
    const logs = service.findAll();
    for (const log of logs) {
      expect(log).toHaveProperty("id");
      expect(log).toHaveProperty("label");
      expect(log).toHaveProperty("level");
      expect(log).toHaveProperty("timestamp");
      expect(log).toHaveProperty("message");
    }
  });

});
