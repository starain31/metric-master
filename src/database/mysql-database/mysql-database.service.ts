import { Inject, Injectable } from '@nestjs/common';
import { IDataBaseService } from '../database.service';
import { Log } from 'src/data-source/data-source.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Logs } from './entities/ user.entity';
import { Repository } from 'typeorm';
import { CACHE_MANAGER, } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class MysqlDatabaseService extends IDataBaseService {
    constructor(
		@InjectRepository(Logs)
        private logsRepository: Repository<Logs>,

        @Inject(CACHE_MANAGER)
        private cacheManager: Cache
	) {
		super();
	}

    insertLogs(logs: Log[]): Promise<any> {
        console.log(logs);
        return this.logsRepository.save(logs);
    }

    async findAll(query?: any): Promise<Log[]> {
        const key = Buffer.from(JSON.stringify(query)).toString('base64');

        const value = await this.cacheManager.get(key);
        if (value) {
            return value as Log[]; 
        } else {
            const logs = await this.logsRepository.find(query);
            await this.cacheManager.set(key, logs);
            return logs;
        }
    }
}
