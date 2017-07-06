import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ROUTES} from '../app.routes';
import {EmployeesComponent} from "../employee";

@Component({
	selector: 'home',
	templateUrl: 'home.component.html'
})
export class HomeComponent{

	constructor(private _router: Router) {
	}

    goToAssets(){
        // this._router.navigate([`/${TailorRoutes.employees.name}`, {}]);
    }

}
