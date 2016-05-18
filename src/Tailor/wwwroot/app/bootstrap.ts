/// <reference path="../../typings/browser.d.ts" />
import { bootstrap } from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from '@angular/router';
import {FormBuilder} from '@angular/common';
import { Http, HTTP_BINDINGS } from '@angular/http';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee/employee.service'
import { EmployeeTimeSheetService } from "./employee-time-sheet/employee-time-sheet.service"
import 'rxjs/Rx';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_BINDINGS,
    FormBuilder,
    EmployeeService,
    EmployeeTimeSheetService
    ]);
