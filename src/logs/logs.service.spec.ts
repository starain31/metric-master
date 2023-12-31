import { Test, TestingModule } from '@nestjs/testing';
import { LogsService } from './logs.service';
import { MockDatabaseService } from '../database/mock-database/database.mock.service';
import { IDataBaseService } from '../database/database.service';
import { MockDatabaseModule } from '../database/mock-database/mock-database.module';

describe('LogsService', () => {
	let service: LogsService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [MockDatabaseModule],
			providers: [
				LogsService,
				{
					provide: IDataBaseService,
					useClass: MockDatabaseService,
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
		const firstLog = (await service.findAll())[0];

		expect(firstLog.id).toEqual(1);
		expect(firstLog.label).toEqual('service-1');
		expect(firstLog.level).toEqual('info');
		expect(firstLog.message).toEqual('Service 1 is running');
	});

	it('should return log with filter level error', async () => {
		const level = 'info';
		const logs = await service.findAll({ level });

		expect(logs.length).toEqual(3);

		for (const log of logs) {
			expect(log.level).toEqual(level);
		}
	});

	it('should return log with filter level error and label service-1', async () => {
		const level = 'error';
		const logs = await service.findAll({ level });

		expect(logs.length).toEqual(3);

		for (const log of logs) {
			expect(log.level).toEqual(level);
		}
	});
});
