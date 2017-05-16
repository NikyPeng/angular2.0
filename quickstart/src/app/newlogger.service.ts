import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { UserService } from './user.service';

@Injectable()

export class NewLoggerService extends LoggerService {
	constructor(private user: UserService ){ super(); }
	logname(){
		console.log(this.user.userName);
	}
}
