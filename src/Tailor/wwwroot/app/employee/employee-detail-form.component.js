System.register(['angular2/core', 'angular2/router', "../routes.config", './employee.service', "../blocks/dialog.service"], function(exports_1, context_1) {
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
    var core_1, router_1, routes_config_1, employee_service_1, dialog_service_1;
    var EmployeeDetailFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
            function (dialog_service_1_1) {
                dialog_service_1 = dialog_service_1_1;
            }],
        execute: function() {
            EmployeeDetailFormComponent = (function () {
                function EmployeeDetailFormComponent(employeeService, _routeParams, _router, _dialog) {
                    this.employeeService = employeeService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this._dialog = _dialog;
                    this.submitted = false;
                    this._isNew = false;
                }
                EmployeeDetailFormComponent.prototype.routerCanDeactivate = function (next, prev) {
                    //Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
                    if (!this.employee || this.employee.FirstName === this._firstName) {
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
                            //this.employee = new Employee();
                            this._isNew = true;
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
                        template: "\n\uFEFF\n      <div class=\"container\">\n          <div [hidden]=\"submitted\">\n              <h1>Employee Form  </h1>\n              <form (ngSubmit)=\"onSubmit()\" #employeeForm=\"ngForm\" *ngIf=\"employee\">\n                  {{diagnostic}}\n                  <div class=\"form-group\">\n                      <label for=\"firstName\">First Name</label>\n                      <input type=\"text\" class=\"form-control\" required [(ngModel)]='employee.FirstName' ngControl=\"firstName\" #firstName=\"ngForm\" #spy>\n                      <div [hidden]=\"firstName.valid\" class=\"alert alert-danger\">\n                          Name is required\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"lastName\">Last Name</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]='employee.LastName' ngControl=\"lastName\" #firstName=\"ngForm\">\n                  </div>\n\n                  <div class=\"form-group\">\n                      <label for=\"cardNo\">Card No</label>\n                      <input type=\"text\" class=\"form-control\" required [(ngModel)]='employee.CardNo' ngControl=\"cardNo\" #cardNo=\"ngForm\">\n                      <div [hidden]=\"cardNo.valid\" class=\"alert alert-danger\">\n                          Card No is required\n                      </div>\n                  </div>\n\n                  <div class=\"form-group\">\n                      <label for=\"hourRate\">Hour Rate</label>\n                      <input type=\"number\" step=\"any\" class=\"form-control\" required [(ngModel)]='employee.HourRate' ngControl=\"hourRate\" #hourRate=\"ngForm\">\n                      <div [hidden]=\"hourRate.valid\" class=\"alert alert-danger\">\n                          Hour Rate is required\n                      </div>\n                  </div>\n\n                  <div class=\"form-group\">\n                      <label for=\"hourPerDay\">Hour Per Rate</label>\n                      <input type=\"number\" step=\"any\" class=\"form-control\" required [(ngModel)]='employee.HourPerDay' ngControl=\"hourPerDay\" #hourPerDay=\"ngForm\">\n                      <div [hidden]=\"hourPerDay.valid\" class=\"alert alert-danger\">\n                          Hour Per Day is required\n                      </div>\n                  </div>\n\n                  <button type=\"submit\" class=\"btn btn-default\"\n                          [disabled]=\"!employeeForm.form.valid\">\n                      Submit\n                  </button>\n              </form>\n          </div>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [employee_service_1.EmployeeService, router_1.RouteParams, router_1.Router, dialog_service_1.DialogService])
                ], EmployeeDetailFormComponent);
                return EmployeeDetailFormComponent;
            }());
            exports_1("EmployeeDetailFormComponent", EmployeeDetailFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lbXBsb3llZS9lbXBsb3llZS1kZXRhaWwtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4REE7Z0JBT0kscUNBQW9CLGVBQWdDLEVBQ3hDLFlBQXlCLEVBQ3pCLE9BQWUsRUFDZixPQUFzQjtvQkFIZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7b0JBQ3hDLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUNmLFlBQU8sR0FBUCxPQUFPLENBQWU7b0JBUDFCLGNBQVMsR0FBWSxLQUFLLENBQUM7b0JBQzNCLFdBQU0sR0FBWSxLQUFLLENBQUM7Z0JBUWhDLENBQUM7Z0JBRUQseURBQW1CLEdBQW5CLFVBQW9CLElBQTBCLEVBQUUsSUFBMEI7b0JBQ3JFLGdGQUFnRjtvQkFDakYsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUNoRSxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNoQixDQUFDO29CQUNELGdFQUFnRTtvQkFDaEUsZ0VBQWdFO29CQUNoRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDcEQsQ0FBQztnQkFFRCw4Q0FBUSxHQUFSO29CQUFBLGlCQWtCQztvQkFqQkcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDakIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDdEMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7NEJBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7Z0NBQzlDLEtBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDOzRCQUNwQixDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFoQixDQUFnQixDQUMxQixDQUFDO3dCQUVOLENBQUM7d0JBQ0QsSUFBSSxDQUNKLENBQUM7NEJBQ0csaUNBQWlDOzRCQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt3QkFDdkIsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsOENBQVEsR0FBUjtvQkFBQSxpQkFZQztvQkFYRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNmLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQ3hELFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxFQUFKLENBQUksRUFDWixVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQWhCLENBQWdCLEVBQ3ZCLGNBQU0sT0FBQSxLQUFJLENBQUMsV0FBVyxFQUFFLEVBQWxCLENBQWtCLENBQUMsQ0FBQztvQkFDbEMsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUN4RCxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksRUFBSixDQUFJLEVBQ1osVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFoQixDQUFnQixFQUN2QixjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsRUFBRSxFQUFsQixDQUFrQixDQUFDLENBQUM7b0JBQ2xDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxpREFBVyxHQUFYO29CQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQUksc0JBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDO2dCQVNELHNCQUFJLG1EQUFVO29CQVBkLGtCQUFrQjtvQkFDbEIsMERBQTBEO29CQUMxRCxrQ0FBa0M7b0JBQ2xDLG1GQUFtRjtvQkFDbkYsR0FBRztvQkFFSCw0REFBNEQ7eUJBQzVELGNBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7OzttQkFBQTtnQkE1SC9EO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHNCQUFzQjt3QkFDaEMsUUFBUSxFQUFFLCtsRkFrRFQ7cUJBQ0osQ0FBQzs7K0NBQUE7Z0JBd0VGLGtDQUFDO1lBQUQsQ0F2RUEsQUF1RUMsSUFBQTtZQXZFRCxxRUF1RUMsQ0FBQSIsImZpbGUiOiJhcHAvZW1wbG95ZWUvZW1wbG95ZWUtZGV0YWlsLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge05nRm9ybX0gICAgZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7Um91dGVQYXJhbXMsIFJvdXRlciwgQ2FuRGVhY3RpdmF0ZSwgQ29tcG9uZW50SW5zdHJ1Y3Rpb259IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1JvdXRlc30gZnJvbSBcIi4uL3JvdXRlcy5jb25maWdcIlxuaW1wb3J0IHtFbXBsb3llZVNlcnZpY2UgfSBmcm9tICcuL2VtcGxveWVlLnNlcnZpY2UnO1xuaW1wb3J0IHtFbXBsb3llZSB9IGZyb20gXCIuL2VtcGxveWVlXCI7XG5pbXBvcnQge0RpYWxvZ1NlcnZpY2V9IGZyb20gXCIuLi9ibG9ja3MvZGlhbG9nLnNlcnZpY2VcIlxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2VtcGxveWVlLWRldGFpbC1mb3JtJyxcbiAgICB0ZW1wbGF0ZTogYFxu77u/XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBbaGlkZGVuXT1cInN1Ym1pdHRlZFwiPlxuICAgICAgICAgICAgICA8aDE+RW1wbG95ZWUgRm9ybSAgPC9oMT5cbiAgICAgICAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIiAjZW1wbG95ZWVGb3JtPVwibmdGb3JtXCIgKm5nSWY9XCJlbXBsb3llZVwiPlxuICAgICAgICAgICAgICAgICAge3tkaWFnbm9zdGljfX1cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZpcnN0TmFtZVwiPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09J2VtcGxveWVlLkZpcnN0TmFtZScgbmdDb250cm9sPVwiZmlyc3ROYW1lXCIgI2ZpcnN0TmFtZT1cIm5nRm9ybVwiICNzcHk+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBbaGlkZGVuXT1cImZpcnN0TmFtZS52YWxpZFwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIE5hbWUgaXMgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibGFzdE5hbWVcIj5MYXN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgWyhuZ01vZGVsKV09J2VtcGxveWVlLkxhc3ROYW1lJyBuZ0NvbnRyb2w9XCJsYXN0TmFtZVwiICNmaXJzdE5hbWU9XCJuZ0Zvcm1cIj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjYXJkTm9cIj5DYXJkIE5vPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHJlcXVpcmVkIFsobmdNb2RlbCldPSdlbXBsb3llZS5DYXJkTm8nIG5nQ29udHJvbD1cImNhcmROb1wiICNjYXJkTm89XCJuZ0Zvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtoaWRkZW5dPVwiY2FyZE5vLnZhbGlkXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FyZCBObyBpcyByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImhvdXJSYXRlXCI+SG91ciBSYXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHN0ZXA9XCJhbnlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHJlcXVpcmVkIFsobmdNb2RlbCldPSdlbXBsb3llZS5Ib3VyUmF0ZScgbmdDb250cm9sPVwiaG91clJhdGVcIiAjaG91clJhdGU9XCJuZ0Zvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtoaWRkZW5dPVwiaG91clJhdGUudmFsaWRcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBIb3VyIFJhdGUgaXMgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJob3VyUGVyRGF5XCI+SG91ciBQZXIgUmF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiYW55XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT0nZW1wbG95ZWUuSG91clBlckRheScgbmdDb250cm9sPVwiaG91clBlckRheVwiICNob3VyUGVyRGF5PVwibmdGb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBbaGlkZGVuXT1cImhvdXJQZXJEYXkudmFsaWRcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBIb3VyIFBlciBEYXkgaXMgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhZW1wbG95ZWVGb3JtLmZvcm0udmFsaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEVtcGxveWVlRGV0YWlsRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ2FuRGVhY3RpdmF0ZSAge1xuXG4gICAgcHJpdmF0ZSBlbXBsb3llZTogRW1wbG95ZWU7Ly8gPSAgRW1wbG95ZWUuR2V0RGVmYXVsdCgpOy8vID0gbmV3IEVtcGxveWVlKDQwLCc0MCcsIG51bGwpIDtcbiAgICBwcml2YXRlIHN1Ym1pdHRlZDogQm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2lzTmV3OiBCb29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfZmlyc3ROYW1lOnN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZW1wbG95ZWVTZXJ2aWNlOiBFbXBsb3llZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcyxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgX2RpYWxvZzogRGlhbG9nU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgcm91dGVyQ2FuRGVhY3RpdmF0ZShuZXh0OiBDb21wb25lbnRJbnN0cnVjdGlvbiwgcHJldjogQ29tcG9uZW50SW5zdHJ1Y3Rpb24pOiBhbnkge1xuICAgICAgICAgLy9BbGxvdyBzeW5jaHJvbm91cyBuYXZpZ2F0aW9uIChgdHJ1ZWApIGlmIG5vIGNyaXNpcyBvciB0aGUgY3Jpc2lzIGlzIHVuY2hhbmdlZC5cbiAgICAgICAgaWYgKCF0aGlzLmVtcGxveWVlIHx8IHRoaXMuZW1wbG95ZWUuRmlyc3ROYW1lID09PSB0aGlzLl9maXJzdE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSBhc2sgdGhlIHVzZXIgd2l0aCB0aGUgZGlhbG9nIHNlcnZpY2UgYW5kIHJldHVybiBpdHNcbiAgICAgICAgLy8gcHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0cnVlIG9yIGZhbHNlIHdoZW4gdGhlIHVzZXIgZGVjaWRlc1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlhbG9nLmNvbmZpcm0oJ0Rpc2NhcmQgY2hhbmdlcz8nKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVtcGxveWVlKSB7XG4gICAgICAgICAgICBsZXQgaWQgPSArdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpZCcpO1xuICAgICAgICAgICAgaWYgKGlkID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzTmV3ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZVNlcnZpY2UuZ2V0RW1wbG95ZWUoaWQpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtcGxveWVlID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgLy9uZXdcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvL3RoaXMuZW1wbG95ZWUgPSBuZXcgRW1wbG95ZWUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pc05ldyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc05ldykge1xuICAgICAgICAgICAgdGhpcy5lbXBsb3llZVNlcnZpY2UudXBkYXRlRW1wbG95ZWUodGhpcy5lbXBsb3llZSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4gZGF0YSxcbiAgICAgICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coZXJyKSxcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmFmdGVyU3VibWl0KCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbXBsb3llZVNlcnZpY2UuY3JlYXRlRW1wbG95ZWUodGhpcy5lbXBsb3llZSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4gZGF0YSxcbiAgICAgICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coZXJyKSxcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmFmdGVyU3VibWl0KCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWZ0ZXJTdWJtaXQoKSB7XG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgLyR7Um91dGVzLmVtcGxveWVlcy5uYW1lfWBdKTtcbiAgICB9XG5cbiAgICAvLyBSZXZlYWwgaW4gaHRtbDpcbiAgICAvLyAgIEFsdGVyRWdvIHZpYSBmb3JtLmNvbnRyb2xzID0ge3tzaG93Rm9ybUNvbnRyb2xzKGhmKX19XG4gICAgLy9zaG93Rm9ybUNvbnRyb2xzKGZvcm06IE5nRm9ybSkge1xuICAgIC8vICAgIHJldHVybiBmb3JtLmNvbnRyb2xzW1wiQ3JlYXRpb25EYXRlXCJdICYmIGZvcm0uY29udHJvbHNbJ21zbiddLnZhbHVlOyAvLyBEci4gSVFcbiAgICAvL31cblxuICAgIC8vZ2V0IGRpYWdub3N0aWMoKSB7IHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLmVtcGxveWVlKTsgfVxuICAgIGdldCBkaWFnbm9zdGljKCkgeyByZXR1cm4gSlNPTi5zdHJpbmdpZnkoIHRoaXMuZW1wbG95ZWUpOyB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
