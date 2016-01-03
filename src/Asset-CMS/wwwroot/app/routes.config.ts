import { HomeComponent } from './home/home.component';
import { AssetsComponent } from './assets/assets.component';
import { AssetDetailFormComponent } from "./assets/asset-detail-form.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Route, Router } from 'angular2/router';

export var Routes = {
    assets: new Route({ path: '/assets', name: "Assets", component: AssetsComponent }),
    assetDetail: new Route({ path: '/asset/:id', name: "AssetDetail", component: AssetDetailFormComponent }),
    assetNew: new Route({ path: '/asset', name: "AssetDetail", component: AssetDetailFormComponent }),
    home: new Route({ path: '/home', name: "Home", component: HomeComponent, useAsDefault: true }),
    dashboard: new Route({ path: "/dashboard", name: "Dashboard", component: DashboardComponent })
};

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);
