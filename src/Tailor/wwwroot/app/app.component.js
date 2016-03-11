System.register(['angular2/core', 'angular2/router', './routes.config', "./blocks/dialog.service", 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, router_1, routes_config_1, dialog_service_1;
    var AppComponent;
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
            function (dialog_service_1_1) {
                dialog_service_1 = dialog_service_1_1;
            },
            function (_1) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.routes = routes_config_1.Routes;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n      <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n          <div class=\"container-fluid\">\n              <div class=\"navbar-header\">\n                  <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n                      <span class=\"sr-only\">Toggle navigation</span>\n                      <span class=\"icon-bar\"></span>\n                      <span class=\"icon-bar\"></span>\n                      <span class=\"icon-bar\"></span>\n                  </button>\n                  <a class=\"navbar-brand\" href=\"#\">Employees</a>\n              </div>\n              <div id=\"navbar\" class=\"navbar-collapse collapse\">\n                  <ul class=\"nav navbar-nav\">\n                      <li><a [routerLink]=\"[routes.home.name]\">Home</a></li>\n                      <li><a [routerLink]=\"[routes.employees.name]\">Employees</a></li>\n                  </ul>\n                  <form class=\"navbar-form navbar-right\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                  </form>gulo\n              </div>\n          </div>\n      </nav>\n\n      <div class=\"container-fluid\">\n          <div class=\"row\">\n              <div class=\" col-lg-2 col-md-2\">\n                  <ul class=\"nav nav-sidebar\">\n                      <li class=\"active\"><a [routerLink]=\"[routes.home.name]\">Home<span class=\"sr-only\">(current)</span></a></li>\n                      <li><a [routerLink]=\"[routes.employees.name]\">Employees</a></li>\n                  </ul>\n              </div>\n              <div class=\"col-lg-10 col-md10 \">\n                  <router-outlet></router-outlet>\n              </div>\n          </div>\n      </div>\n    ",
                        styles: ["\n\n    "],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [dialog_service_1.DialogService]
                    }),
                    router_1.RouteConfig(routes_config_1.APP_ROUTES), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFEQTtnQkFBQTtvQkFDVyxXQUFNLEdBQUcsc0JBQU0sQ0FBQztnQkFDM0IsQ0FBQztnQkFqREQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsS0FBSzt3QkFDZixRQUFRLEVBQUUsMnpEQXFDVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxVQUVSLENBQUM7d0JBQ0YsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7d0JBQy9CLFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7cUJBQzdCLENBQUM7b0JBQ0Qsb0JBQVcsQ0FBQywwQkFBVSxDQUFDOztnQ0FBQTtnQkFHeEIsbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Um91dGVzLCBBUFBfUk9VVEVTfSBmcm9tICcuL3JvdXRlcy5jb25maWcnO1xuaW1wb3J0IHtEaWFsb2dTZXJ2aWNlfSBmcm9tIFwiLi9ibG9ja3MvZGlhbG9nLnNlcnZpY2VcIlxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWludmVyc2UgbmF2YmFyLWZpeGVkLXRvcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibmF2YmFyLXRvZ2dsZSBjb2xsYXBzZWRcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cIm5hdmJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+RW1wbG95ZWVzPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm5hdmJhclwiIGNsYXNzPVwibmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbcm91dGVzLmhvbWUubmFtZV1cIj5Ib21lPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIltyb3V0ZXMuZW1wbG95ZWVzLm5hbWVdXCI+RW1wbG95ZWVzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJuYXZiYXItZm9ybSBuYXZiYXItcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCI+XG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+Z3Vsb1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiIGNvbC1sZy0yIGNvbC1tZC0yXCI+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXNpZGViYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJhY3RpdmVcIj48YSBbcm91dGVyTGlua109XCJbcm91dGVzLmhvbWUubmFtZV1cIj5Ib21lPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+KGN1cnJlbnQpPC9zcGFuPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbcm91dGVzLmVtcGxveWVlcy5uYW1lXVwiPkVtcGxveWVlczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTAgY29sLW1kMTAgXCI+XG4gICAgICAgICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgXG5cbiAgICBgXSxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHByb3ZpZGVyczogW0RpYWxvZ1NlcnZpY2VdXG59KVxuQFJvdXRlQ29uZmlnKEFQUF9ST1VURVMpXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgcm91dGVzID0gUm91dGVzO1xufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
