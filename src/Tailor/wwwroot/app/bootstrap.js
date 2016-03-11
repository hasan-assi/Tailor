///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
System.register(['angular2/platform/browser', 'angular2/router', 'angular2/common', 'angular2/http', './app.component', './employee/employee.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, router_1, common_1, http_1, app_component_1, employee_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS, router_1.ROUTER_DIRECTIVES,
                http_1.HTTP_BINDINGS,
                common_1.FormBuilder,
                employee_service_1.EmployeeService
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ib290c3RyYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUVBQXVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVN2RSxtQkFBUyxDQUFDLDRCQUFZLEVBQUU7Z0JBQ3BCLHlCQUFnQixFQUFFLDBCQUFpQjtnQkFDbkMsb0JBQWE7Z0JBQ2Isb0JBQVc7Z0JBQ1gsa0NBQWU7YUFDZCxDQUFDLENBQUMiLCJmaWxlIjoiYXBwL2Jvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyMi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cblxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtST1VURVJfUFJPVklERVJTLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwLCBIVFRQX0JJTkRJTkdTIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRW1wbG95ZWVTZXJ2aWNlIH0gZnJvbSAnLi9lbXBsb3llZS9lbXBsb3llZS5zZXJ2aWNlJ1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbXG4gICAgUk9VVEVSX1BST1ZJREVSUywgUk9VVEVSX0RJUkVDVElWRVMsXG4gICAgSFRUUF9CSU5ESU5HUyxcbiAgICBGb3JtQnVpbGRlcixcbiAgICBFbXBsb3llZVNlcnZpY2VcbiAgICBdKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
