import {Component, OnInit, Pipe} from '@angular/core';
import {Router} from '@angular/router';
import {TailorRoutes} from "../routes.config";
import {EmployeeService, Employee} from './Index';

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
        this._router.navigate([`/${TailorRoutes.employeeDetail.path}`, { id: employee.Id }]);
    }

    newEmployee() {
        this._router.navigate([`/${TailorRoutes.employeeNew.path}`]);
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