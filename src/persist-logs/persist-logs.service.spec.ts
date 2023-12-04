import { Test, TestingModule } from '@nestjs/testing';
import { PersistLogsService } from './persist-logs.service';

describe('PersistLogsService', () => {
	let service: PersistLogsService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [PersistLogsService],
		}).compile();

		service = module.get<PersistLogsService>(PersistLogsService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
