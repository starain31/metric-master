import { Injectable } from '@nestjs/common';

@Injectable()
export class ErrorHandlerService {
	handleError(error: Error) {
		console.error(error);
		return new Error('Internal Server Error');
	}
}
