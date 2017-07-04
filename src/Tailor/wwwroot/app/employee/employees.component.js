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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var routes_config_1 = require("../routes.config");
var Index_1 = require("./Index");
var EmployeesComponent = (function () {
    function EmployeesComponent(_employeesService, _router) {
        this._employeesService = _employeesService;
        this._router = _router;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        this.getAllEmployess();
    };
    EmployeesComponent.prototype.getAllEmployess = function () {
        var _this = this;
        this._employeesService.getEmployees()
            .subscribe(function (res) { return _this.employees = res; }, function (error) { return _this.erroMessage = error; });
    };
    EmployeesComponent.prototype.goToDetail = function (employee) {
        this._router.navigate(["/" + routes_config_1.TailorRoutes.employeeDetail.path, { id: employee.Id }]);
    };
    EmployeesComponent.prototype.newEmployee = function () {
        this._router.navigate(["/" + routes_config_1.TailorRoutes.employeeNew.path]);
    };
    EmployeesComponent.prototype.deleteEmployee = function (employeeId) {
        this._employeesService.deleteEmployee(employeeId).subscribe();
        this.getAllEmployess();
        //let index = this.employees.indexOf(this.employees.filter(x => x.Id == employeeId)[0]);
        //this.employees.slice(index);
        //console.log(this.employees.filter(x => x.Id == employeeId));
    };
    Object.defineProperty(EmployeesComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.employees); },
        enumerable: true,
        configurable: true
    });
    return EmployeesComponent;
}());
EmployeesComponent = __decorate([
    core_1.Component({
        selector: 'employees',
        templateUrl: './app/employee/employees.component.html'
    }),
    __metadata("design:paramtypes", [Index_1.EmployeeService,
        router_1.Router])
], EmployeesComponent);
exports.EmployeesComponent = EmployeesComponent;
//# sourceMappingURL=employees.component.js.map