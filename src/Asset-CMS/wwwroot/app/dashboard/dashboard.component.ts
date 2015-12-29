import {Component, OnInit} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from  'angular2/router';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Routes} from '../routes.config';
import {Asset} from "../assets/asset";
import {AssetService} from "../assets/asset.service";

@
Component({
    selector: 'my-dashboard',
    templateUrl: './app/dashboard/dashboard.component.html',
    styleUrls: ['./app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    public assets: Asset[] = [];

    constructor(private _assetService: AssetService, private _router:Router) {
    }

    ngOnInit() {
        this._assetService.getAssets()
            .subscribe(res => this.assets = res);
    }
   
    gotoAsset(asset:Asset) {
        this._router.navigate([`/${Routes.assetDetail.name}`, { id: asset.Id }]);
    }
}

