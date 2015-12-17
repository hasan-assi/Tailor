import {Http} from 'angular2/http';
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

    private _fetchFailed(error: any) {
        console.error(error);
        return Promise.reject(error);
    }
}