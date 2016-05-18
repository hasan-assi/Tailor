"use strict";
var home_component_1 = require('./home/home.component');
var Index_1 = require("./employee/Index");
var Index_2 = require("./employee-time-sheet/Index");
var router_deprecated_1 = require('@angular/router-deprecated');
exports.TailorRoutes = {
    employees: new router_deprecated_1.Route({
        path: '/employees',
        name: "Employees", component: Index_1.EmployeesComponent
    }),
    employeeDetail: new router_deprecated_1.Route({
        path: '/Employee',
        name: "EmployeeDetail", component: Index_1.EmployeeDetailFormComponent
    }),
    employeeNew: new router_deprecated_1.Route({
        path: '/Employee',
        name: "EmployeeDetail", component: Index_1.EmployeeDetailFormComponent
    }),
    employeesTimeSheets: new router_deprecated_1.Route({
        path: '/EmployeesTimeSheets',
        name: "EmployeesTimeSheets", component: Index_2.EmployeesTimeSheetsComponent
    }),
    home: new router_deprecated_1.Route({
        path: '/home',
        name: "Home", component: home_component_1.HomeComponent, useAsDefault: true
    })
};
exports.APP_ROUTES = Object.keys(exports.TailorRoutes).map(function (r) { return exports.TailorRoutes[r]; });
//# sourceMappingURL=routes.config.js.map