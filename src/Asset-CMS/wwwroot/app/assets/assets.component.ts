import {Component, OnInit} from 'angular2/core';
import {AssetService} from './asset.service';
import {Asset} from './asset';

@Component({
    selector: 'assets',
    templateUrl: './app/assets/assets.component.html'
})
export class AssetsComponent implements OnInit{
    public assets: Array<Asset>;

    constructor(private _assetsService: AssetService) {
    }

    ngOnInit() {
        this._assetsService.getAssets()
            .subscribe(res => this.assets = res);
    }

    get diagnostic() { return JSON.stringify(this.assets); }

}