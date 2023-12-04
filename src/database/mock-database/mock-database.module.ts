import { Module } from '@nestjs/common';
import { MockDatabaseService } from './database.mock.service';

@Module({
	imports: [],
	providers: [MockDatabaseService],
	exports: [MockDatabaseService],
})
export class MockDatabaseModule {}
