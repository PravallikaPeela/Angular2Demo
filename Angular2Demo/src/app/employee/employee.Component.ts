import { Component } from '@angular/core';
@Component({
    selector: 'app-employee',
    templateUrl:'app/employee/employee.component.html'
})
export class employeeComponent {
    firstname: string = "pravallika";
    lastname: string = "peela";
    gender: string = "female";
    age: number = 32;
}