/*
import { Component,Input } from '@angular/core';
import { Hero } from './hero';

@Component{
	selector: 'hero-detail',
	templateUrl: './hero-detail.component.html'
};
export class HeroDetailComponent{
	@Input() hero:Hero;
}
*/
import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/