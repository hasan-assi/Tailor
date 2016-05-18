"use strict";
var home_component_1 = require('./home/home.component');
var employees_component_1 = require("./employee/employees.component");
var employee_detail_form_component_1 = require("./employee/employee-detail-form.component");
var employees_time_sheets_component_1 = require("./employee-time-sheet/employees-time-sheets.component");
var router_deprecated_1 = require('@angular/router-deprecated');
exports.TailorRoutes = {
    employees: new router_deprecated_1.Route({
        path: '/employees',
        name: "Employees", component: employees_component_1.EmployeesComponent
    }),
    employeeDetail: new router_deprecated_1.Route({
        path: '/Employee',
        name: "EmployeeDetail", component: employee_detail_form_component_1.EmployeeDetailFormComponent
    }),
    employeeNew: new router_deprecated_1.Route({
        path: '/Employee',
        name: "EmployeeDetail", component: employee_detail_form_component_1.EmployeeDetailFormComponent
    }),
    employeesTimeSheets: new router_deprecated_1.Route({
        path: '/EmployeesTimeSheets',
        name: "EmployeesTimeSheets", component: employees_time_sheets_component_1.EmployeesTimeSheetsComponent
    }),
    home: new router_deprecated_1.Route({
        path: '/home',
        name: "Home", component: home_component_1.HomeComponent, useAsDefault: true
    })
};
exports.APP_ROUTES = Object.keys(exports.TailorRoutes).map(function (r) { return exports.TailorRoutes[r]; });
//# sourceMappingURL=routes.config.js.map