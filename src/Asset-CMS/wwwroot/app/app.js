var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ng = require('angular2/angular2');
var router = require('angular2/router');
var routes_config_1 = require('./routes.config');
var App = (function () {
    function App() {
        this.routes = routes_config_1.Routes;
    }
    App = __decorate([
        ng.Component({
            selector: 'app',
            template: "\n      <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n          <div class=\"container\">\n              <div class=\"navbar-header\">\n                  <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#nav\"\n                  aria-expanded=\"false\">\n                      <span class=\"sr-only\">Toggle navigation</span>\n                      <span class=\"icon-bar\"></span>\n                      <span class=\"icon-bar\"></span>\n                      <span class=\"icon-bar\"></span>\n                  </button>\n                  <a class=\"navbar-brand\" [router-link]=\"[routes.home.as]\">Trail Running Life</a>\n              </div>\n              <div class=\"collapse navbar-collapse\" id=\"nav\">\n                  <ul class=\"nav navbar-nav\">\n                      <li><a [router-link]=\"[routes.home.as]\">Home</a></li>\n                      <li><a [router-link]=\"[routes.assets.as]\">Assets</a></li>\n                  </ul>\n              </div>\n          </div>\n      </nav>\n      <div>\n          <router-outlet></router-outlet>\n      </div>\n    ",
            styles: ["\n\n    "],
            directives: [router.ROUTER_DIRECTIVES]
        }),
        router.RouteConfig(routes_config_1.APP_ROUTES), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
exports.App = App;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAudHMiXSwibmFtZXMiOlsiQXBwIiwiQXBwLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFZLEVBQUUsV0FBTSxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3hDLElBQVksTUFBTSxXQUFNLGlCQUFpQixDQUFDLENBQUE7QUFDMUMsOEJBQW1DLGlCQUFpQixDQUFDLENBQUE7QUFHckQ7SUFBQUE7UUFrQ1dDLFdBQU1BLEdBQUdBLHNCQUFNQSxDQUFDQTtJQUMzQkEsQ0FBQ0E7SUFuQ0REO1FBQUNBLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBO1lBQ1ZBLFFBQVFBLEVBQUVBLEtBQUtBO1lBQ2ZBLFFBQVFBLEVBQUVBLG9uQ0F3QlRBO1lBQ0RBLE1BQU1BLEVBQUVBLENBQUNBLFVBRVJBLENBQUNBO1lBQ0ZBLFVBQVVBLEVBQUVBLENBQUNBLE1BQU1BLENBQUNBLGlCQUFpQkEsQ0FBQ0E7U0FDekNBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBLDBCQUFVQSxDQUFDQTs7WUFHOUJBO0lBQURBLFVBQUNBO0FBQURBLENBbkNBLEFBbUNDQSxJQUFBO0FBRlksV0FBRyxNQUVmLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG5nIGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCAqIGFzIHJvdXRlciBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVzLCBBUFBfUk9VVEVTIH0gZnJvbSAnLi9yb3V0ZXMuY29uZmlnJztcblxuXG5AbmcuQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWludmVyc2UgbmF2YmFyLWZpeGVkLXRvcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibmF2YmFyLXRvZ2dsZSBjb2xsYXBzZWRcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2XCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIFtyb3V0ZXItbGlua109XCJbcm91dGVzLmhvbWUuYXNdXCI+VHJhaWwgUnVubmluZyBMaWZlPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2XCI+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyLWxpbmtdPVwiW3JvdXRlcy5ob21lLmFzXVwiPkhvbWU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlci1saW5rXT1cIltyb3V0ZXMuYXNzZXRzLmFzXVwiPkFzc2V0czwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICAgIDxkaXY+XG4gICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgXG5cbiAgICBgXSxcbiAgICBkaXJlY3RpdmVzOiBbcm91dGVyLlJPVVRFUl9ESVJFQ1RJVkVTXVxufSlcbkByb3V0ZXIuUm91dGVDb25maWcoQVBQX1JPVVRFUylcbmV4cG9ydCBjbGFzcyBBcHAge1xuICAgIHB1YmxpYyByb3V0ZXMgPSBSb3V0ZXM7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
