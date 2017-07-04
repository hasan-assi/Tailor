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
var EmployeeService = (function () {
    //   person: Person = null;
    function EmployeeService(_http) {
        this._http = _http;
        this.employees = [];
        this._employeesUrl = '/api/Employee/';
    }
    EmployeeService.prototype.getEmployees = function () {
        //return an observable
        return this._http.get(this._employeesUrl)
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    EmployeeService.prototype.getEmployee = function (id) {
        return this._http.get('/api/Employee/' + id.toString())
            .map(function (response) {
            return response.json();
        });
    };
    EmployeeService.prototype.updateEmployee = function (employee) {
        var postHeaders = new http_1.Headers();
        postHeaders.append('Content-Type', 'application/json');
        return this._http.put(this._employeesUrl + employee.Id.toString(), JSON.stringify(employee), { headers: postHeaders })
            .catch(this.handleError);
    };
    EmployeeService.prototype.handleError = function (err) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(err);
        return Observable_1.Observable.throw(err || 'Server error');
    };
    EmployeeService.prototype.createEmployee = function (employee) {
        var body = JSON.stringify(employee);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this._employeesUrl, body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    EmployeeService.prototype.deleteEmployee = function (employeeId) {
        return this._http.delete('/api/Employee/' + employeeId.toString());
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map