import {Component, OnInit, Pipe} from 'angular2/core';
import {Router} from 'angular2/router';
import {Routes} from "../routes.config";
import {EmployeeService} from './employee.service';
import {Employee } from "./employee";

@Component({
    selector: 'employees',
    templateUrl: './app/employee/employees.component.html'
})
export class EmployeesComponent implements OnInit {
    public employees: Array<Employee>;

    constructor(private _employeesService: EmployeeService,
        private _router: Router) {
    }

    ngOnInit() {
        this._employeesService.getEmployees()
            .subscribe(res => this.employees = res);
    }

    goToDetail(employee: Employee) {
        this._router.navigate([`/${Routes.employeeDetail.name}`, { id: employee.Id }]);
    }

    newAsset() {
        this._router.navigate([`/${Routes.employeeNew.name}`]);
    }

    //deleteAsset(assetId:number) {
    //    this._employeesService.deleteAsset(assetId).subscribe();
    //}

    get diagnostic() { return JSON.stringify(this.employees); }

}