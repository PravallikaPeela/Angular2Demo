import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    template: `<div>
                <h1>{{pageheader}}</h1>
                <app-employee></app-employee>
               </div>`,
})
export class AppComponent  {
    pageheader: string = 'Empolyee Details';
}
