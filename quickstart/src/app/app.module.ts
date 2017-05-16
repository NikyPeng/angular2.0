import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { Test } from './test';
import { HighLightDirective } from './attr.directive';
import { UserService } from './user.service';
import { UserListService } from './user.list.service';
import { NewLoggerService } from './newlogger.service';
//import { HeroDetailComponent } from './hero-detail.component';
//import { HeroListComponent } from './hero-list.component';
//import { HeroService } from './hero.service';
//import { BackendService } from './backend.service';
import { LoggerService } from './logger.service';
import { APP_CONFIG } from './app.config.service';
import { HERO_DI_CONFIG } from './app.config';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
  	AppComponent,
  	Test,
  	HighLightDirective
  ],
  providers : [
  	UserListService,
  	UserService,
  	{ provide : LoggerService,useClass: NewLoggerService },
  	{ provide : APP_CONFIG,useValue : HERO_DI_CONFIG }
  	//{ provide : APP_CONFIG,useValue: HERO_DI_CONFIG }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
