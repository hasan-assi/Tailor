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
import { DialogService } from './blocks/dialog.service';

@Component({
    selector: 'app',
    styleUrls:['app.component.css'],
     templateUrl: 'app.component.html'
})
export class AppComponent {

}
