"use strict";
/// <reference path="../../typings/browser.d.ts" />
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var Index_1 = require('./employee/Index');
var Index_2 = require("./employee-time-sheet/Index");
require('rxjs/Rx');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_BINDINGS,
    common_1.FormBuilder,
    Index_1.EmployeeService,
    Index_2.EmployeeTimeSheetService
]);
//# sourceMappingURL=bootstrap.js.map