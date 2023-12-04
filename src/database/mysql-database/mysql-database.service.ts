import { Injectable } from '@nestjs/common';
import { IDataBaseService } from '../database.service';
import { Log } from 'src/data-source/data-source.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Logs } from './entities/ user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MysqlDatabaseService extends IDataBaseService {
    constructor(
		@InjectRepository(Logs)
        private logsRepository: Repository<Logs>,
	) {
		super();
	}

    insertLogs(logs: Log[]): Promise<any> {
        console.log(logs);
        return this.logsRepository.save(logs);
    }

    findAll(query?: any): Promise<Log[]> {
        return this.logsRepository.findBy(query)
    }
}
