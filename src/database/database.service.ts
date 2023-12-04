import { Injectable } from '@nestjs/common';
import { Log } from 'src/data-source/data-source.service';

@Injectable()
export abstract class IDataBaseService {
    abstract insertLogs(logs: Log[]): Promise<any>;
    abstract findAll(query?: any): Promise<Log[]>;
}
