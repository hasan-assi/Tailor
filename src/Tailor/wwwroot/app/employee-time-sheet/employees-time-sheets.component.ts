import {Component, OnInit, Input} from 'angular2/core';
import {NgForm, FormBuilder, Validators, ControlGroup, Control}    from 'angular2/common';
import {RouteParams, Router, CanDeactivate, ComponentInstruction} from 'angular2/router';
import {Routes} from "../routes.config"
import {EmployeeService } from "../employee/employee.service";
import {EmployeeTimeSheetService } from "../employee-time-sheet/employee-time-sheet.service";
import {Employee } from "../employee/employee";
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

    ngOnInit() {
        //this._empTimeSheetService.getEmployeesTimeSheets(this._date).subscribe(
        //    res=> this._employeesTimeSheets = res,
        //    err => console.log(err)
        //);
        this.load();
    }

    private load() {
        this._empTimeSheetService.getEmployeesTimeSheets(this._date).subscribe(
            res=> this._employeesTimeSheets = res,
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
    checkValue(employee:Employee) {
        alert(employee.Checked);
    }
}