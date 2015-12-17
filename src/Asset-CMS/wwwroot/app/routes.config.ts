import { Home } from './home/Home';
import { Assets } from './assets/assets';
import { Route, Router } from 'angular2/router';

export var Routes = {
  home: new Route({   path: '/'      , name: "Home"  , component: Home}),
  assets: new Route({ path: '/assets', name: "Assets", component: Assets })
};

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);
