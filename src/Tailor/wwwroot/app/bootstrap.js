"use strict";
/// <reference path="../../typings/browser.d.ts" />
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var employee_service_1 = require('./employee/employee.service');
var employee_time_sheet_service_1 = require("./employee-time-sheet/employee-time-sheet.service");
require('rxjs/Rx');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_BINDINGS,
    common_1.FormBuilder,
    employee_service_1.EmployeeService,
    employee_time_sheet_service_1.EmployeeTimeSheetService
]);
//# sourceMappingURL=bootstrap.js.map