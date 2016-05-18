import {Component, OnInit} from '@angular/core';
import {NgForm, FormBuilder, Validators, ControlGroup, Control}    from '@angular/common';
import { Router, RouteSegment} from '@angular/router';
import {RouteParams, ComponentInstruction, CanDeactivate} from '@angular/router-deprecated';
import {TailorRoutes} from "../routes.config"
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
    private _firstName: string;
    private active = true;
    private _form: ControlGroup;
    firstName: Control = new Control("", Validators.required);

    constructor(private employeeService: EmployeeService,
        private _routeParams: RouteSegment,
        private _router: Router,
        private _dialog: DialogService,
        private _fb: FormBuilder) {
        this._form = _fb.group(
            {
                firstName: this.firstName,
                lastName: [''],
                cardNo: ['', Validators.required],
                hourRate: ['', Validators.required],
                hourPerDay: ['', Validators.required]
            }
        );

    }

    routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any {
         //Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
        if (this.submitted || !this.employee || !this._form.dirty) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return this._dialog.confirm('Discard changes?');
    }

    ngOnInit() {
        if (!this.employee) {
            let id = +this._routeParams.getParam('id');
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
                this.employee = new Employee(0,'','','',0,0);
                this._isNew = true;

                this.active = false;
                setTimeout(() => this.active = true, 0);
            }
        }
    }

    onSubmit() {
        if (!this._isNew) {
            this.employeeService.updateEmployee(this.employee).subscribe(
                data => data,
                err => console.log(<any>err),
                () => this.afterSubmit());
        } else {
            this.employeeService.createEmployee(this.employee).subscribe(
                data => data,
                err => console.log(err),
                () => this.afterSubmit());
        }
    }
    test() {
        alert(this._form.dirty);
    }
    afterSubmit() {
        this.submitted = true;
        this._router.navigate([`/${TailorRoutes.employees.path}`]);
    }

    // Reveal in html:
    //   AlterEgo via form.controls = {{showFormControls(hf)}}
    //showFormControls(form: NgForm) {
    //    return form.controls["CreationDate"] && form.controls['msn'].value; // Dr. IQ
    //}

    //get diagnostic() { return JSON.stringify(this.employee); }
    get diagnostic() { return JSON.stringify( this.employee); }
}