﻿import {Component, OnInit, Pipe} from '@angular/core';
import {Router} from '@angular/router';
import {EmployeeService, Employee} from '.';

@Component({
    selector: 'employees',
    templateUrl: 'employees.component.html'
})
export class EmployeesComponent implements OnInit {
    public employees: Array<Employee>;
    public erroMessage: any;

    constructor(private _employeesService: EmployeeService,
        private _router: Router) {
    }

    ngOnInit() {
        this.getAllEmployess();
    }

    getAllEmployess() {
        this._employeesService.getEmployees()
            .subscribe(
            res => this.employees = res,
            error => this.erroMessage = <any>error);
    }
    goToDetail(employee: Employee) {
         this._router.navigate(['/employeeDetail', { id: employee.id }]);
    }

    newEmployee() {
         this._router.navigate([`/employeeDetail`]);
    }

    deleteEmployee(employeeId:number) {
        this._employeesService.deleteEmployee(employeeId).subscribe();
        this.getAllEmployess();
        //let index = this.employees.indexOf(this.employees.filter(x => x.Id == employeeId)[0]);
        //this.employees.slice(index);

        //console.log(this.employees.filter(x => x.Id == employeeId));
    }

    get diagnostic() { return JSON.stringify(this.employees); }

}