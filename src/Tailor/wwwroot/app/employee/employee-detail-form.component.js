System.register(['angular2/core', 'angular2/common', 'angular2/router', "../routes.config", './employee.service', "./employee", "../blocks/dialog.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, routes_config_1, employee_service_1, employee_1, dialog_service_1;
    var EmployeeDetailFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (routes_config_1_1) {
                routes_config_1 = routes_config_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            },
            function (employee_1_1) {
                employee_1 = employee_1_1;
            },
            function (dialog_service_1_1) {
                dialog_service_1 = dialog_service_1_1;
            }],
        execute: function() {
            EmployeeDetailFormComponent = (function () {
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
                        var id = +this._routeParams.get('id');
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
                    this._router.navigate([("/" + routes_config_1.Routes.employees.name)]);
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
                        template: "\n\uFEFF\n      <div class=\"container\">\n          <div [hidden]=\"submitted\">\n              <h1>Employee Form  </h1>\n              <form (ngSubmit)=\"onSubmit()\" #employeeForm=\"ngForm\" *ngIf=\"employee\" [ngFormModel]=\"_form\">\n                  <div class=\"form-group\">\n                      <label for=\"firstName\">First Name</label>\n                      <input type=\"text\" class=\"form-control\" required [(ngModel)]='employee.FirstName' ngControl=\"firstName\" #firstName=\"ngForm\" #spy>\n                      <div [hidden]=\"firstName.valid\" class=\"alert alert-danger\">\n                          Name is required\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"lastName\">Last Name</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]='employee.LastName' ngControl=\"lastName\" #lastName=\"ngForm\">\n                  </div>\n\n                  <div class=\"form-group\">\n                      <label for=\"cardNo\">Card No</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]='employee.CardNo' ngControl=\"cardNo\" #cardNo=\"ngForm\">\n                      <div [hidden]=\"cardNo.valid\" class=\"alert alert-danger\">\n                          Card No is required\n                      </div>\n                  </div>\n\n                  <div class=\"form-group\">\n                      <label for=\"hourRate\">Hour Rate</label>\n                      <input type=\"number\" step=\"any\" class=\"form-control\"  [(ngModel)]='employee.HourRate' ngControl=\"hourRate\" #hourRate=\"ngForm\">\n                      <div [hidden]=\"hourRate.valid\" class=\"alert alert-danger\">\n                          Hour Rate is required\n                      </div>\n                  </div>\n\n                  <div class=\"form-group\">\n                      <label for=\"hourPerDay\">Hour Per Day</label>\n                      <input type=\"number\" step=\"any\" class=\"form-control\" [(ngModel)]='employee.HourPerDay' ngControl=\"hourPerDay\" #hourPerDay=\"ngForm\">\n                      <div [hidden]=\"hourPerDay.valid\" class=\"alert alert-danger\">\n                          Hour Per Day is required\n                      </div>\n                  </div>\n\n                  <button type=\"submit\" class=\"btn btn-default\"\n                          [disabled]=\"!employeeForm.form.valid\">\n                      Submit\n                  </button>\n              </form>\n          </div>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [employee_service_1.EmployeeService, router_1.RouteParams, router_1.Router, dialog_service_1.DialogService, common_1.FormBuilder])
                ], EmployeeDetailFormComponent);
                return EmployeeDetailFormComponent;
            }());
            exports_1("EmployeeDetailFormComponent", EmployeeDetailFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lbXBsb3llZS9lbXBsb3llZS1kZXRhaWwtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2REE7Z0JBVUkscUNBQW9CLGVBQWdDLEVBQ3hDLFlBQXlCLEVBQ3pCLE9BQWUsRUFDZixPQUFzQixFQUN0QixHQUFnQjtvQkFKUixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7b0JBQ3hDLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUNmLFlBQU8sR0FBUCxPQUFPLENBQWU7b0JBQ3RCLFFBQUcsR0FBSCxHQUFHLENBQWE7b0JBWHBCLGNBQVMsR0FBWSxLQUFLLENBQUM7b0JBQzNCLFdBQU0sR0FBWSxLQUFLLENBQUM7b0JBRXhCLFdBQU0sR0FBRyxJQUFJLENBQUM7b0JBRXRCLGNBQVMsR0FBWSxJQUFJLGdCQUFPLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBT3RELElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FDbEI7d0JBQ0ksU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO3dCQUN6QixRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUM7d0JBQ2QsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUNqQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ25DLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztxQkFDeEMsQ0FDSixDQUFDO2dCQUVOLENBQUM7Z0JBRUQseURBQW1CLEdBQW5CLFVBQW9CLElBQTBCLEVBQUUsSUFBMEI7b0JBQ3JFLGdGQUFnRjtvQkFDakYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FB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QyxDQUFDO2dCQUN6RCxDQUFDO2dCQVNELHNCQUFJLG1EQUFVO29CQVBkLGtCQUFrQjtvQkFDbEIsMERBQTBEO29CQUMxRCxrQ0FBa0M7b0JBQ2xDLG1GQUFtRjtvQkFDbkYsR0FBRztvQkFFSCw0REFBNEQ7eUJBQzVELGNBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7OzttQkFBQTtnQkE3SS9EO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHNCQUFzQjt3QkFDaEMsUUFBUSxFQUFFLHlqRkFpRFQ7cUJBQ0osQ0FBQzs7K0NBQUE7Z0JBMEZGLGtDQUFDO1lBQUQsQ0F6RkEsQUF5RkMsSUFBQTtZQXpGRCxxRUF5RkMsQ0FBQSIsImZpbGUiOiJhcHAvZW1wbG95ZWUvZW1wbG95ZWUtZGV0YWlsLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge05nRm9ybSwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIENvbnRyb2xHcm91cCwgQ29udHJvbH0gICAgZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7Um91dGVQYXJhbXMsIFJvdXRlciwgQ2FuRGVhY3RpdmF0ZSwgQ29tcG9uZW50SW5zdHJ1Y3Rpb259IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1JvdXRlc30gZnJvbSBcIi4uL3JvdXRlcy5jb25maWdcIlxuaW1wb3J0IHtFbXBsb3llZVNlcnZpY2UgfSBmcm9tICcuL2VtcGxveWVlLnNlcnZpY2UnO1xuaW1wb3J0IHtFbXBsb3llZSB9IGZyb20gXCIuL2VtcGxveWVlXCI7XG5pbXBvcnQge0RpYWxvZ1NlcnZpY2V9IGZyb20gXCIuLi9ibG9ja3MvZGlhbG9nLnNlcnZpY2VcIlxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2VtcGxveWVlLWRldGFpbC1mb3JtJyxcbiAgICB0ZW1wbGF0ZTogYFxu77u/XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBbaGlkZGVuXT1cInN1Ym1pdHRlZFwiPlxuICAgICAgICAgICAgICA8aDE+RW1wbG95ZWUgRm9ybSAgPC9oMT5cbiAgICAgICAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIiAjZW1wbG95ZWVGb3JtPVwibmdGb3JtXCIgKm5nSWY9XCJlbXBsb3llZVwiIFtuZ0Zvcm1Nb2RlbF09XCJfZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmlyc3ROYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT0nZW1wbG95ZWUuRmlyc3ROYW1lJyBuZ0NvbnRyb2w9XCJmaXJzdE5hbWVcIiAjZmlyc3ROYW1lPVwibmdGb3JtXCIgI3NweT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtoaWRkZW5dPVwiZmlyc3ROYW1lLnZhbGlkXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgTmFtZSBpcyByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsYXN0TmFtZVwiPkxhc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbKG5nTW9kZWwpXT0nZW1wbG95ZWUuTGFzdE5hbWUnIG5nQ29udHJvbD1cImxhc3ROYW1lXCIgI2xhc3ROYW1lPVwibmdGb3JtXCI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2FyZE5vXCI+Q2FyZCBObzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbKG5nTW9kZWwpXT0nZW1wbG95ZWUuQ2FyZE5vJyBuZ0NvbnRyb2w9XCJjYXJkTm9cIiAjY2FyZE5vPVwibmdGb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBbaGlkZGVuXT1cImNhcmROby52YWxpZFwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIENhcmQgTm8gaXMgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJob3VyUmF0ZVwiPkhvdXIgUmF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiYW55XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAgWyhuZ01vZGVsKV09J2VtcGxveWVlLkhvdXJSYXRlJyBuZ0NvbnRyb2w9XCJob3VyUmF0ZVwiICNob3VyUmF0ZT1cIm5nRm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW2hpZGRlbl09XCJob3VyUmF0ZS52YWxpZFwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEhvdXIgUmF0ZSBpcyByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImhvdXJQZXJEYXlcIj5Ib3VyIFBlciBEYXk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgWyhuZ01vZGVsKV09J2VtcGxveWVlLkhvdXJQZXJEYXknIG5nQ29udHJvbD1cImhvdXJQZXJEYXlcIiAjaG91clBlckRheT1cIm5nRm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW2hpZGRlbl09XCJob3VyUGVyRGF5LnZhbGlkXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgSG91ciBQZXIgRGF5IGlzIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWVtcGxveWVlRm9ybS5mb3JtLnZhbGlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBFbXBsb3llZURldGFpbEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENhbkRlYWN0aXZhdGUgIHtcblxuICAgIHByaXZhdGUgZW1wbG95ZWU6IEVtcGxveWVlOy8vID0gIEVtcGxveWVlLkdldERlZmF1bHQoKTsvLyA9IG5ldyBFbXBsb3llZSg0MCwnNDAnLCBudWxsKSA7XG4gICAgcHJpdmF0ZSBzdWJtaXR0ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIF9pc05ldzogQm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2ZpcnN0TmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgYWN0aXZlID0gdHJ1ZTtcbiAgICBwcml2YXRlIF9mb3JtOiBDb250cm9sR3JvdXA7XG4gICAgZmlyc3ROYW1lOiBDb250cm9sID0gbmV3IENvbnRyb2woXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVtcGxveWVlU2VydmljZTogRW1wbG95ZWVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIF9kaWFsb2c6IERpYWxvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlcikge1xuICAgICAgICB0aGlzLl9mb3JtID0gX2ZiLmdyb3VwKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogdGhpcy5maXJzdE5hbWUsXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6IFsnJ10sXG4gICAgICAgICAgICAgICAgY2FyZE5vOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgICAgIGhvdXJSYXRlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgICAgIGhvdXJQZXJEYXk6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHJvdXRlckNhbkRlYWN0aXZhdGUobmV4dDogQ29tcG9uZW50SW5zdHJ1Y3Rpb24sIHByZXY6IENvbXBvbmVudEluc3RydWN0aW9uKTogYW55IHtcbiAgICAgICAgIC8vQWxsb3cgc3luY2hyb25vdXMgbmF2aWdhdGlvbiAoYHRydWVgKSBpZiBubyBjcmlzaXMgb3IgdGhlIGNyaXNpcyBpcyB1bmNoYW5nZWQuXG4gICAgICAgIGlmICh0aGlzLnN1Ym1pdHRlZCB8fCAhdGhpcy5lbXBsb3llZSB8fCAhdGhpcy5fZm9ybS5kaXJ0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlIGFzayB0aGUgdXNlciB3aXRoIHRoZSBkaWFsb2cgc2VydmljZSBhbmQgcmV0dXJuIGl0c1xuICAgICAgICAvLyBwcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRydWUgb3IgZmFsc2Ugd2hlbiB0aGUgdXNlciBkZWNpZGVzXG4gICAgICAgIHJldHVybiB0aGlzLl9kaWFsb2cuY29uZmlybSgnRGlzY2FyZCBjaGFuZ2VzPycpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAoIXRoaXMuZW1wbG95ZWUpIHtcbiAgICAgICAgICAgIGxldCBpZCA9ICt0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2lkJyk7XG4gICAgICAgICAgICBpZiAoaWQgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faXNOZXcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtcGxveWVlU2VydmljZS5nZXRFbXBsb3llZShpZCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1wbG95ZWUgPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSAvL25ld1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1wbG95ZWUgPSBuZXcgRW1wbG95ZWUoMCwnJywnJywnJywwLDApO1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzTmV3ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmFjdGl2ZSA9IHRydWUsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5faXNOZXcpIHtcbiAgICAgICAgICAgIHRoaXMuZW1wbG95ZWVTZXJ2aWNlLnVwZGF0ZUVtcGxveWVlKHRoaXMuZW1wbG95ZWUpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IGRhdGEsXG4gICAgICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKDxhbnk+ZXJyKSxcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmFmdGVyU3VibWl0KCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbXBsb3llZVNlcnZpY2UuY3JlYXRlRW1wbG95ZWUodGhpcy5lbXBsb3llZSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4gZGF0YSxcbiAgICAgICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coZXJyKSxcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmFmdGVyU3VibWl0KCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRlc3QoKSB7XG4gICAgICAgIGFsZXJ0KHRoaXMuX2Zvcm0uZGlydHkpO1xuICAgIH1cbiAgICBhZnRlclN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2AvJHtSb3V0ZXMuZW1wbG95ZWVzLm5hbWV9YF0pO1xuICAgIH1cblxuICAgIC8vIFJldmVhbCBpbiBodG1sOlxuICAgIC8vICAgQWx0ZXJFZ28gdmlhIGZvcm0uY29udHJvbHMgPSB7e3Nob3dGb3JtQ29udHJvbHMoaGYpfX1cbiAgICAvL3Nob3dGb3JtQ29udHJvbHMoZm9ybTogTmdGb3JtKSB7XG4gICAgLy8gICAgcmV0dXJuIGZvcm0uY29udHJvbHNbXCJDcmVhdGlvbkRhdGVcIl0gJiYgZm9ybS5jb250cm9sc1snbXNuJ10udmFsdWU7IC8vIERyLiBJUVxuICAgIC8vfVxuXG4gICAgLy9nZXQgZGlhZ25vc3RpYygpIHsgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuZW1wbG95ZWUpOyB9XG4gICAgZ2V0IGRpYWdub3N0aWMoKSB7IHJldHVybiBKU09OLnN0cmluZ2lmeSggdGhpcy5lbXBsb3llZSk7IH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
