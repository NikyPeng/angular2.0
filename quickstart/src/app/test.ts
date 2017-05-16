import { Component,OnInit,Inject } from '@angular/core';
import { UserService } from './user.service';
import { Hero } from './hero';
import { LoggerService } from './logger.service';
import { APP_CONFIG } from './app.config.service';
//import { UserListService } from './user.list.service';
@Component({
	selector : 'app-test',
	templateUrl : './test.component.html'
})

export class Test implements OnInit {
	name = 'pc';
	datas = [{
		name : '詹姆斯',
		power : 320
	},{
		name : '科比',
		power : 330
	}];
	heroes: Hero[] = [];
	u : string;
	title : string;
	constructor(private user: UserService,private logger: LoggerService,@Inject(APP_CONFIG) private config: AppConfig ){};
	ngOnInit(){
		this.u = this.user.userName;
		this.title = this.config.title;
		this.heroes = this.user.getUsers();
		//console.log(this.logger.logname);
	}
	
	
}
