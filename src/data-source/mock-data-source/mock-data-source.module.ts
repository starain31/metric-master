import { Module } from '@nestjs/common';
import { MockDataSourceService } from './data-source.mock.service';

@Module({
	imports: [],
	providers: [MockDataSourceService],
	exports: [MockDataSourceService],
})
export class MockDataSourceModule {}
