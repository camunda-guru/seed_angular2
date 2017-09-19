import { Directive, ElementRef } from '@angular/core';


@Directive({
  selector:'[highlight]'
})
export class HighlightDirective
{

    constructor(element:ElementRef)
    {
        //elem.nativeElement.style.backgroundColor='gold'
        let interval = setInterval(() => {
            let color = element.nativeElement.style.color;
            element.nativeElement.style.color
                = (color === '' || color === 'blue') ? 'red' : 'blue';
        }, 300);
        setTimeout(() => {
            clearInterval(interval);
        }, 10000);
    }
}