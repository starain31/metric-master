import { Module } from '@nestjs/common';
import { IDataSourceService } from './data-source.service';
import { MockDataSourceService } from './mock-data-source/data-source.mock.service';
import { MockDataSourceModule } from './mock-data-source/mock-data-source.module';

@Module({
	imports: [MockDataSourceModule],

	providers: [
		{
			provide: IDataSourceService,
			useExisting: MockDataSourceService,
		},
	],
	exports: [IDataSourceService],
})
export class DataSourceModule {}
