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
                function EmployeeDetailFormComponent(_employeeService, _routeParams, _router, _dialog) {
                    this._employeeService = _employeeService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this._dialog = _dialog;
                    this.submitted = false;
                    this._isNew = false;
                }
                EmployeeDetailFormComponent.prototype.routerCanDeactivate = function (next, prev) {
                    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
                    //if (!this.employee || this.employee.Msn === this._msn) {
                    //    return true;
                    //}
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
                            this._employeeService.getEmployee(id).subscribe(function (res) {
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
                        this._employeeService.updateEmployee(this.employee).subscribe(function (data) { return data; }, function (err) { return console.log(err); }, function () { return _this.afterSubmit(); });
                    }
                    else {
                        this._employeeService.createEmployee(this.employee).subscribe(function (data) { return data; }, function (err) { return console.log(err); }, function () { return _this.afterSubmit(); });
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
                    get: function () { return this.employee.FirstName; },
                    enumerable: true,
                    configurable: true
                });
                EmployeeDetailFormComponent = __decorate([
                    core_1.Component({
                        selector: 'employee-detail-form',
                        template: "\n\uFEFF\n      <div class=\"container\">\n          <div [hidden]=\"submitted\">\n              <h1>Employee Form  </h1>\n              <form (ngSubmit)=\"onSubmit()\" #employeeForm=\"ngForm\" *ngIf=\"Employee\">\n                  {{diagnostic}}\n                  <div class=\"form-group\">\n                      <label for=\"msn\">Msn</label>\n                      <input type=\"text\" class=\"form-control\" required [(ngModel)]='employee.FirstName' ngControl=\"msn\" #msn=\"ngForm\" #spy>\n                      <div [hidden]=\"msn.valid\" class=\"alert alert-danger\">\n                          Name is required\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"creationDate\">Creation Date</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employee.CreationDate\" ngControl=\"creationDate\">\n                  </div>\n\n                  <button type=\"submit\" class=\"btn btn-default\"\n                          [disabled]=\"!employeeForm.form.valid\">\n                      Submit\n                  </button>\n              </form>\n          </div>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [employee_service_1.EmployeeService, router_1.RouteParams, router_1.Router, dialog_service_1.DialogService])
                ], EmployeeDetailFormComponent);
                return EmployeeDetailFormComponent;
            }());
            exports_1("EmployeeDetailFormComponent", EmployeeDetailFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lbXBsb3llZS9lbXBsb3llZS1kZXRhaWwtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQ0E7Z0JBT0kscUNBQW9CLGdCQUFpQyxFQUN6QyxZQUF5QixFQUN6QixPQUFlLEVBQ2YsT0FBc0I7b0JBSGQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtvQkFDekMsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQ2YsWUFBTyxHQUFQLE9BQU8sQ0FBZTtvQkFQMUIsY0FBUyxHQUFZLEtBQUssQ0FBQztvQkFDM0IsV0FBTSxHQUFZLEtBQUssQ0FBQztnQkFRaEMsQ0FBQztnQkFFRCx5REFBbUIsR0FBbkIsVUFBb0IsSUFBMEIsRUFBRSxJQUEwQjtvQkFDdEUsaUZBQWlGO29CQUNqRiwwREFBMEQ7b0JBQzFELGtCQUFrQjtvQkFDbEIsR0FBRztvQkFDSCxnRUFBZ0U7b0JBQ2hFLGdFQUFnRTtvQkFDaEUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQ3BELENBQUM7Z0JBRUQsOENBQVEsR0FBUjtvQkFBQSxpQkFrQkM7b0JBakJHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3RDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOzRCQUNwQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7Z0NBQy9DLEtBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDOzRCQUNwQixDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFoQixDQUFnQixDQUMxQixDQUFDO3dCQUVOLENBQUM7d0JBQ0QsSUFBSSxDQUNKLENBQUM7NEJBQ0csaUNBQWlDOzRCQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt3QkFDdkIsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsOENBQVEsR0FBUjtvQkFBQSxpQkFZQztvQkFYRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNmLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FDekQsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEVBQUosQ0FBSSxFQUNaLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBaEIsQ0FBZ0IsRUFDdkIsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO29CQUNsQyxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FDekQsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEVBQUosQ0FBSSxFQUNaLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBaEIsQ0FBZ0IsRUFDdkIsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO29CQUNsQyxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsaURBQVcsR0FBWDtvQkFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFJLHNCQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUMsQ0FBQztnQkFDekQsQ0FBQztnQkFTRCxzQkFBSSxtREFBVTtvQkFQZCxrQkFBa0I7b0JBQ2xCLDBEQUEwRDtvQkFDMUQsa0NBQWtDO29CQUNsQyxtRkFBbUY7b0JBQ25GLEdBQUc7b0JBRUgsNERBQTREO3lCQUM1RCxjQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOzs7bUJBQUE7Z0JBcEd4RDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxzQkFBc0I7d0JBQ2hDLFFBQVEsRUFBRSxnc0NBMEJUO3FCQUNKLENBQUM7OytDQUFBO2dCQXdFRixrQ0FBQztZQUFELENBdkVBLEFBdUVDLElBQUE7WUF2RUQscUVBdUVDLENBQUEiLCJmaWxlIjoiYXBwL2VtcGxveWVlL2VtcGxveWVlLWRldGFpbC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtOZ0Zvcm19ICAgIGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge1JvdXRlUGFyYW1zLCBSb3V0ZXIsIENhbkRlYWN0aXZhdGUsIENvbXBvbmVudEluc3RydWN0aW9ufSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtSb3V0ZXN9IGZyb20gXCIuLi9yb3V0ZXMuY29uZmlnXCJcbmltcG9ydCB7RW1wbG95ZWVTZXJ2aWNlIH0gZnJvbSAnLi9lbXBsb3llZS5zZXJ2aWNlJztcbmltcG9ydCB7RW1wbG95ZWUgfSBmcm9tIFwiLi9lbXBsb3llZVwiO1xuaW1wb3J0IHtEaWFsb2dTZXJ2aWNlfSBmcm9tIFwiLi4vYmxvY2tzL2RpYWxvZy5zZXJ2aWNlXCJcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdlbXBsb3llZS1kZXRhaWwtZm9ybScsXG4gICAgdGVtcGxhdGU6IGBcbu+7v1xuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgW2hpZGRlbl09XCJzdWJtaXR0ZWRcIj5cbiAgICAgICAgICAgICAgPGgxPkVtcGxveWVlIEZvcm0gIDwvaDE+XG4gICAgICAgICAgICAgIDxmb3JtIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCIgI2VtcGxveWVlRm9ybT1cIm5nRm9ybVwiICpuZ0lmPVwiRW1wbG95ZWVcIj5cbiAgICAgICAgICAgICAgICAgIHt7ZGlhZ25vc3RpY319XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtc25cIj5Nc248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09J2VtcGxveWVlLkZpcnN0TmFtZScgbmdDb250cm9sPVwibXNuXCIgI21zbj1cIm5nRm9ybVwiICNzcHk+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBbaGlkZGVuXT1cIm1zbi52YWxpZFwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIE5hbWUgaXMgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY3JlYXRpb25EYXRlXCI+Q3JlYXRpb24gRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbKG5nTW9kZWwpXT1cImVtcGxveWVlLkNyZWF0aW9uRGF0ZVwiIG5nQ29udHJvbD1cImNyZWF0aW9uRGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFlbXBsb3llZUZvcm0uZm9ybS52YWxpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVEZXRhaWxGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDYW5EZWFjdGl2YXRlICB7XG5cbiAgICBwcml2YXRlIGVtcGxveWVlOiBFbXBsb3llZTsvLyA9ICBFbXBsb3llZS5HZXREZWZhdWx0KCk7Ly8gPSBuZXcgRW1wbG95ZWUoNDAsJzQwJywgbnVsbCkgO1xuICAgIHByaXZhdGUgc3VibWl0dGVkOiBCb29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfaXNOZXc6IEJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIF9tc246c3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZW1wbG95ZWVTZXJ2aWNlOiBFbXBsb3llZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcyxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgX2RpYWxvZzogRGlhbG9nU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgcm91dGVyQ2FuRGVhY3RpdmF0ZShuZXh0OiBDb21wb25lbnRJbnN0cnVjdGlvbiwgcHJldjogQ29tcG9uZW50SW5zdHJ1Y3Rpb24pOiBhbnkge1xuICAgICAgICAvLyBBbGxvdyBzeW5jaHJvbm91cyBuYXZpZ2F0aW9uIChgdHJ1ZWApIGlmIG5vIGNyaXNpcyBvciB0aGUgY3Jpc2lzIGlzIHVuY2hhbmdlZC5cbiAgICAgICAgLy9pZiAoIXRoaXMuZW1wbG95ZWUgfHwgdGhpcy5lbXBsb3llZS5Nc24gPT09IHRoaXMuX21zbikge1xuICAgICAgICAvLyAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgLy99XG4gICAgICAgIC8vIE90aGVyd2lzZSBhc2sgdGhlIHVzZXIgd2l0aCB0aGUgZGlhbG9nIHNlcnZpY2UgYW5kIHJldHVybiBpdHNcbiAgICAgICAgLy8gcHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0cnVlIG9yIGZhbHNlIHdoZW4gdGhlIHVzZXIgZGVjaWRlc1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlhbG9nLmNvbmZpcm0oJ0Rpc2NhcmQgY2hhbmdlcz8nKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVtcGxveWVlKSB7XG4gICAgICAgICAgICBsZXQgaWQgPSArdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpZCcpO1xuICAgICAgICAgICAgaWYgKGlkID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzTmV3ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5fZW1wbG95ZWVTZXJ2aWNlLmdldEVtcGxveWVlKGlkKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIC8vbmV3XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy90aGlzLmVtcGxveWVlID0gbmV3IEVtcGxveWVlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5faXNOZXcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5faXNOZXcpIHtcbiAgICAgICAgICAgIHRoaXMuX2VtcGxveWVlU2VydmljZS51cGRhdGVFbXBsb3llZSh0aGlzLmVtcGxveWVlKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiBkYXRhLFxuICAgICAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpLFxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuYWZ0ZXJTdWJtaXQoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9lbXBsb3llZVNlcnZpY2UuY3JlYXRlRW1wbG95ZWUodGhpcy5lbXBsb3llZSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4gZGF0YSxcbiAgICAgICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coZXJyKSxcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmFmdGVyU3VibWl0KCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWZ0ZXJTdWJtaXQoKSB7XG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgLyR7Um91dGVzLmVtcGxveWVlcy5uYW1lfWBdKTtcbiAgICB9XG5cbiAgICAvLyBSZXZlYWwgaW4gaHRtbDpcbiAgICAvLyAgIEFsdGVyRWdvIHZpYSBmb3JtLmNvbnRyb2xzID0ge3tzaG93Rm9ybUNvbnRyb2xzKGhmKX19XG4gICAgLy9zaG93Rm9ybUNvbnRyb2xzKGZvcm06IE5nRm9ybSkge1xuICAgIC8vICAgIHJldHVybiBmb3JtLmNvbnRyb2xzW1wiQ3JlYXRpb25EYXRlXCJdICYmIGZvcm0uY29udHJvbHNbJ21zbiddLnZhbHVlOyAvLyBEci4gSVFcbiAgICAvL31cblxuICAgIC8vZ2V0IGRpYWdub3N0aWMoKSB7IHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLmVtcGxveWVlKTsgfVxuICAgIGdldCBkaWFnbm9zdGljKCkgeyByZXR1cm4gdGhpcy5lbXBsb3llZS5GaXJzdE5hbWU7IH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
