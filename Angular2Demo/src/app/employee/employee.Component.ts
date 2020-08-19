import { Component } from '@angular/core';
@Component({
    selector: 'app-employee',
    templateUrl:'app/employee/employee.component.html'
})
export class employeeComponent {
    firstname: string = "venkata pravallika";
    lastname: string = "malla";
    gender: string = "female";
    age: number = 32;
}