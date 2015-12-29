System.register(['angular2/core', 'angular2/router', '../routes.config', "../assets/asset.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, routes_config_1, asset_service_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (routes_config_1_1) {
                routes_config_1 = routes_config_1_1;
            },
            function (asset_service_1_1) {
                asset_service_1 = asset_service_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(_assetService, _router) {
                    this._assetService = _assetService;
                    this._router = _router;
                    this.assets = [];
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._assetService.getAssets()
                        .subscribe(function (res) { return _this.assets = res; });
                };
                DashboardComponent.prototype.gotoAsset = function (asset) {
                    this._router.navigate([("/" + routes_config_1.Routes.assetDetail.name), { id: asset.Id }]);
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'my-dashboard',
                        template: "\n      \uFEFF<h3>Top Assets</h3>\n      <div class=\"gird grid-pad\">\n          <div *ngFor=\"#asset of assets\" class=\"col-4\" (click)=\"gotoAsset(asset)\">\n              <div class=\"module asset\">\n                  <h4>{{asset.Msn}}</h4>\n              </div>\n          </div>\n      </div>\n    ",
                        styles: ["\n      \uFEFF[class*='col-'] { float: left; }\n\n      *, *:after, *:before {\n      \t-webkit-box-sizing: border-box;\n      \t-moz-box-sizing: border-box;\n      \tbox-sizing: border-box;\n      }\n\n      h3 { text-align: center; margin-bottom: 0; }\n\n      [class*='col-'] { padding-right: 20px; padding-bottom: 20px;}\n      [class*='col-']:last-of-type { padding-right: 0; }\n\n      .grid { margin: 0 10em; }\n      .col-1-4 { width: 25%; }\n      .module {\n      \tpadding: 20px;\n      \ttext-align: center;\n      \tcolor: #eee;\n      \tmax-height: 120px;\n      \tmin-width: 120px;\n      \tbackground-color: #1171a3;\n      }\n\n      .module:hover { background-color: #52b9e9; cursor: pointer; }\n\n      .grid-pad { padding: 20px 0 20px 20px; }\n      .grid-pad > [class*='col-']:last-of-type { padding-right: 20px; }\n\n      @media (max-width: 600px) {\n      \t.module { font-size: 10px; max-height: 75px; }\n      }\n\n      @media (max-width: 1024px) {\n      \t.grid { margin: 0; }\n      \t.module { min-width: 60px; }\n      }\n    "]
                    }), 
                    __metadata('design:paramtypes', [asset_service_1.AssetService, router_1.Router])
                ], DashboardComponent);
                return DashboardComponent;
            })();
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJEYXNoYm9hcmRDb21wb25lbnQiLCJEYXNoYm9hcmRDb21wb25lbnQuY29uc3RydWN0b3IiLCJEYXNoYm9hcmRDb21wb25lbnQubmdPbkluaXQiLCJEYXNoYm9hcmRDb21wb25lbnQuZ290b0Fzc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkF3RElBLDRCQUFvQkEsYUFBMkJBLEVBQVVBLE9BQWNBO29CQUFuREMsa0JBQWFBLEdBQWJBLGFBQWFBLENBQWNBO29CQUFVQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFPQTtvQkFGaEVBLFdBQU1BLEdBQVlBLEVBQUVBLENBQUNBO2dCQUc1QkEsQ0FBQ0E7Z0JBRURELHFDQUFRQSxHQUFSQTtvQkFBQUUsaUJBR0NBO29CQUZHQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxTQUFTQSxFQUFFQTt5QkFDekJBLFNBQVNBLENBQUNBLFVBQUFBLEdBQUdBLElBQUlBLE9BQUFBLEtBQUlBLENBQUNBLE1BQU1BLEdBQUdBLEdBQUdBLEVBQWpCQSxDQUFpQkEsQ0FBQ0EsQ0FBQ0E7Z0JBQzdDQSxDQUFDQTtnQkFFREYsc0NBQVNBLEdBQVRBLFVBQVVBLEtBQVdBO29CQUNqQkcsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsT0FBSUEsc0JBQU1BLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEtBQUtBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUM3RUEsQ0FBQ0E7Z0JBbEVMSDtvQkFDQUEsZ0JBQVNBLENBQUNBO3dCQUNOQSxRQUFRQSxFQUFFQSxjQUFjQTt3QkFDeEJBLFFBQVFBLEVBQUVBLG9UQVNUQTt3QkFDREEsTUFBTUEsRUFBRUEsQ0FBQ0Esb2lDQXNDUkEsQ0FBQ0E7cUJBQ0xBLENBQUNBOzt1Q0FlREE7Z0JBQURBLHlCQUFDQTtZQUFEQSxDQW5FQSxBQW1FQ0EsSUFBQTtZQW5FRCxtREFtRUMsQ0FBQSIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVyLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAgJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0NPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtSb3V0ZXN9IGZyb20gJy4uL3JvdXRlcy5jb25maWcnO1xuaW1wb3J0IHtBc3NldH0gZnJvbSBcIi4uL2Fzc2V0cy9hc3NldFwiO1xuaW1wb3J0IHtBc3NldFNlcnZpY2V9IGZyb20gXCIuLi9hc3NldHMvYXNzZXQuc2VydmljZVwiO1xuXG5AXG5Db21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktZGFzaGJvYXJkJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAg77u/PGgzPlRvcCBBc3NldHM8L2gzPlxuICAgICAgPGRpdiBjbGFzcz1cImdpcmQgZ3JpZC1wYWRcIj5cbiAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cIiNhc3NldCBvZiBhc3NldHNcIiBjbGFzcz1cImNvbC00XCIgKGNsaWNrKT1cImdvdG9Bc3NldChhc3NldClcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZHVsZSBhc3NldFwiPlxuICAgICAgICAgICAgICAgICAgPGg0Pnt7YXNzZXQuTXNufX08L2g0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAg77u/W2NsYXNzKj0nY29sLSddIHsgZmxvYXQ6IGxlZnQ7IH1cblxuICAgICAgKiwgKjphZnRlciwgKjpiZWZvcmUge1xuICAgICAgXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBcdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cblxuICAgICAgaDMgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi1ib3R0b206IDA7IH1cblxuICAgICAgW2NsYXNzKj0nY29sLSddIHsgcGFkZGluZy1yaWdodDogMjBweDsgcGFkZGluZy1ib3R0b206IDIwcHg7fVxuICAgICAgW2NsYXNzKj0nY29sLSddOmxhc3Qtb2YtdHlwZSB7IHBhZGRpbmctcmlnaHQ6IDA7IH1cblxuICAgICAgLmdyaWQgeyBtYXJnaW46IDAgMTBlbTsgfVxuICAgICAgLmNvbC0xLTQgeyB3aWR0aDogMjUlOyB9XG4gICAgICAubW9kdWxlIHtcbiAgICAgIFx0cGFkZGluZzogMjBweDtcbiAgICAgIFx0dGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgXHRjb2xvcjogI2VlZTtcbiAgICAgIFx0bWF4LWhlaWdodDogMTIwcHg7XG4gICAgICBcdG1pbi13aWR0aDogMTIwcHg7XG4gICAgICBcdGJhY2tncm91bmQtY29sb3I6ICMxMTcxYTM7XG4gICAgICB9XG5cbiAgICAgIC5tb2R1bGU6aG92ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJiOWU5OyBjdXJzb3I6IHBvaW50ZXI7IH1cblxuICAgICAgLmdyaWQtcGFkIHsgcGFkZGluZzogMjBweCAwIDIwcHggMjBweDsgfVxuICAgICAgLmdyaWQtcGFkID4gW2NsYXNzKj0nY29sLSddOmxhc3Qtb2YtdHlwZSB7IHBhZGRpbmctcmlnaHQ6IDIwcHg7IH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICBcdC5tb2R1bGUgeyBmb250LXNpemU6IDEwcHg7IG1heC1oZWlnaHQ6IDc1cHg7IH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgXHQuZ3JpZCB7IG1hcmdpbjogMDsgfVxuICAgICAgXHQubW9kdWxlIHsgbWluLXdpZHRoOiA2MHB4OyB9XG4gICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgYXNzZXRzOiBBc3NldFtdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hc3NldFNlcnZpY2U6IEFzc2V0U2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOlJvdXRlcikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9hc3NldFNlcnZpY2UuZ2V0QXNzZXRzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMuYXNzZXRzID0gcmVzKTtcbiAgICB9XG4gICBcbiAgICBnb3RvQXNzZXQoYXNzZXQ6QXNzZXQpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgLyR7Um91dGVzLmFzc2V0RGV0YWlsLm5hbWV9YCwgeyBpZDogYXNzZXQuSWQgfV0pO1xuICAgIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
