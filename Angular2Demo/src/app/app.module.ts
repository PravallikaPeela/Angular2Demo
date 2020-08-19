import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { employeeComponent } from './employee/employee.Component';

@NgModule({
  imports:      [ BrowserModule ],
    declarations: [AppComponent, employeeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
