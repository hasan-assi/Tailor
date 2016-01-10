System.register(['angular2/core', 'angular2/router', './routes.config', "./blocks/dialog.service", 'rxjs/add/operator/map'], function(exports_1) {
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
                        template: "\n      <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n          <div class=\"container-fluid\">\n              <div class=\"navbar-header\">\n                  <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n                      <span class=\"sr-only\">Toggle navigation</span>\n                      <span class=\"icon-bar\"></span>\n                      <span class=\"icon-bar\"></span>\n                      <span class=\"icon-bar\"></span>\n                  </button>\n                  <a class=\"navbar-brand\" href=\"#\">Assets</a>\n              </div>\n              <div id=\"navbar\" class=\"navbar-collapse collapse\">\n                  <ul class=\"nav navbar-nav\">\n                      <li><a [routerLink]=\"[routes.home.name]\">Home</a></li>\n                      <li><a [routerLink]=\"[routes.assets.name]\">Assets</a></li>\n                      <li><a [routerLink]=\"[routes.dashboard.name]\">Dashboard</a></li>\n                  </ul>\n                  <form class=\"navbar-form navbar-right\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                  </form>\n              </div>\n          </div>\n      </nav>\n\n      <div class=\"container-fluid\">\n          <div class=\"row\">\n              <div class=\" col-lg-2 col-md-2\">\n                  <ul class=\"nav nav-sidebar\">\n                      <li class=\"active\"><a [routerLink]=\"[routes.home.name]\">Home<span class=\"sr-only\">(current)</span></a></li>\n                      <li><a [routerLink]=\"[routes.assets.name]\">Assets</a></li>\n                      <li><a [routerLink]=\"[routes.dashboard.name]\">Dashboard</a></li>\n                  </ul>\n              </div>\n              <div class=\"col-lg-10 col-md10 \">\n                  <router-outlet></router-outlet>\n              </div>\n          </div>\n      </div>\n    ",
                        styles: ["\n\n    "],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [dialog_service_1.DialogService]
                    }),
                    router_1.RouteConfig(routes_config_1.APP_ROUTES), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsIkFwcENvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFBQTtvQkFrRFdDLFdBQU1BLEdBQUdBLHNCQUFNQSxDQUFDQTtnQkFDM0JBLENBQUNBO2dCQW5EREQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsS0FBS0E7d0JBQ2ZBLFFBQVFBLEVBQUVBLDQ5REF1Q1RBO3dCQUNEQSxNQUFNQSxFQUFFQSxDQUFDQSxVQUVSQSxDQUFDQTt3QkFDRkEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxDQUFDQTt3QkFDL0JBLFNBQVNBLEVBQUVBLENBQUNBLDhCQUFhQSxDQUFDQTtxQkFDN0JBLENBQUNBO29CQUNEQSxvQkFBV0EsQ0FBQ0EsMEJBQVVBLENBQUNBOztpQ0FHdkJBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FuREEsQUFtRENBLElBQUE7WUFuREQsdUNBbURDLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Um91dGVzLCBBUFBfUk9VVEVTfSBmcm9tICcuL3JvdXRlcy5jb25maWcnO1xuaW1wb3J0IHtEaWFsb2dTZXJ2aWNlfSBmcm9tIFwiLi9ibG9ja3MvZGlhbG9nLnNlcnZpY2VcIlxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWludmVyc2UgbmF2YmFyLWZpeGVkLXRvcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibmF2YmFyLXRvZ2dsZSBjb2xsYXBzZWRcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cIm5hdmJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+QXNzZXRzPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm5hdmJhclwiIGNsYXNzPVwibmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbcm91dGVzLmhvbWUubmFtZV1cIj5Ib21lPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIltyb3V0ZXMuYXNzZXRzLm5hbWVdXCI+QXNzZXRzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIltyb3V0ZXMuZGFzaGJvYXJkLm5hbWVdXCI+RGFzaGJvYXJkPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJuYXZiYXItZm9ybSBuYXZiYXItcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCI+XG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIgY29sLWxnLTIgY29sLW1kLTJcIj5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtc2lkZWJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFjdGl2ZVwiPjxhIFtyb3V0ZXJMaW5rXT1cIltyb3V0ZXMuaG9tZS5uYW1lXVwiPkhvbWU8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj4oY3VycmVudCk8L3NwYW4+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIltyb3V0ZXMuYXNzZXRzLm5hbWVdXCI+QXNzZXRzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIltyb3V0ZXMuZGFzaGJvYXJkLm5hbWVdXCI+RGFzaGJvYXJkPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMCBjb2wtbWQxMCBcIj5cbiAgICAgICAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlczogW2BcblxuICAgIGBdLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgcHJvdmlkZXJzOiBbRGlhbG9nU2VydmljZV1cbn0pXG5AUm91dGVDb25maWcoQVBQX1JPVVRFUylcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIHB1YmxpYyByb3V0ZXMgPSBSb3V0ZXM7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
