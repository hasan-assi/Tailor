import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router';
import {FormBuilder} from 'angular2/common';
import { Http, HTTP_BINDINGS } from 'angular2/http';
import { AppComponent } from './app.component';
import { AssetService } from './assets/assets.service'

bootstrap(AppComponent, [
    ROUTER_PROVIDERS, ROUTER_DIRECTIVES,
    HTTP_BINDINGS,
    FormBuilder,
    AssetService
    ]);
