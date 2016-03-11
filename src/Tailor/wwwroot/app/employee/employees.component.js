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
                        template: "\n      \uFEFF{{diagnostic}}\n      <div class=\"panel panel-default \">\n          <!-- Default panel contents -->\n          <div class=\"panel-heading\">\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"newEmployee()\">New Employee</button>\n          </div>\n          <div class=\"panel-body\">\n              <p>Here is an example of the employees that you will see in CMS.</p>\n          </div>\n\n          <!-- Table -->\n          <table class=\"table\">\n              <thead>\n                  <tr>\n                      <th>#</th>\n                      <th>MSN</th>\n                      <th>Creation date</th>\n                      <th></th>\n                  </tr>\n              </thead>\n              <tbody *ngFor=\"#employee of employees\">\n                  <tr>\n                      <th scope=\"row\">{{employee.Id}}</th>\n                      <td>{{employee.FirstName}}</td>\n                      <td>{{employee.LastName}}</td>\n                  </tr>\n              </tbody>\n          </table>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [employee_service_1.EmployeeService, router_1.Router])
                ], EmployeesComponent);
                return EmployeesComponent;
            }());
            exports_1("EmployeesComponent", EmployeesComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lbXBsb3llZS9lbXBsb3llZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBd0NBO2dCQUdJLDRCQUFvQixpQkFBa0MsRUFDMUMsT0FBZTtvQkFEUCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWlCO29CQUMxQyxZQUFPLEdBQVAsT0FBTyxDQUFRO2dCQUMzQixDQUFDO2dCQUVELHFDQUFRLEdBQVI7b0JBQUEsaUJBR0M7b0JBRkcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRTt5QkFDaEMsU0FBUyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQXBCLENBQW9CLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkFFRCx1Q0FBVSxHQUFWLFVBQVcsUUFBa0I7b0JBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBSSxzQkFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNuRixDQUFDO2dCQUVELHFDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFJLHNCQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUMsQ0FBQztnQkFDM0QsQ0FBQztnQkFNRCxzQkFBSSwwQ0FBVTtvQkFKZCwrQkFBK0I7b0JBQy9CLDhEQUE4RDtvQkFDOUQsR0FBRzt5QkFFSCxjQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7bUJBQUE7Z0JBMUQvRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUsc2pDQThCVDtxQkFDSixDQUFDOztzQ0FBQTtnQkEyQkYseUJBQUM7WUFBRCxDQTFCQSxBQTBCQyxJQUFBO1lBMUJELG1EQTBCQyxDQUFBIiwiZmlsZSI6ImFwcC9lbXBsb3llZS9lbXBsb3llZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgUGlwZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Um91dGVzfSBmcm9tIFwiLi4vcm91dGVzLmNvbmZpZ1wiO1xuaW1wb3J0IHtFbXBsb3llZVNlcnZpY2V9IGZyb20gJy4vZW1wbG95ZWUuc2VydmljZSc7XG5pbXBvcnQge0VtcGxveWVlIH0gZnJvbSBcIi4vZW1wbG95ZWVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdlbXBsb3llZXMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICDvu797e2RpYWdub3N0aWN9fVxuICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHQgXCI+XG4gICAgICAgICAgPCEtLSBEZWZhdWx0IHBhbmVsIGNvbnRlbnRzIC0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cIm5ld0VtcGxveWVlKClcIj5OZXcgRW1wbG95ZWU8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICA8cD5IZXJlIGlzIGFuIGV4YW1wbGUgb2YgdGhlIGVtcGxveWVlcyB0aGF0IHlvdSB3aWxsIHNlZSBpbiBDTVMuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPCEtLSBUYWJsZSAtLT5cbiAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5NU048L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5DcmVhdGlvbiBkYXRlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDx0Ym9keSAqbmdGb3I9XCIjZW1wbG95ZWUgb2YgZW1wbG95ZWVzXCI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+e3tlbXBsb3llZS5JZH19PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tlbXBsb3llZS5GaXJzdE5hbWV9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPnt7ZW1wbG95ZWUuTGFzdE5hbWV9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEVtcGxveWVlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIGVtcGxveWVlczogQXJyYXk8RW1wbG95ZWU+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZW1wbG95ZWVzU2VydmljZTogRW1wbG95ZWVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9lbXBsb3llZXNTZXJ2aWNlLmdldEVtcGxveWVlcygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmVtcGxveWVlcyA9IHJlcyk7XG4gICAgfVxuXG4gICAgZ29Ub0RldGFpbChlbXBsb3llZTogRW1wbG95ZWUpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgLyR7Um91dGVzLmVtcGxveWVlRGV0YWlsLm5hbWV9YCwgeyBpZDogZW1wbG95ZWUuSWQgfV0pO1xuICAgIH1cblxuICAgIG5ld0Fzc2V0KCkge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2AvJHtSb3V0ZXMuZW1wbG95ZWVOZXcubmFtZX1gXSk7XG4gICAgfVxuXG4gICAgLy9kZWxldGVBc3NldChhc3NldElkOm51bWJlcikge1xuICAgIC8vICAgIHRoaXMuX2VtcGxveWVlc1NlcnZpY2UuZGVsZXRlQXNzZXQoYXNzZXRJZCkuc3Vic2NyaWJlKCk7XG4gICAgLy99XG5cbiAgICBnZXQgZGlhZ25vc3RpYygpIHsgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuZW1wbG95ZWVzKTsgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
