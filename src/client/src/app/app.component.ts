/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

import { Routes } from '@angular/router';
import { ROUTES } from './app.routes';
import { DialogService } from './blocks/dialog.service';
import 'rxjs/add/operator/map';


@Component({
    selector: 'app',
    // templateUrl: './app/app.component.html',
     templateUrl: 'app.component.html'
})
export class AppComponent {
    public routes = ROUTES;
}
