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
var router_1 = require('angular2/router');
var routes_config_1 = require('../routes.config');
var Home = (function () {
    function Home(_router) {
        this._router = _router;
    }
    Home.prototype.goToAssets = function () {
        this._router.navigate([("/" + routes_config_1.Routes.assets.as), {}]);
    };
    Home = __decorate([
        ng.Component({
            selector: 'home',
            template: "\n   <div class=\"jumbotron\">\n   \t<div class=\"container\">\n   \t\t<h1>Trail Running Life</h1>\n   \t\t\t<p></p>\n   \t\t\t<p>\n   \t\t\t\t<a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more \u00BB</a>\n   \t\t\t</p>\n   \t</div>\n   </div>\n   <div class=\"container\">\n   \t<div class=\"row\">\n   \t\t<div class=\"col-md-12\">\n   \t\t\t<h2>Asset</h2>\n   \t\t\t<p>A list of our great runners</p>\n   \t\t\t<p><button class=\"btn btn-default\" (click)=\"goToAssets()\">more \u00BB</button></p>\n\n   \t\t</div>\n   \t</div>\n   </div>\n\t",
            directives: [ng.CORE_DIRECTIVES, ng.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Home);
    return Home;
})();
exports.Home = Home;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUudHMiXSwibmFtZXMiOlsiSG9tZSIsIkhvbWUuY29uc3RydWN0b3IiLCJIb21lLmdvVG9Bc3NldHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLElBQVksRUFBRSxXQUFNLG1CQUFtQixDQUFDLENBQUE7QUFDeEMsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsOEJBQXFCLGtCQUFrQixDQUFDLENBQUE7QUFFeEM7SUEyQkNBLGNBQW9CQSxPQUFlQTtRQUFmQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtJQUNuQ0EsQ0FBQ0E7SUFFRUQseUJBQVVBLEdBQVZBO1FBQ0lFLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLE9BQUlBLHNCQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxFQUFFQSxDQUFFQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUN4REEsQ0FBQ0E7SUFoQ0xGO1FBQUNBLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBO1lBQ2JBLFFBQVFBLEVBQUVBLE1BQU1BO1lBQ2hCQSxRQUFRQSxFQUFFQSwwakJBb0JUQTtZQUNFQSxVQUFVQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxlQUFlQSxFQUFFQSxFQUFFQSxDQUFDQSxlQUFlQSxDQUFDQTtTQUN2REEsQ0FBQ0E7O2FBVURBO0lBQURBLFdBQUNBO0FBQURBLENBbENBLEFBa0NDQSxJQUFBO0FBVFksWUFBSSxPQVNoQixDQUFBIiwiZmlsZSI6ImFwcC9ob21lL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBuZyBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Um91dGVzfSBmcm9tICcuLi9yb3V0ZXMuY29uZmlnJztcblxuQG5nLkNvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnaG9tZScsXG5cdHRlbXBsYXRlOiBgXG4gICA8ZGl2IGNsYXNzPVwianVtYm90cm9uXCI+XG4gICBcdDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgIFx0XHQ8aDE+VHJhaWwgUnVubmluZyBMaWZlPC9oMT5cbiAgIFx0XHRcdDxwPjwvcD5cbiAgIFx0XHRcdDxwPlxuICAgXHRcdFx0XHQ8YSBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIiBocmVmPVwiI1wiIHJvbGU9XCJidXR0b25cIj5MZWFybiBtb3JlIMK7PC9hPlxuICAgXHRcdFx0PC9wPlxuICAgXHQ8L2Rpdj5cbiAgIDwvZGl2PlxuICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgXHQ8ZGl2IGNsYXNzPVwicm93XCI+XG4gICBcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgXHRcdFx0PGgyPkFzc2V0PC9oMj5cbiAgIFx0XHRcdDxwPkEgbGlzdCBvZiBvdXIgZ3JlYXQgcnVubmVyczwvcD5cbiAgIFx0XHRcdDxwPjxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiAoY2xpY2spPVwiZ29Ub0Fzc2V0cygpXCI+bW9yZSDCuzwvYnV0dG9uPjwvcD5cblxuICAgXHRcdDwvZGl2PlxuICAgXHQ8L2Rpdj5cbiAgIDwvZGl2PlxuXHRgLFxuICAgIGRpcmVjdGl2ZXM6IFtuZy5DT1JFX0RJUkVDVElWRVMsIG5nLkZPUk1fRElSRUNUSVZFU11cbn0pXG5leHBvcnQgY2xhc3MgSG9tZXtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xuXHR9XG5cbiAgICBnb1RvQXNzZXRzKCl7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYC8ke1JvdXRlcy5hc3NldHMuYXN9YCwge31dKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
