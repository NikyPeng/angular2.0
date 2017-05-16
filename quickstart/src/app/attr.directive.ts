import { Directive,ElementRef } from '@angular/core';
@Directive({
	selector : '[hightlight]'
})
export class HighLightDirective{
	constructor(el:ElementRef){
		el.nativeElement.style.backgroundColor = 'gold';
		console.log(`* AppRoot highlight called for ${el.nativeElement.tagName}`); //不能使用单引号
	}
}
