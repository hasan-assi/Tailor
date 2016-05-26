import { Route, Router } from '@angular/router-deprecated';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent, EmployeeDetailFormComponent} from "./employee/Index";
import { EmployeesTimeSheetsComponent } from "./employee-time-sheet/Index";

export var TailorRoutes = {
    employees: new Route({
        path: '/employees',
        name: "Employees", component: EmployeesComponent
    }),
    employeeDetail: new Route({
        path: '/Employee',
        name: "EmployeeDetail", component: EmployeeDetailFormComponent
    }),
    employeeNew: new Route({
        path: '/Employee',
        name: "EmployeeDetail", component: EmployeeDetailFormComponent
    }),
    employeesTimeSheets: new Route({
        path: '/EmployeesTimeSheets',
        name: "EmployeesTimeSheets", component: EmployeesTimeSheetsComponent
    }),
    home: new Route({
        path: '/home',
        name: "Home", component: HomeComponent, useAsDefault: true
    })
};

export const APP_ROUTES = Object.keys(TailorRoutes).map(r => TailorRoutes[r]);
