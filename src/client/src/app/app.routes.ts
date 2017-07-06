import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { DataResolver } from './app.resolver';
import {
  EmployeesComponent,
  EmployeeDetailFormComponent
} from "./employee";
import { EmployeesTimeSheetsComponent } from "./employee-time-sheet";

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule' },
  { path: 'barrel', loadChildren: './+barrel#BarrelModule' },
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'employeeDetail',
    component: EmployeeDetailFormComponent
  },
  {
    path: 'employeesTimeSheets',
    component: EmployeesTimeSheetsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },

  { path: '**', component: NoContentComponent },
];
