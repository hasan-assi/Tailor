System.register(['angular2/core', 'angular2/router', "../routes.config", './employee.service'], function(exports_1, context_1) {
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
    var core_1, router_1, routes_config_1, employee_service_1;
    var EmployeesComponent;
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
            }],
        execute: function() {
            EmployeesComponent = (function () {
                function EmployeesComponent(_employeesService, _router) {
                    this._employeesService = _employeesService;
                    this._router = _router;
                }
                EmployeesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._employeesService.getEmployees()
                        .subscribe(function (res) { return _this.employees = res; });
                };
                EmployeesComponent.prototype.goToDetail = function (employee) {
                    this._router.navigate([("/" + routes_config_1.Routes.employeeDetail.name), { id: employee.Id }]);
                };
                EmployeesComponent.prototype.newAsset = function () {
                    this._router.navigate([("/" + routes_config_1.Routes.employeeNew.name)]);
                };
                Object.defineProperty(EmployeesComponent.prototype, "diagnostic", {
                    //deleteAsset(assetId:number) {
                    //    this._employeesService.deleteAsset(assetId).subscribe();
                    //}
                    get: function () { return JSON.stringify(this.employees); },
                    enumerable: true,
                    configurable: true
                });
                EmployeesComponent = __decorate([
                    core_1.Component({
                        selector: 'employees',
                        template: "\n      \uFEFF<!--<!{{diagnostic}}-->\n      <div class=\"panel panel-default \">\n          <!-- Default panel contents -->\n          <div class=\"panel-heading\">\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"newEmployee()\">New Employee</button>\n          </div>\n          <div class=\"panel-body\">\n              <p>Here is an example of the employees that you will see in CMS.</p>\n          </div>\n\n          <!-- Table -->\n          <table class=\"table\">\n              <thead>\n                  <tr>\n                      <th>#</th>\n                      <th>Card No</th>\n                      <th>First Name</th>\n                      <th>Last Name</th>\n                      <th></th>\n                  </tr>\n              </thead>\n              <tbody *ngFor=\"#employee of employees\">\n                  <tr>\n                      <th scope=\"row\">{{employee.Id}}</th>\n                      <td>{{employee.CardNo}}</td>\n                      <td>{{employee.FirstName}}</td>\n                      <td>{{employee.LastName}}</td>\n                      <td>\n                          <!-- Split button -->\n                          <div class=\"btn-group btn-group-sm\">\n                              <button type=\"button\" class=\"btn btn-primary\"  (click)=\"goToDetail(employee)\">Edit</button>\n                              <button type=\"button\" class=\"btn dropdown-toggle btn-primary\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                  <span class=\"caret\"></span>\n                                  <span class=\"sr-only\">Toggle Dropdown</span>\n                              </button>\n                              <ul class=\"dropdown-menu\">\n                                  <li><a (click)=\"deleteEmployee(employee.Id)\">Delete</a></li>\n                                  <li><a href=\"#\">Another action</a></li>\n                                  <li role=\"separator\" class=\"divider\"></li>\n                                  <li><a href=\"#\">Separated link</a></li>\n                              </ul>\n                          </div>\n                      </td> \n                  </tr>\n              </tbody>\n          </table>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [employee_service_1.EmployeeService, router_1.Router])
                ], EmployeesComponent);
                return EmployeesComponent;
            }());
            exports_1("EmployeesComponent", EmployeesComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lbXBsb3llZS9lbXBsb3llZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMERBO2dCQUdJLDRCQUFvQixpQkFBa0MsRUFDMUMsT0FBZTtvQkFEUCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWlCO29CQUMxQyxZQUFPLEdBQVAsT0FBTyxDQUFRO2dCQUMzQixDQUFDO2dCQUVELHFDQUFRLEdBQVI7b0JBQUEsaUJBR0M7b0JBRkcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRTt5QkFDaEMsU0FBUyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQXBCLENBQW9CLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkFFRCx1Q0FBVSxHQUFWLFVBQVcsUUFBa0I7b0JBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBSSxzQkFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNuRixDQUFDO2dCQUVELHFDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFJLHNCQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUMsQ0FBQztnQkFDM0QsQ0FBQztnQkFNRCxzQkFBSSwwQ0FBVTtvQkFKZCwrQkFBK0I7b0JBQy9CLDhEQUE4RDtvQkFDOUQsR0FBRzt5QkFFSCxjQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7bUJBQUE7Z0JBNUUvRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUsbXdFQWdEVDtxQkFDSixDQUFDOztzQ0FBQTtnQkEyQkYseUJBQUM7WUFBRCxDQTFCQSxBQTBCQyxJQUFBO1lBMUJELG1EQTBCQyxDQUFBIiwiZmlsZSI6ImFwcC9lbXBsb3llZS9lbXBsb3llZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgUGlwZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Um91dGVzfSBmcm9tIFwiLi4vcm91dGVzLmNvbmZpZ1wiO1xuaW1wb3J0IHtFbXBsb3llZVNlcnZpY2V9IGZyb20gJy4vZW1wbG95ZWUuc2VydmljZSc7XG5pbXBvcnQge0VtcGxveWVlIH0gZnJvbSBcIi4vZW1wbG95ZWVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdlbXBsb3llZXMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICDvu788IS0tPCF7e2RpYWdub3N0aWN9fS0tPlxuICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHQgXCI+XG4gICAgICAgICAgPCEtLSBEZWZhdWx0IHBhbmVsIGNvbnRlbnRzIC0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cIm5ld0VtcGxveWVlKClcIj5OZXcgRW1wbG95ZWU8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICA8cD5IZXJlIGlzIGFuIGV4YW1wbGUgb2YgdGhlIGVtcGxveWVlcyB0aGF0IHlvdSB3aWxsIHNlZSBpbiBDTVMuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPCEtLSBUYWJsZSAtLT5cbiAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5DYXJkIE5vPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGg+Rmlyc3QgTmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoPkxhc3QgTmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8dGJvZHkgKm5nRm9yPVwiI2VtcGxveWVlIG9mIGVtcGxveWVlc1wiPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPnt7ZW1wbG95ZWUuSWR9fTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPnt7ZW1wbG95ZWUuQ2FyZE5vfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e2VtcGxveWVlLkZpcnN0TmFtZX19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tlbXBsb3llZS5MYXN0TmFtZX19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gU3BsaXQgYnV0dG9uIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGJ0bi1ncm91cC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAgKGNsaWNrKT1cImdvVG9EZXRhaWwoZW1wbG95ZWUpXCI+RWRpdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gZHJvcGRvd24tdG9nZ2xlIGJ0bi1wcmltYXJ5XCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Ub2dnbGUgRHJvcGRvd248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgKGNsaWNrKT1cImRlbGV0ZUVtcGxveWVlKGVtcGxveWVlLklkKVwiPkRlbGV0ZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFub3RoZXIgYWN0aW9uPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHJvbGU9XCJzZXBhcmF0b3JcIiBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlNlcGFyYXRlZCBsaW5rPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPiBcbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgZW1wbG95ZWVzOiBBcnJheTxFbXBsb3llZT47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbXBsb3llZXNTZXJ2aWNlOiBFbXBsb3llZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2VtcGxveWVlc1NlcnZpY2UuZ2V0RW1wbG95ZWVzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMuZW1wbG95ZWVzID0gcmVzKTtcbiAgICB9XG5cbiAgICBnb1RvRGV0YWlsKGVtcGxveWVlOiBFbXBsb3llZSkge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2AvJHtSb3V0ZXMuZW1wbG95ZWVEZXRhaWwubmFtZX1gLCB7IGlkOiBlbXBsb3llZS5JZCB9XSk7XG4gICAgfVxuXG4gICAgbmV3QXNzZXQoKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYC8ke1JvdXRlcy5lbXBsb3llZU5ldy5uYW1lfWBdKTtcbiAgICB9XG5cbiAgICAvL2RlbGV0ZUFzc2V0KGFzc2V0SWQ6bnVtYmVyKSB7XG4gICAgLy8gICAgdGhpcy5fZW1wbG95ZWVzU2VydmljZS5kZWxldGVBc3NldChhc3NldElkKS5zdWJzY3JpYmUoKTtcbiAgICAvL31cblxuICAgIGdldCBkaWFnbm9zdGljKCkgeyByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5lbXBsb3llZXMpOyB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
