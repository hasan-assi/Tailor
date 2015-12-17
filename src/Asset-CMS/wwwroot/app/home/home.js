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
    var Home;
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
            Home = (function () {
                function Home(_router) {
                    this._router = _router;
                }
                Home.prototype.goToAssets = function () {
                    this._router.navigate([("/" + routes_config_1.Routes.assets.name), {}]);
                };
                Home = __decorate([
                    core_1.Component({
                        selector: 'home',
                        template: "\n   <div class=\"jumbotron\">\n   \t<div class=\"container\">\n   \t\t<h1>Trail Running Life</h1>\n   \t\t\t<p></p>\n   \t\t\t<p>\n   \t\t\t\t<a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more \u00BB</a>\n   \t\t\t</p>\n   \t</div>\n   </div>\n   <div class=\"container\">\n   \t<div class=\"row\">\n   \t\t<div class=\"col-md-12\">\n   \t\t\t<h2>Asset</h2>\n   \t\t\t<p>A list of our great runners</p>\n   \t\t\t<p><button class=\"btn btn-default\" (click)=\"goToAssets()\">more \u00BB</button></p>\n\n   \t\t</div>\n   \t</div>\n   </div>\n\t",
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], Home);
                return Home;
            })();
            exports_1("Home", Home);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUudHMiXSwibmFtZXMiOlsiSG9tZSIsIkhvbWUuY29uc3RydWN0b3IiLCJIb21lLmdvVG9Bc3NldHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQTJCQ0EsY0FBb0JBLE9BQWVBO29CQUFmQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtnQkFDbkNBLENBQUNBO2dCQUVFRCx5QkFBVUEsR0FBVkE7b0JBQ0lFLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLE9BQUlBLHNCQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFFQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDMURBLENBQUNBO2dCQWhDTEY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBRUEsTUFBTUE7d0JBQ2hCQSxRQUFRQSxFQUFFQSwwakJBb0JUQTt3QkFDRUEsVUFBVUEsRUFBRUEsQ0FBQ0Esd0JBQWVBLEVBQUVBLHdCQUFlQSxFQUFFQSwwQkFBaUJBLENBQUVBO3FCQUNyRUEsQ0FBQ0E7O3lCQVVEQTtnQkFBREEsV0FBQ0E7WUFBREEsQ0FsQ0EsQUFrQ0NBLElBQUE7WUFsQ0QsdUJBa0NDLENBQUEiLCJmaWxlIjoiYXBwL2hvbWUvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge1JvdXRlciwgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1JvdXRlc30gZnJvbSAnLi4vcm91dGVzLmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2hvbWUnLFxuXHR0ZW1wbGF0ZTogYFxuICAgPGRpdiBjbGFzcz1cImp1bWJvdHJvblwiPlxuICAgXHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICBcdFx0PGgxPlRyYWlsIFJ1bm5pbmcgTGlmZTwvaDE+XG4gICBcdFx0XHQ8cD48L3A+XG4gICBcdFx0XHQ8cD5cbiAgIFx0XHRcdFx0PGEgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCIgaHJlZj1cIiNcIiByb2xlPVwiYnV0dG9uXCI+TGVhcm4gbW9yZSDCuzwvYT5cbiAgIFx0XHRcdDwvcD5cbiAgIFx0PC9kaXY+XG4gICA8L2Rpdj5cbiAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgIFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuICAgXHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgIFx0XHRcdDxoMj5Bc3NldDwvaDI+XG4gICBcdFx0XHQ8cD5BIGxpc3Qgb2Ygb3VyIGdyZWF0IHJ1bm5lcnM8L3A+XG4gICBcdFx0XHQ8cD48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cImdvVG9Bc3NldHMoKVwiPm1vcmUgwrs8L2J1dHRvbj48L3A+XG5cbiAgIFx0XHQ8L2Rpdj5cbiAgIFx0PC9kaXY+XG4gICA8L2Rpdj5cblx0YCxcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMsIFJPVVRFUl9ESVJFQ1RJVkVTIF1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZXtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xuXHR9XG5cbiAgICBnb1RvQXNzZXRzKCl7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYC8ke1JvdXRlcy5hc3NldHMubmFtZX1gLCB7fV0pO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
