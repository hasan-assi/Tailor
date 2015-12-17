import {Component, OnInit} from 'angular2/core';
import {AssetService} from './assets.service';
import {Asset} from './asset';

@Component({
    selector: 'assets',
    templateUrl: './app/assets/assets.html'
})
export class Assets {
    public assets: Array<Asset>;

    constructor(private _assetsService: AssetService) {
        _assetsService.getAssets()
            .subscribe(res => this.assets = res);
    }

    get diagnostic() { return JSON.stringify(this.assets); }

}