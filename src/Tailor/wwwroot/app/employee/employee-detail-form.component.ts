import {Component, OnInit} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {RouteParams, Router, CanDeactivate, ComponentInstruction} from 'angular2/router';
import {Routes} from "../routes.config"
import {EmployeeService } from './employee.service';
import {Employee } from "./employee";
import {DialogService} from "../blocks/dialog.service"

@Component({
    selector: 'employee-detail-form',
    templateUrl: 'app/employee/employee-detail-form.component.html'
})
export class EmployeeDetailFormComponent implements OnInit, CanDeactivate  {

    private employee: Employee;// =  Employee.GetDefault();// = new Employee(40,'40', null) ;
    private submitted: Boolean = false;
    private _isNew: Boolean = false;
    private _firstName:string;

    constructor(private employeeService: EmployeeService,
        private _routeParams: RouteParams,
        private _router: Router,
        private _dialog: DialogService) {

    }

    routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any {
         //Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
        if (!this.employee || this.employee.FirstName === this._firstName) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return this._dialog.confirm('Discard changes?');
    }

    ngOnInit() {
        if (!this.employee) {
            let id = +this._routeParams.get('id');
            if (id > 0) {
                this._isNew = false;
                this.employeeService.getEmployee(id).subscribe(res => {
                    this.employee = res;
                    },
                    err => console.log(err)
                );

            }
            else //new
            {
                //this.employee = new Employee();
                this._isNew = true;
            }
        }
    }

    onSubmit() {
        if (!this._isNew) {
            this.employeeService.updateEmployee(this.employee).subscribe(
                data => data,
                err => console.log(err),
                () => this.afterSubmit());
        } else {
            this.employeeService.createEmployee(this.employee).subscribe(
                data => data,
                err => console.log(err),
                () => this.afterSubmit());
        }
    }

    afterSubmit() {
        this.submitted = true;
        this._router.navigate([`/${Routes.employees.name}`]);
    }

    // Reveal in html:
    //   AlterEgo via form.controls = {{showFormControls(hf)}}
    //showFormControls(form: NgForm) {
    //    return form.controls["CreationDate"] && form.controls['msn'].value; // Dr. IQ
    //}

    //get diagnostic() { return JSON.stringify(this.employee); }
    get diagnostic() { return JSON.stringify( this.employee); }
}