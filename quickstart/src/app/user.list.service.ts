import { Injectable,Type } from '@angular/core';
import { Hero } from './hero';
const HEROES = [
	new Hero('Windstorm','Weather mastery'),
	new Hero('Mr.Nice','Killing them width kindness'),
	new Hero('Magneta','Manipulates metalic objects'),
	new Hero('LeBron.James','King of NBA')
]
@Injectable()
export class UserListService{
	constructor(){
		
	}
	getAll(type: Type<any>): PromiseLike<any[]>{
		if(type === Hero){
			return Promise.resolve<Hero[]>(HEROES);
		}
		let err = new Error('Cannot get object of Hero');
		throw err;
	}
}
