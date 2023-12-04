import { Module } from '@nestjs/common';
import { MysqlDatabaseService } from './mysql-database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Logs } from './entities/ user.entity';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'localhost',
			port: 3306,
			username: 'root',
			password: 'my-secret-pw',
			database: 'metric-master',
			entities: [Logs],
			synchronize: true,
		}),

    TypeOrmModule.forFeature([Logs]),
	],
	providers: [MysqlDatabaseService],
	exports: [MysqlDatabaseService],
})
export class MysqlDatabaseModule {}
