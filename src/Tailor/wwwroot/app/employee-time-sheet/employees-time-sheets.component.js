"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var Index_1 = require("./Index");
var dialog_service_1 = require("../blocks/dialog.service");
var date_1 = require("../directive/date");
var EmployeesTimeSheetsComponent = (function () {
    function EmployeesTimeSheetsComponent(_dialogService, _empTimeSheetService, _fb) {
        this._dialogService = _dialogService;
        this._empTimeSheetService = _empTimeSheetService;
        this._fb = _fb;
        this.isSelectAllIntermediate = false;
        this.selectAll = false;
        this._form = _fb.group({});
        this._date = new Date();
    }
    EmployeesTimeSheetsComponent.prototype.ngOnInit = function () {
        //this._empTimeSheetService.getEmployeesTimeSheets(this._date).subscribe(
        //    res=> this._employeesTimeSheets = res,
        //    err => console.log(err)
        //);
        this.load();
    };
    EmployeesTimeSheetsComponent.prototype.load = function () {
        var _this = this;
        this._empTimeSheetService.getEmployeesTimeSheets(this._date).subscribe(function (res) { return _this._employeesTimeSheets = res; }, function (err) { return console.log(err); });
    };
    EmployeesTimeSheetsComponent.prototype.onSubmit = function () {
        //let empsTimeSheets: EmployeeTimeSheet[] = [];
        var _this = this;
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
        this._empTimeSheetService.createEmployeesTimeSheets(this._employeesTimeSheets, this._date).subscribe(function (res) { return _this.load(); });
    };
    EmployeesTimeSheetsComponent.prototype.getDayTimeSheet = function () {
        this.load();
    };
    EmployeesTimeSheetsComponent.prototype.test = function () {
        alert(this._date);
    };
    EmployeesTimeSheetsComponent.prototype.checkValue = function (employee) {
        alert(employee.Checked);
    };
    EmployeesTimeSheetsComponent.prototype.onSelectAll = function (selectAll) {
        this._employeesTimeSheets.forEach(function (x) { return x.Checked = selectAll; });
    };
    EmployeesTimeSheetsComponent.prototype.isSelectAllIndeterminate = function (emp, checkedValue) {
        emp.Checked = checkedValue;
        if (this._employeesTimeSheets.filter(function (x) { return x.Checked; }).length == 0) {
            this.isSelectAllIntermediate = false;
            this.selectAll = false;
        }
        else if (this._employeesTimeSheets.filter(function (x) { return !x.Checked; }).length == 0) {
            this.isSelectAllIntermediate = false;
            this.selectAll = true;
        }
        else {
            this.isSelectAllIntermediate = true;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Date)
    ], EmployeesTimeSheetsComponent.prototype, "_date", void 0);
    EmployeesTimeSheetsComponent = __decorate([
        core_1.Component({
            selector: 'employees-time-sheets',
            directives: [date_1.MyDate],
            templateUrl: 'app/employee-time-sheet/employees-time-sheets.component.html'
        }), 
        __metadata('design:paramtypes', [dialog_service_1.DialogService, Index_1.EmployeeTimeSheetService, common_1.FormBuilder])
    ], EmployeesTimeSheetsComponent);
    return EmployeesTimeSheetsComponent;
}());
exports.EmployeesTimeSheetsComponent = EmployeesTimeSheetsComponent;
//# sourceMappingURL=employees-time-sheets.component.js.map