import { Module } from '@nestjs/common';
import { IDataBaseService } from './database.service';
import { MysqlDatabaseModule } from './mysql-database/mysql-database.module';
import { MysqlDatabaseService } from './mysql-database/mysql-database.service';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
	imports: [
		MysqlDatabaseModule,
	],

	providers: [
		{
			provide: IDataBaseService,
			useExisting: MysqlDatabaseService,
		},
	],

	exports: [IDataBaseService],
})
export class DatabaseModule {}
