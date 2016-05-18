import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {TailorRoutes} from '../routes.config';
import {EmployeesComponent} from "../employee/employees.component";

@Component({
	selector: 'home',
	templateUrl: './app/home/home.component.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES, EmployeesComponent ]
})
export class HomeComponent{

	constructor(private _router: Router) {
	}

    goToAssets(){
        this._router.navigate([`/${TailorRoutes.employees.name}`, {}]);
    }

}