import { HomeComponent } from './home/home.component';
import { EmployeesComponent} from "./employee/employees.component";
import { EmployeeDetailFormComponent } from "./employee/employee-detail-form.component";
import { Route, Router } from 'angular2/router';

export var Routes = {
    employees: new Route({ path: '/employees', name: "Employees", component: EmployeesComponent }),
    employeeDetail: new Route({ path: '/Employee/:id', name: "EmployeeDetail", component: EmployeeDetailFormComponent }),
    employeeNew: new Route({ path: '/Employee', name: "EmployeeDetail", component: EmployeeDetailFormComponent }),
    home: new Route({ path: '/home', name: "Home", component: HomeComponent, useAsDefault: true })
};

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);
