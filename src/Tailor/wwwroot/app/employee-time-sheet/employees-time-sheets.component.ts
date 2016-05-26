import {Component, OnInit, Input} from '@angular/core';
import {NgForm, FormBuilder, Validators, ControlGroup, Control}    from '@angular/common';
import {RouteParams, Router, CanDeactivate, ComponentInstruction} from '@angular/router-deprecated';
import {TailorRoutes} from "../routes.config"
import {EmployeeService, Employee } from "../employee/Index";
import {EmployeeTimeSheetService } from "./employee-time-sheet.service";
import {EmployeeTimeSheet } from "./employee-time-sheet";
import {DialogService} from "../blocks/dialog.service"
import {MyDate} from "../directive/date"


@Component({
    selector: 'employees-time-sheets',
    directives: [MyDate],
    templateUrl: 'app/employee-time-sheet/employees-time-sheets.component.html'
})
export class EmployeesTimeSheetsComponent implements OnInit {

    constructor(private _dialogService: DialogService,
        private _empTimeSheetService: EmployeeTimeSheetService,
        private _fb: FormBuilder) {
        this._form = _fb.group({

        });
        this._date = new Date();
    }
    @Input() _date: Date;
    private _employeesTimeSheets: EmployeeTimeSheet[];

    private _form: ControlGroup;
    private isSelectAllIntermediate: boolean = false;
    private selectAll: boolean = false;

    ngOnInit() {
        //this._empTimeSheetService.getEmployeesTimeSheets(this._date).subscribe(
        //    res=> this._employeesTimeSheets = res,
        //    err => console.log(err)
        //);
        this.load();
    }

    private load() {
        this._empTimeSheetService.getEmployeesTimeSheets(this._date).subscribe(
            res => {
                this._employeesTimeSheets = res;
                this.isSelectAllIndeterminate();
            },
            err => console.log(err)
        );
    }
    onSubmit() {

        //let empsTimeSheets: EmployeeTimeSheet[] = [];

        //for (var i = 0; i < this._employees.length-1; i++) {
        //    let emp = this._employees[i];
        //     let empTimeSheet = new EmployeeTimeSheet(0, emp, this._date, +emp.HourPerDay, +emp.HourRate, (+emp.HourPerDay * +emp.HourRate));
        //    empsTimeSheets.push(empTimeSheet);
        //}

        //for (var emp in this._employees.) {
        //    let e = <Employee>emp;
        //    console.log(e.HourPerDay);
        //    //let empTimeSheet = new EmployeeTimeSheet(0, <Employee>emp, this._date, +emp.HourPerDay, +emp.HourRate, (+emp.HourPerDay * +emp.HourRate));
        //    //empsTimeSheets.push(empTimeSheet);
        //}

        this._empTimeSheetService.createEmployeesTimeSheets(this._employeesTimeSheets, this._date).subscribe(
            res => this.load()
        );
    }
    getDayTimeSheet() {
        this.load();
    }
    test() {
        alert(this._date);
    }
    checkValue(employee: Employee) {
        alert(employee.Checked);
    }

    onSelectAll(selectAll: boolean) {

        this._employeesTimeSheets.forEach(x=> x.Checked = selectAll);
    }

    onEmpTimesheetSelect(emp: EmployeeTimeSheet, checkedValue: boolean) {
        emp.Checked = checkedValue;
        this.isSelectAllIndeterminate();
    }
    isSelectAllIndeterminate() {

        if (this._employeesTimeSheets.filter((x: EmployeeTimeSheet) => x.Checked).length == 0) {
            this.isSelectAllIntermediate = false;
            this.selectAll = false
        }
        else if (this._employeesTimeSheets.filter((x: EmployeeTimeSheet) => !x.Checked).length == 0) {
            this.isSelectAllIntermediate = false;
            this.selectAll = true
        }
        else {
            this.isSelectAllIntermediate = true;
        }
    }
}