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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
/**
 * people service
 */
var EmployeeTimeSheetService = (function () {
    //   person: Person = null;
    function EmployeeTimeSheetService(_http) {
        this._http = _http;
        this.employeeTimeSheets = [];
        this._employeesUrl = '/api/EmployeeTimeSheet/';
    }
    //getEmployeesTimeSheet() {
    //    //return an observable
    //    return this._http.get(this._employeesUrl)
    //        .map(res => <EmployeeTimeSheet[]>res.json())
    //        .do(data => console.log(data))
    //        .catch(this.handleError);
    //}
    //getEmployee(id: number) {
    //    return this._http.get('/api/Employee/' + id.toString())
    //        .map((response) => {
    //            return <Employee>response.json();
    //        });
    //}
    //updateEmployee(employee: Employee) {
    //    var postHeaders = new Headers();
    //    postHeaders.append('Content-Type', 'application/json');
    //    return this._http.put(this._employeesUrl + employee.Id.toString(), JSON.stringify(employee), { headers: postHeaders })
    //        //.map(res => <Employee>res.json())
    //        //.do(data => console.log(data))
    //        .catch(this.handleError);
    //}
    EmployeeTimeSheetService.prototype.toDateString = function (date) {
        return (date.getFullYear().toString() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + ("0" + (date.getDate())).slice(-2))
            + 'T' + date.toTimeString().slice(0, 5);
    };
    EmployeeTimeSheetService.prototype.handleError = function (err) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(err);
        return Observable_1.Observable.throw(err || 'Server error');
    };
    EmployeeTimeSheetService.prototype.getEmployeesTimeSheets = function (date) {
        //return an observable
        return this._http.get(this._employeesUrl + this.toDateString(date))
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    EmployeeTimeSheetService.prototype.createEmployeesTimeSheets = function (employeesTimeSheets, date) {
        var body = JSON.stringify(employeesTimeSheets);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var dateFormated = this.toDateString(date);
        return this._http.post(this._employeesUrl + dateFormated, body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    return EmployeeTimeSheetService;
}());
EmployeeTimeSheetService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmployeeTimeSheetService);
exports.EmployeeTimeSheetService = EmployeeTimeSheetService;
//# sourceMappingURL=employee-time-sheet.service.js.map