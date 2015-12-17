System.register(['angular2/core', 'angular2/common', 'angular2/router', '../routes.config'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, routes_config_1;
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
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(_router) {
                    this._router = _router;
                }
                HomeComponent.prototype.goToAssets = function () {
                    this._router.navigate([("/" + routes_config_1.Routes.assets.name), {}]);
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        template: "\n   <div class=\"jumbotron\">\n   \t<div class=\"container\">\n   \t\t<h1>Trail Running Life</h1>\n   \t\t\t<p></p>\n   \t\t\t<p>\n   \t\t\t\t<a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more \u00BB</a>\n   \t\t\t</p>\n   \t</div>\n   </div>\n   <div class=\"container\">\n   \t<div class=\"row\">\n   \t\t<div class=\"col-md-12\">\n   \t\t\t<h2>Asset</h2>\n   \t\t\t<p>A list of our great runners</p>\n   \t\t\t<p><button class=\"btn btn-default\" (click)=\"goToAssets()\">more \u00BB</button></p>\n\n   \t\t</div>\n   \t</div>\n   </div>\n\t",
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], HomeComponent);
                return HomeComponent;
            })();
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkhvbWVDb21wb25lbnQiLCJIb21lQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiSG9tZUNvbXBvbmVudC5nb1RvQXNzZXRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkEyQkNBLHVCQUFvQkEsT0FBZUE7b0JBQWZDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVFBO2dCQUNuQ0EsQ0FBQ0E7Z0JBRUVELGtDQUFVQSxHQUFWQTtvQkFDSUUsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsT0FBSUEsc0JBQU1BLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUVBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUMxREEsQ0FBQ0E7Z0JBaENMRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFFQSxNQUFNQTt3QkFDaEJBLFFBQVFBLEVBQUVBLDBqQkFvQlRBO3dCQUNFQSxVQUFVQSxFQUFFQSxDQUFDQSx3QkFBZUEsRUFBRUEsd0JBQWVBLEVBQUVBLDBCQUFpQkEsQ0FBRUE7cUJBQ3JFQSxDQUFDQTs7a0NBVURBO2dCQUFEQSxvQkFBQ0E7WUFBREEsQ0FsQ0EsQUFrQ0NBLElBQUE7WUFsQ0QseUNBa0NDLENBQUEiLCJmaWxlIjoiYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtSb3V0ZXN9IGZyb20gJy4uL3JvdXRlcy5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdob21lJyxcblx0dGVtcGxhdGU6IGBcbiAgIDxkaXYgY2xhc3M9XCJqdW1ib3Ryb25cIj5cbiAgIFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgXHRcdDxoMT5UcmFpbCBSdW5uaW5nIExpZmU8L2gxPlxuICAgXHRcdFx0PHA+PC9wPlxuICAgXHRcdFx0PHA+XG4gICBcdFx0XHRcdDxhIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiIGhyZWY9XCIjXCIgcm9sZT1cImJ1dHRvblwiPkxlYXJuIG1vcmUgwrs8L2E+XG4gICBcdFx0XHQ8L3A+XG4gICBcdDwvZGl2PlxuICAgPC9kaXY+XG4gICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICBcdDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgIFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICBcdFx0XHQ8aDI+QXNzZXQ8L2gyPlxuICAgXHRcdFx0PHA+QSBsaXN0IG9mIG91ciBncmVhdCBydW5uZXJzPC9wPlxuICAgXHRcdFx0PHA+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIChjbGljayk9XCJnb1RvQXNzZXRzKClcIj5tb3JlIMK7PC9idXR0b24+PC9wPlxuXG4gICBcdFx0PC9kaXY+XG4gICBcdDwvZGl2PlxuICAgPC9kaXY+XG5cdGAsXG4gICAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTLCBST1VURVJfRElSRUNUSVZFUyBdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnR7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcblx0fVxuXG4gICAgZ29Ub0Fzc2V0cygpe1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2AvJHtSb3V0ZXMuYXNzZXRzLm5hbWV9YCwge31dKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
