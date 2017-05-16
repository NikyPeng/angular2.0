import { Injectable,Type,Inject } from '@angular/core';
import { Hero } from './hero';
import { UserListService } from './user.list.service';
const HEROES = [
	new Hero('Windstorm','Weather mastery'),
	new Hero('Mr.Nice','Killing them width kindness'),
	new Hero('Magneta','Manipulates metalic objects'),
	new Hero('LeBron.James','King of NBA')
];
@Injectable()
export class UserService {
	userName = '彭铖';
	private heroes: Hero[] = [];
	
	constructor(private lists: UserListService){
		
	};
	
	getUsers = () => {
		this.lists.getAll(Hero).then((res)=>{
			this.heroes.push(...res);
		})
		return this.heroes;
	};
	log = () => {
		console.log(this.userName);
	}
}
