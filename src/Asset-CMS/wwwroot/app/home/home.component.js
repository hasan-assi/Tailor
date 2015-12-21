System.register(['angular2/core', 'angular2/common', 'angular2/router', '../routes.config', "../assets/assets.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, routes_config_1, assets_component_1;
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
            function (assets_component_1_1) {
                assets_component_1 = assets_component_1_1;
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
                        template: "\n   <div class=\"jumbotron\">\n   \t<div class=\"container\">\n   \t\t<h1>Trail Running Life</h1>\n   \t\t\t<p></p>\n   \t\t\t<p>\n   \t\t\t\t<a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more \u00BB</a>\n   \t\t\t</p>\n   \t</div>\n   </div>\n   <div class=\"container\">\n   \t<div class=\"row\">\n   \t    <div class=\"col-md-12\">\n   \t        <h2>Asset</h2>\n   \t        <p>A list of our great runners</p>\n   \t        <p><button class=\"btn btn-default\" (click)=\"goToAssets()\">more \u00BB</button>\n   \t        </p>\n   \t    </div>\n   \t    <assets></assets>\n   \t</div>\n   </div>\n\t",
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES, assets_component_1.AssetsComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], HomeComponent);
                return HomeComponent;
            })();
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkhvbWVDb21wb25lbnQiLCJIb21lQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiSG9tZUNvbXBvbmVudC5nb1RvQXNzZXRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkE0QkNBLHVCQUFvQkEsT0FBZUE7b0JBQWZDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVFBO2dCQUNuQ0EsQ0FBQ0E7Z0JBRUVELGtDQUFVQSxHQUFWQTtvQkFDSUUsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsT0FBSUEsc0JBQU1BLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUVBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUMxREEsQ0FBQ0E7Z0JBakNMRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFFQSxNQUFNQTt3QkFDaEJBLFFBQVFBLEVBQUVBLG1uQkFxQlRBO3dCQUNFQSxVQUFVQSxFQUFFQSxDQUFDQSx3QkFBZUEsRUFBRUEsd0JBQWVBLEVBQUVBLDBCQUFpQkEsRUFBRUEsa0NBQWVBLENBQUVBO3FCQUN0RkEsQ0FBQ0E7O2tDQVVEQTtnQkFBREEsb0JBQUNBO1lBQURBLENBbkNBLEFBbUNDQSxJQUFBO1lBbkNELHlDQW1DQyxDQUFBIiwiZmlsZSI6ImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7Um91dGVyLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Um91dGVzfSBmcm9tICcuLi9yb3V0ZXMuY29uZmlnJztcbmltcG9ydCB7QXNzZXRzQ29tcG9uZW50fSBmcm9tIFwiLi4vYXNzZXRzL2Fzc2V0cy5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnaG9tZScsXG5cdHRlbXBsYXRlOiBgXG4gICA8ZGl2IGNsYXNzPVwianVtYm90cm9uXCI+XG4gICBcdDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgIFx0XHQ8aDE+VHJhaWwgUnVubmluZyBMaWZlPC9oMT5cbiAgIFx0XHRcdDxwPjwvcD5cbiAgIFx0XHRcdDxwPlxuICAgXHRcdFx0XHQ8YSBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIiBocmVmPVwiI1wiIHJvbGU9XCJidXR0b25cIj5MZWFybiBtb3JlIMK7PC9hPlxuICAgXHRcdFx0PC9wPlxuICAgXHQ8L2Rpdj5cbiAgIDwvZGl2PlxuICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgXHQ8ZGl2IGNsYXNzPVwicm93XCI+XG4gICBcdCAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICBcdCAgICAgICAgPGgyPkFzc2V0PC9oMj5cbiAgIFx0ICAgICAgICA8cD5BIGxpc3Qgb2Ygb3VyIGdyZWF0IHJ1bm5lcnM8L3A+XG4gICBcdCAgICAgICAgPHA+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIChjbGljayk9XCJnb1RvQXNzZXRzKClcIj5tb3JlIMK7PC9idXR0b24+XG4gICBcdCAgICAgICAgPC9wPlxuICAgXHQgICAgPC9kaXY+XG4gICBcdCAgICA8YXNzZXRzPjwvYXNzZXRzPlxuICAgXHQ8L2Rpdj5cbiAgIDwvZGl2PlxuXHRgLFxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUywgUk9VVEVSX0RJUkVDVElWRVMsIEFzc2V0c0NvbXBvbmVudCBdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnR7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcblx0fVxuXG4gICAgZ29Ub0Fzc2V0cygpe1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2AvJHtSb3V0ZXMuYXNzZXRzLm5hbWV9YCwge31dKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
