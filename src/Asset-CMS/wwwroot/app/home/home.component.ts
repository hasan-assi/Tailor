import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Routes} from '../routes.config';
import {AssetsComponent} from "../assets/assets.component";

@Component({
	selector: 'home',
	templateUrl: './app/home/home.component.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES, AssetsComponent ]
})
export class HomeComponent{

	constructor(private _router: Router) {
	}

    goToAssets(){
        this._router.navigate([`/${Routes.assets.name}`, {}]);
    }

}