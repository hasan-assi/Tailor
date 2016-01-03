import {Component, OnInit, Pipe} from 'angular2/core';
import {Router} from 'angular2/router';
import {Routes} from "../routes.config";
import {AssetService} from './asset.service';
import {Asset} from './asset';

@Component({
    selector: 'assets',
    templateUrl: './app/assets/assets.component.html'
})
export class AssetsComponent implements OnInit {
    public assets: Array<Asset>;

    constructor(private _assetsService: AssetService,
        private _router: Router) {
    }

    ngOnInit() {
        this._assetsService.getAssets()
            .subscribe(res => this.assets = res);
    }

    goToDetail(asset: Asset) {
        this._router.navigate([`/${Routes.assetDetail.name}`, { id: asset.Id }]);
    }

    newAsset() {
        this._router.navigate([`/${Routes.assetNew.name}`]);
    }

    deleteAsset(assetId:number) {
        this._assetsService.deleteAsset(assetId).subscribe();
    }

    get diagnostic() { return JSON.stringify(this.assets); }

}