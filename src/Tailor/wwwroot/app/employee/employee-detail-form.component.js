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
var router_1 = require('@angular/router');
var routes_config_1 = require("../routes.config");
var employee_service_1 = require('./employee.service');
var employee_1 = require("./employee");
var dialog_service_1 = require("../blocks/dialog.service");
var EmployeeDetailFormComponent = (function () {
    function EmployeeDetailFormComponent(employeeService, _routeParams, _router, _dialog, _fb) {
        this.employeeService = employeeService;
        this._routeParams = _routeParams;
        this._router = _router;
        this._dialog = _dialog;
        this._fb = _fb;
        this.submitted = false;
        this._isNew = false;
        this.active = true;
        this.firstName = new common_1.Control("", common_1.Validators.required);
        this._form = _fb.group({
            firstName: this.firstName,
            lastName: [''],
            cardNo: ['', common_1.Validators.required],
            hourRate: ['', common_1.Validators.required],
            hourPerDay: ['', common_1.Validators.required]
        });
    }
    EmployeeDetailFormComponent.prototype.routerCanDeactivate = function (next, prev) {
        //Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
        if (this.submitted || !this.employee || !this._form.dirty) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return this._dialog.confirm('Discard changes?');
    };
    EmployeeDetailFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.employee) {
            var id = +this._routeParams.getParam('id');
            if (id > 0) {
                this._isNew = false;
                this.employeeService.getEmployee(id).subscribe(function (res) {
                    _this.employee = res;
                }, function (err) { return console.log(err); });
            }
            else {
                this.employee = new employee_1.Employee(0, '', '', '', 0, 0);
                this._isNew = true;
                this.active = false;
                setTimeout(function () { return _this.active = true; }, 0);
            }
        }
    };
    EmployeeDetailFormComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this._isNew) {
            this.employeeService.updateEmployee(this.employee).subscribe(function (data) { return data; }, function (err) { return console.log(err); }, function () { return _this.afterSubmit(); });
        }
        else {
            this.employeeService.createEmployee(this.employee).subscribe(function (data) { return data; }, function (err) { return console.log(err); }, function () { return _this.afterSubmit(); });
        }
    };
    EmployeeDetailFormComponent.prototype.test = function () {
        alert(this._form.dirty);
    };
    EmployeeDetailFormComponent.prototype.afterSubmit = function () {
        this.submitted = true;
        this._router.navigate([("/" + routes_config_1.TailorRoutes.employees.path)]);
    };
    Object.defineProperty(EmployeeDetailFormComponent.prototype, "diagnostic", {
        // Reveal in html:
        //   AlterEgo via form.controls = {{showFormControls(hf)}}
        //showFormControls(form: NgForm) {
        //    return form.controls["CreationDate"] && form.controls['msn'].value; // Dr. IQ
        //}
        //get diagnostic() { return JSON.stringify(this.employee); }
        get: function () { return JSON.stringify(this.employee); },
        enumerable: true,
        configurable: true
    });
    EmployeeDetailFormComponent = __decorate([
        core_1.Component({
            selector: 'employee-detail-form',
            templateUrl: 'app/employee/employee-detail-form.component.html'
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService, router_1.RouteSegment, router_1.Router, dialog_service_1.DialogService, common_1.FormBuilder])
    ], EmployeeDetailFormComponent);
    return EmployeeDetailFormComponent;
}());
exports.EmployeeDetailFormComponent = EmployeeDetailFormComponent;
//# sourceMappingURL=employee-detail-form.component.js.map