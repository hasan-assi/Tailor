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
                        template: "\n\n\n   <div>\n       <h2>Asset</h2>\n       <p>A list of our great runners</p>\n       <p>\n           <button class=\"btn btn-default\" (click)=\"goToAssets()\">more \u00BB</button>\n       </p>\n   </div>\n\n   <assets></assets>\n\t",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkhvbWVDb21wb25lbnQiLCJIb21lQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiSG9tZUNvbXBvbmVudC5nb1RvQXNzZXRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFtQkNBLHVCQUFvQkEsT0FBZUE7b0JBQWZDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVFBO2dCQUNuQ0EsQ0FBQ0E7Z0JBRUVELGtDQUFVQSxHQUFWQTtvQkFDSUUsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsT0FBSUEsc0JBQU1BLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUVBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUMxREEsQ0FBQ0E7Z0JBeEJMRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFFQSxNQUFNQTt3QkFDaEJBLFFBQVFBLEVBQUVBLDhPQVlUQTt3QkFDRUEsVUFBVUEsRUFBRUEsQ0FBQ0Esd0JBQWVBLEVBQUVBLHdCQUFlQSxFQUFFQSwwQkFBaUJBLEVBQUVBLGtDQUFlQSxDQUFFQTtxQkFDdEZBLENBQUNBOztrQ0FVREE7Z0JBQURBLG9CQUFDQTtZQUFEQSxDQTFCQSxBQTBCQ0EsSUFBQTtZQTFCRCx5Q0EwQkMsQ0FBQSIsImZpbGUiOiJhcHAvaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge1JvdXRlciwgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1JvdXRlc30gZnJvbSAnLi4vcm91dGVzLmNvbmZpZyc7XG5pbXBvcnQge0Fzc2V0c0NvbXBvbmVudH0gZnJvbSBcIi4uL2Fzc2V0cy9hc3NldHMuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2hvbWUnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cbiAgIDxkaXY+XG4gICAgICAgPGgyPkFzc2V0PC9oMj5cbiAgICAgICA8cD5BIGxpc3Qgb2Ygb3VyIGdyZWF0IHJ1bm5lcnM8L3A+XG4gICAgICAgPHA+XG4gICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiAoY2xpY2spPVwiZ29Ub0Fzc2V0cygpXCI+bW9yZSDCuzwvYnV0dG9uPlxuICAgICAgIDwvcD5cbiAgIDwvZGl2PlxuXG4gICA8YXNzZXRzPjwvYXNzZXRzPlxuXHRgLFxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUywgUk9VVEVSX0RJUkVDVElWRVMsIEFzc2V0c0NvbXBvbmVudCBdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnR7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcblx0fVxuXG4gICAgZ29Ub0Fzc2V0cygpe1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2AvJHtSb3V0ZXMuYXNzZXRzLm5hbWV9YCwge31dKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
