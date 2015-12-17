import { HomeComponent } from './home/home.component';
import { AssetsComponent } from './assets/assets.component';
import { Route, Router } from 'angular2/router';

export var Routes = {
  home: new Route({   path: '/'      , name: "Home"  , component: HomeComponent}),
  assets: new Route({ path: '/assets', name: "Assets", component: AssetsComponent })
};

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);
