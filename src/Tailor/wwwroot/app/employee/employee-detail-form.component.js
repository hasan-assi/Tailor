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
                    this.form = _fb.group({
                        firstName: this.firstName,
                        lastName: [''],
                        cardNo: ['', common_1.Validators.required],
                        hourRate: ['', common_1.Validators.required],
                        hourPerDay: ['', common_1.Validators.required]
                    });
                }
                EmployeeDetailFormComponent.prototype.routerCanDeactivate = function (next, prev) {
                    //Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
                    if (this.submitted || !this.employee || !this.form.dirty) {
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
                    alert(this.form.dirty);
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
                        template: "\n\uFEFF\n      <div class=\"container\">\n          <div [hidden]=\"submitted\">\n              <h1>Employee Form  </h1>\n              <form (ngSubmit)=\"onSubmit()\" #employeeForm=\"ngForm\" *ngIf=\"employee\" [ngFormModel]=\"form\">\n                  {{diagnostic}}\n                  <div class=\"form-group\">\n                      <label for=\"firstName\">First Name</label>\n                      <input type=\"text\" class=\"form-control\" required [(ngModel)]='employee.FirstName' ngControl=\"firstName\" #firstName=\"ngForm\" #spy>\n                      <div [hidden]=\"firstName.valid\" class=\"alert alert-danger\">\n                          Name is required\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"lastName\">Last Name</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]='employee.LastName' ngControl=\"lastName\" #lastName=\"ngForm\">\n                  </div>\n\n                  <div class=\"form-group\">\n                      <label for=\"cardNo\">Card No</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]='employee.CardNo' ngControl=\"cardNo\" #cardNo=\"ngForm\">\n                      <div [hidden]=\"cardNo.valid\" class=\"alert alert-danger\">\n                          Card No is required\n                      </div>\n                  </div>\n\n                  <div class=\"form-group\">\n                      <label for=\"hourRate\">Hour Rate</label>\n                      <input type=\"number\" step=\"any\" class=\"form-control\"  [(ngModel)]='employee.HourRate' ngControl=\"hourRate\" #hourRate=\"ngForm\">\n                      <div [hidden]=\"hourRate.valid\" class=\"alert alert-danger\">\n                          Hour Rate is required\n                      </div>\n                  </div>\n\n                  <div class=\"form-group\">\n                      <label for=\"hourPerDay\">Hour Per Day</label>\n                      <input type=\"number\" step=\"any\" class=\"form-control\" [(ngModel)]='employee.HourPerDay' ngControl=\"hourPerDay\" #hourPerDay=\"ngForm\">\n                      <div [hidden]=\"hourPerDay.valid\" class=\"alert alert-danger\">\n                          Hour Per Day is required\n                      </div>\n                  </div>\n\n                  <button type=\"button\" class=\"btn btn-default\"\n                          (click)=\"test()\">\n                      test\n                  </button>\n\n                  <button type=\"submit\" class=\"btn btn-default\"\n                          [disabled]=\"!employeeForm.form.valid\">\n                      Submit\n                  </button>\n              </form>\n          </div>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [employee_service_1.EmployeeService, router_1.RouteParams, router_1.Router, dialog_service_1.DialogService, common_1.FormBuilder])
                ], EmployeeDetailFormComponent);
                return EmployeeDetailFormComponent;
            }());
            exports_1("EmployeeDetailFormComponent", EmployeeDetailFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lbXBsb3llZS9lbXBsb3llZS1kZXRhaWwtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtRUE7Z0JBVUkscUNBQW9CLGVBQWdDLEVBQ3hDLFlBQXlCLEVBQ3pCLE9BQWUsRUFDZixPQUFzQixFQUN0QixHQUFnQjtvQkFKUixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7b0JBQ3hDLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUNmLFlBQU8sR0FBUCxPQUFPLENBQWU7b0JBQ3RCLFFBQUcsR0FBSCxHQUFHLENBQWE7b0JBWHBCLGNBQVMsR0FBWSxLQUFLLENBQUM7b0JBQzNCLFdBQU0sR0FBWSxLQUFLLENBQUM7b0JBRXhCLFdBQU0sR0FBRyxJQUFJLENBQUM7b0JBRXRCLGNBQVMsR0FBWSxJQUFJLGdCQUFPLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBT3RELElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FDakI7d0JBQ0ksU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO3dCQUN6QixRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUM7d0JBQ2QsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUNqQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ25DLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztxQkFDeEMsQ0FDSixDQUFDO2dCQUVOLENBQUM7Z0JBRUQseURBQW1CLEdBQW5CLFVBQW9CLElBQTBCLEVBQUUsSUFBMEI7b0JBQ3JFLGdGQUFnRjtvQkFDakYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FB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QyxDQUFDO2dCQUN6RCxDQUFDO2dCQVNELHNCQUFJLG1EQUFVO29CQVBkLGtCQUFrQjtvQkFDbEIsMERBQTBEO29CQUMxRCxrQ0FBa0M7b0JBQ2xDLG1GQUFtRjtvQkFDbkYsR0FBRztvQkFFSCw0REFBNEQ7eUJBQzVELGNBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7OzttQkFBQTtnQkFuSi9EO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHNCQUFzQjt3QkFDaEMsUUFBUSxFQUFFLHl3RkF1RFQ7cUJBQ0osQ0FBQzs7K0NBQUE7Z0JBMEZGLGtDQUFDO1lBQUQsQ0F6RkEsQUF5RkMsSUFBQTtZQXpGRCxxRUF5RkMsQ0FBQSIsImZpbGUiOiJhcHAvZW1wbG95ZWUvZW1wbG95ZWUtZGV0YWlsLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge05nRm9ybSwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIENvbnRyb2xHcm91cCwgQ29udHJvbH0gICAgZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7Um91dGVQYXJhbXMsIFJvdXRlciwgQ2FuRGVhY3RpdmF0ZSwgQ29tcG9uZW50SW5zdHJ1Y3Rpb259IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1JvdXRlc30gZnJvbSBcIi4uL3JvdXRlcy5jb25maWdcIlxuaW1wb3J0IHtFbXBsb3llZVNlcnZpY2UgfSBmcm9tICcuL2VtcGxveWVlLnNlcnZpY2UnO1xuaW1wb3J0IHtFbXBsb3llZSB9IGZyb20gXCIuL2VtcGxveWVlXCI7XG5pbXBvcnQge0RpYWxvZ1NlcnZpY2V9IGZyb20gXCIuLi9ibG9ja3MvZGlhbG9nLnNlcnZpY2VcIlxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2VtcGxveWVlLWRldGFpbC1mb3JtJyxcbiAgICB0ZW1wbGF0ZTogYFxu77u/XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBbaGlkZGVuXT1cInN1Ym1pdHRlZFwiPlxuICAgICAgICAgICAgICA8aDE+RW1wbG95ZWUgRm9ybSAgPC9oMT5cbiAgICAgICAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIiAjZW1wbG95ZWVGb3JtPVwibmdGb3JtXCIgKm5nSWY9XCJlbXBsb3llZVwiIFtuZ0Zvcm1Nb2RlbF09XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgICB7e2RpYWdub3N0aWN9fVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmlyc3ROYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT0nZW1wbG95ZWUuRmlyc3ROYW1lJyBuZ0NvbnRyb2w9XCJmaXJzdE5hbWVcIiAjZmlyc3ROYW1lPVwibmdGb3JtXCIgI3NweT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtoaWRkZW5dPVwiZmlyc3ROYW1lLnZhbGlkXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgTmFtZSBpcyByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsYXN0TmFtZVwiPkxhc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbKG5nTW9kZWwpXT0nZW1wbG95ZWUuTGFzdE5hbWUnIG5nQ29udHJvbD1cImxhc3ROYW1lXCIgI2xhc3ROYW1lPVwibmdGb3JtXCI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2FyZE5vXCI+Q2FyZCBObzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbKG5nTW9kZWwpXT0nZW1wbG95ZWUuQ2FyZE5vJyBuZ0NvbnRyb2w9XCJjYXJkTm9cIiAjY2FyZE5vPVwibmdGb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBbaGlkZGVuXT1cImNhcmROby52YWxpZFwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIENhcmQgTm8gaXMgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJob3VyUmF0ZVwiPkhvdXIgUmF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiYW55XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAgWyhuZ01vZGVsKV09J2VtcGxveWVlLkhvdXJSYXRlJyBuZ0NvbnRyb2w9XCJob3VyUmF0ZVwiICNob3VyUmF0ZT1cIm5nRm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW2hpZGRlbl09XCJob3VyUmF0ZS52YWxpZFwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEhvdXIgUmF0ZSBpcyByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImhvdXJQZXJEYXlcIj5Ib3VyIFBlciBEYXk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgWyhuZ01vZGVsKV09J2VtcGxveWVlLkhvdXJQZXJEYXknIG5nQ29udHJvbD1cImhvdXJQZXJEYXlcIiAjaG91clBlckRheT1cIm5nRm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW2hpZGRlbl09XCJob3VyUGVyRGF5LnZhbGlkXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgSG91ciBQZXIgRGF5IGlzIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwidGVzdCgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgdGVzdFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFlbXBsb3llZUZvcm0uZm9ybS52YWxpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVEZXRhaWxGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDYW5EZWFjdGl2YXRlICB7XG5cbiAgICBwcml2YXRlIGVtcGxveWVlOiBFbXBsb3llZTsvLyA9ICBFbXBsb3llZS5HZXREZWZhdWx0KCk7Ly8gPSBuZXcgRW1wbG95ZWUoNDAsJzQwJywgbnVsbCkgO1xuICAgIHByaXZhdGUgc3VibWl0dGVkOiBCb29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfaXNOZXc6IEJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIF9maXJzdE5hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIGFjdGl2ZSA9IHRydWU7XG4gICAgcHJpdmF0ZSBmb3JtOiBDb250cm9sR3JvdXA7XG4gICAgZmlyc3ROYW1lOiBDb250cm9sID0gbmV3IENvbnRyb2woXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVtcGxveWVlU2VydmljZTogRW1wbG95ZWVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIF9kaWFsb2c6IERpYWxvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlcikge1xuICAgICAgICB0aGlzLmZvcm0gPSBfZmIuZ3JvdXAoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiB0aGlzLmZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogWycnXSxcbiAgICAgICAgICAgICAgICBjYXJkTm86IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICAgICAgaG91clJhdGU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICAgICAgaG91clBlckRheTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgcm91dGVyQ2FuRGVhY3RpdmF0ZShuZXh0OiBDb21wb25lbnRJbnN0cnVjdGlvbiwgcHJldjogQ29tcG9uZW50SW5zdHJ1Y3Rpb24pOiBhbnkge1xuICAgICAgICAgLy9BbGxvdyBzeW5jaHJvbm91cyBuYXZpZ2F0aW9uIChgdHJ1ZWApIGlmIG5vIGNyaXNpcyBvciB0aGUgY3Jpc2lzIGlzIHVuY2hhbmdlZC5cbiAgICAgICAgaWYgKHRoaXMuc3VibWl0dGVkIHx8ICF0aGlzLmVtcGxveWVlIHx8ICF0aGlzLmZvcm0uZGlydHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSBhc2sgdGhlIHVzZXIgd2l0aCB0aGUgZGlhbG9nIHNlcnZpY2UgYW5kIHJldHVybiBpdHNcbiAgICAgICAgLy8gcHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0cnVlIG9yIGZhbHNlIHdoZW4gdGhlIHVzZXIgZGVjaWRlc1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlhbG9nLmNvbmZpcm0oJ0Rpc2NhcmQgY2hhbmdlcz8nKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVtcGxveWVlKSB7XG4gICAgICAgICAgICBsZXQgaWQgPSArdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpZCcpO1xuICAgICAgICAgICAgaWYgKGlkID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzTmV3ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZVNlcnZpY2UuZ2V0RW1wbG95ZWUoaWQpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtcGxveWVlID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgLy9uZXdcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtcGxveWVlID0gbmV3IEVtcGxveWVlKDAsJycsJycsJycsMCwwKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pc05ldyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hY3RpdmUgPSB0cnVlLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgICBpZiAoIXRoaXMuX2lzTmV3KSB7XG4gICAgICAgICAgICB0aGlzLmVtcGxveWVlU2VydmljZS51cGRhdGVFbXBsb3llZSh0aGlzLmVtcGxveWVlKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiBkYXRhLFxuICAgICAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmxvZyg8YW55PmVyciksXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5hZnRlclN1Ym1pdCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW1wbG95ZWVTZXJ2aWNlLmNyZWF0ZUVtcGxveWVlKHRoaXMuZW1wbG95ZWUpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IGRhdGEsXG4gICAgICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKGVyciksXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5hZnRlclN1Ym1pdCgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0ZXN0KCkge1xuICAgICAgIGFsZXJ0KHRoaXMuZm9ybS5kaXJ0eSk7XG4gICAgfVxuICAgIGFmdGVyU3VibWl0KCkge1xuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYC8ke1JvdXRlcy5lbXBsb3llZXMubmFtZX1gXSk7XG4gICAgfVxuXG4gICAgLy8gUmV2ZWFsIGluIGh0bWw6XG4gICAgLy8gICBBbHRlckVnbyB2aWEgZm9ybS5jb250cm9scyA9IHt7c2hvd0Zvcm1Db250cm9scyhoZil9fVxuICAgIC8vc2hvd0Zvcm1Db250cm9scyhmb3JtOiBOZ0Zvcm0pIHtcbiAgICAvLyAgICByZXR1cm4gZm9ybS5jb250cm9sc1tcIkNyZWF0aW9uRGF0ZVwiXSAmJiBmb3JtLmNvbnRyb2xzWydtc24nXS52YWx1ZTsgLy8gRHIuIElRXG4gICAgLy99XG5cbiAgICAvL2dldCBkaWFnbm9zdGljKCkgeyByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5lbXBsb3llZSk7IH1cbiAgICBnZXQgZGlhZ25vc3RpYygpIHsgcmV0dXJuIEpTT04uc3RyaW5naWZ5KCB0aGlzLmVtcGxveWVlKTsgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
