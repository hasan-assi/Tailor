import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Routes} from '../routes.config';

@Component({
	selector: 'home',
	templateUrl: './app/home/home.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES ]
})
export class Home{

	constructor(private _router: Router) {
	}

    goToAssets(){
        this._router.navigate([`/${Routes.assets.name}`, {}]);
    }

}