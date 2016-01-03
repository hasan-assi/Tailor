import {Http, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Asset} from './asset';


/**
 * people service
 */
@Injectable()
export class AssetService {
    assets: Asset[] = [];
    //   person: Person = null;

    constructor(private _http: Http) { }

    getAssets() {
        //return an observable
        let request = this._http.get('/api/Asset');
        return request
            .map((response) => {
                return response.json();
            }).map((assets: Array<any>) => {
                let result: Array<Asset> = [];

                if (assets) {
                    assets.forEach((p) => {
                        result.push(p)
                    });
                }
                return result;
            });
    }

    getAsset(id: number) {
        return this._http.get('/api/Asset/' + id.toString())
            .map((response) => {
                return response.json();
            }).
            map((asset: Asset) => { return asset; });
    }

    updateAsset(asset: Asset) {
        var postHeaders = new Headers();
        postHeaders.append('Content-Type', 'application/json');

        return this._http.put('/api/Asset/' + asset.Id.toString(), JSON.stringify(asset), { headers: postHeaders });
    }

    createAsset(asset: Asset) {
        var postHeaders = new Headers();
        postHeaders.append('Content-Type', 'application/json');
        return this._http.post('api/Asset/', JSON.stringify(asset, Object.keys(asset.constructor.prototype)), { headers: postHeaders });
    }
    deleteAsset(assetId: number) {

        return this._http.delete('/api/Asset/' + assetId.toString());
    }

    private _fetchFailed(error: any) {
        console.error(error);
        return Promise.reject(error);
    }
}
