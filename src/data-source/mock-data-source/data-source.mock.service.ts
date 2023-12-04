import { Injectable } from '@nestjs/common';

const mockLogs = [
	{
		label: 'service-1',
		level: 'info',
		message: 'Service 1 is running',
		timestamp: "2023-12-04T11:00:00.000Z",
	},
	{
		label: 'service-1',
		level: 'error',
		message: 'Service 1 is down',
		timestamp: "2023-12-04T11:01:00.000Z",
	},

	{
		label: 'service-2',
		level: 'info',
		message: 'Service 2 is running',
		timestamp: "2023-12-04T11:03:00.000Z",
	},
	{
		label: 'service-2',
		level: 'error',
		message: 'Service 2 is down',
		timestamp: "2023-12-04T11:04:00.000ZZ",
	},

	{
		label: 'service-3',
		level: 'info',
		message: 'Service 3 is running',
		timestamp: "2023-12-04T11:05:00.000Z",
	},
	{
		label: 'service-3',
		level: 'error',
		message: 'Service 3 is down',
		timestamp: "2023-12-04T11:06:00.000Z",
	},
];

@Injectable()
export class MockDataSourceService {
	async findAll(query?: any) {
		console.log(query);
		
		return mockLogs.filter((log) => {
			if (!query) return true;

			return (query.level ? log.level === query.level: true)
				&& (query.timestamp ?  new Date(log.timestamp) >= new Date(query.timestamp) : true);
		});
	}
}
