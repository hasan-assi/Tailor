System.register(['angular2/core', 'angular2/common', 'angular2/router', '../routes.config', "../employee/employees.component"], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, routes_config_1, employees_component_1;
    var HomeComponent;
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
            function (employees_component_1_1) {
                employees_component_1 = employees_component_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(_router) {
                    this._router = _router;
                }
                HomeComponent.prototype.goToAssets = function () {
                    this._router.navigate([("/" + routes_config_1.Routes.employees.name), {}]);
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        template: "\n\n\n   <div>\n       <h2>Employee</h2>\n       <p>A list of our great runners</p>\n       <p>\n           <button class=\"btn btn-default\" (click)=\"goToEmployees()\">more \u00BB</button>\n       </p>\n   </div>\n\n   <employees></employees>\n\t",
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES, employees_component_1.EmployeesComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBdUJBO2dCQUVDLHVCQUFvQixPQUFlO29CQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7Z0JBQ25DLENBQUM7Z0JBRUUsa0NBQVUsR0FBVjtvQkFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQUksc0JBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDN0QsQ0FBQztnQkF4Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsTUFBTTt3QkFDaEIsUUFBUSxFQUFFLDBQQVlUO3dCQUNFLFVBQVUsRUFBRSxDQUFDLHdCQUFlLEVBQUUsd0JBQWUsRUFBRSwwQkFBaUIsRUFBRSx3Q0FBa0IsQ0FBRTtxQkFDekYsQ0FBQzs7aUNBQUE7Z0JBVUYsb0JBQUM7WUFBRCxDQVRBLEFBU0MsSUFBQTtZQVRELHlDQVNDLENBQUEiLCJmaWxlIjoiYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtSb3V0ZXN9IGZyb20gJy4uL3JvdXRlcy5jb25maWcnO1xuaW1wb3J0IHtFbXBsb3llZXNDb21wb25lbnR9IGZyb20gXCIuLi9lbXBsb3llZS9lbXBsb3llZXMuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2hvbWUnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cbiAgIDxkaXY+XG4gICAgICAgPGgyPkVtcGxveWVlPC9oMj5cbiAgICAgICA8cD5BIGxpc3Qgb2Ygb3VyIGdyZWF0IHJ1bm5lcnM8L3A+XG4gICAgICAgPHA+XG4gICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiAoY2xpY2spPVwiZ29Ub0VtcGxveWVlcygpXCI+bW9yZSDCuzwvYnV0dG9uPlxuICAgICAgIDwvcD5cbiAgIDwvZGl2PlxuXG4gICA8ZW1wbG95ZWVzPjwvZW1wbG95ZWVzPlxuXHRgLFxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUywgUk9VVEVSX0RJUkVDVElWRVMsIEVtcGxveWVlc0NvbXBvbmVudCBdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnR7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcblx0fVxuXG4gICAgZ29Ub0Fzc2V0cygpe1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2AvJHtSb3V0ZXMuZW1wbG95ZWVzLm5hbWV9YCwge31dKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
