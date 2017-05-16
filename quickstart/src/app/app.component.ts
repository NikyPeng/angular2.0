import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  	<h1 hightlight >Hello {{name}} {{ title }}</h1>
  	<app-test></app-test>
  `,
})
export class AppComponent  { 
	name = 'Angular';
	title = 'Vue';
}
