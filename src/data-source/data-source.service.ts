import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class IDataSourceService {
	abstract findAll(): Promise<Log[]>;
}

class Log {
    id: number;
    label: string;
    level: string;
    timestamp: string;
    message: string;
}
