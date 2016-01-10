import {Component, OnInit} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {RouteParams, Router, CanDeactivate, ComponentInstruction} from 'angular2/router';
import {Routes} from "../routes.config"
import {AssetService} from './asset.service';
import {Asset} from './asset';
import {DialogService} from "../blocks/dialog.service"

@Component({
    selector: 'asset-detail-form',
    templateUrl: 'app/assets/asset-detail-form.component.html'
})
export class AssetDetailFormComponent implements OnInit, CanDeactivate  {

    private asset: Asset;// =  Asset.GetDefault();// = new Asset(40,'40', null) ;
    private submitted: Boolean = false;
    private _isNew: Boolean = false;
    private _msn:string;

    constructor(private _assetService: AssetService,
        private _routeParams: RouteParams,
        private _router: Router,
        private _dialog: DialogService) {

    }

    routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any {
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
        if (!this.asset || this.asset.Msn === this._msn) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return this._dialog.confirm('Discard changes?');
    }

    ngOnInit() {
        if (!this.asset) {
            let id = +this._routeParams.get('id');
            if (id > 0) {
                this._isNew = false;
                this._assetService.getAsset(id).subscribe(res => {
                    this.asset = res;
                        this._msn = this.asset.Msn;
                    },
                    err => console.log(err)
                );

            }
            else //new
            {
                this.asset = new Asset();
                this._isNew = true;
            }
        }
    }

    onSubmit() {
        if (!this._isNew) {
            this._assetService.updateAsset(this.asset).subscribe(
                data => data,
                err => console.log(err),
                () => this.afterSubmit());
        } else {
            this._assetService.createAsset(this.asset).subscribe(
                data => data,
                err => console.log(err),
                () => this.afterSubmit());
        }
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