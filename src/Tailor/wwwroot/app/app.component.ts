import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {TailorRoutes, APP_ROUTES} from './routes.config';
import {DialogService} from "./blocks/dialog.service"
import 'rxjs/add/operator/map';

@Component({
    selector: 'app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [DialogService]
})
@Routes(APP_ROUTES)
export class AppComponent {
    public routes = TailorRoutes;
}

