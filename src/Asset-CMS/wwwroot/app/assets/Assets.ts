import {Component, CORE_DIRECTIVES, OnInit} from 'angular2/angular2';
import {AssetService} from './assets.service';
import {Asset} from './asset';

@Component({
    selector: 'assets',
    templateUrl: './app/assets/assets.html',
    directives: [CORE_DIRECTIVES],
})
export class Assets {
    public assets: Array<Asset>;

    constructor(private _assetsService: AssetService) {
        _assetsService.getAssets()
            .subscribe(res => this.assets = res);
    }

    get diagnostic() { return JSON.stringify(this.assets); }

}