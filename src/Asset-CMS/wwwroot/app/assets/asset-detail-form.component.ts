﻿import {Component, OnInit} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {RouteParams, Router} from 'angular2/router';
import {Routes} from "../routes.config"
import {AssetService} from './asset.service';
import {Asset} from './asset';

@Component({
    selector: 'asset-detail-form',
    templateUrl: 'app/assets/asset-detail-form.component.html'
})
export class AssetDetailFormComponent implements OnInit {

    public asset: Asset;// =  Asset.GetDefault();// = new Asset(40,'40', null) ;
    submitted: Boolean = false;

    constructor(private _assetService: AssetService,
        private _routeParams: RouteParams,
        private _router: Router) {

    }

    ngOnInit() {
        if (!this.asset) {
            let id = +this._routeParams.get('id');
            this._assetService.getAsset(id).subscribe(res => this.asset = res);
        }
        else //new
        {
            this.asset = new Asset();
        }
    }

    onSubmit() {
        this._assetService.updateAsset(this.asset).subscribe(
        data => data ,
        err => console.log(err),
        () => this.afterSubmit());
    }

    afterSubmit() {
        this.submitted = true;
        this._router.navigate([`/${Routes.assets.name}`]);
    }

    // Reveal in html:
    //   AlterEgo via form.controls = {{showFormControls(hf)}}
    //showFormControls(form: NgForm) {
    //    return form.controls["CreationDate"] && form.controls['msn'].value; // Dr. IQ
    //}

    //get diagnostic() { return JSON.stringify(this.asset); }
    get diagnostic() { return this.asset.CreationDate; }
}