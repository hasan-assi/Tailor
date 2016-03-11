import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Routes, APP_ROUTES} from './routes.config';
import {DialogService} from "./blocks/dialog.service"
import 'rxjs/add/operator/map';

@Component({
    selector: 'app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [DialogService]
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
    public routes = Routes;
}

