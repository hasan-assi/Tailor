System.register(['angular2/core', 'angular2/router', "../routes.config", './asset.service'], function(exports_1) {
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
    var AssetsComponent;
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
            AssetsComponent = (function () {
                function AssetsComponent(_assetsService, _router) {
                    this._assetsService = _assetsService;
                    this._router = _router;
                }
                AssetsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._assetsService.getAssets()
                        .subscribe(function (res) { return _this.assets = res; });
                };
                AssetsComponent.prototype.goToDetail = function (asset) {
                    this._router.navigate([("/" + routes_config_1.Routes.assetDetail.name), { id: asset.Id }]);
                };
                AssetsComponent.prototype.newAsset = function () {
                    this._router.navigate([("/" + routes_config_1.Routes.assetDetail.name)]);
                };
                Object.defineProperty(AssetsComponent.prototype, "diagnostic", {
                    get: function () { return JSON.stringify(this.assets); },
                    enumerable: true,
                    configurable: true
                });
                AssetsComponent = __decorate([
                    core_1.Component({
                        selector: 'assets',
                        template: "\n      \uFEFF<!--{{diagnostic}}-->\n      <div class=\"panel panel-default \">\n          <!-- Default panel contents -->\n          <div class=\"panel-heading\">\n              <button type=\"button\" class=\"btn btn-primary\">New Asset</button>\n          </div>\n          <div class=\"panel-body\">\n              <p>Here is an example of the assets that you will see in CMS.</p>\n          </div>\n\n          <!-- Table -->\n          <table class=\"table\">\n              <thead>\n                  <tr>\n                      <th>#</th>\n                      <th>MSN</th>\n                      <th>Creation date</th>\n                      <th></th>\n                  </tr>\n              </thead>\n              <tbody *ngFor=\"#asset of assets\">\n                  <tr>\n                      <th scope=\"row\">{{asset.Id}}</th>\n                      <td>{{asset.Msn}}</td>\n                      <td>{{asset.CreationDate}}</td>\n                      <td>\n                          <!-- Split button -->\n                          <div class=\"btn-group btn-group-sm\">\n                              <button type=\"button\" class=\"btn btn-primary\"  (click)=\"goToDetail(asset)\">Edit</button>\n                              <button type=\"button\" class=\"btn dropdown-toggle btn-primary\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                  <span class=\"caret\"></span>\n                                  <span class=\"sr-only\">Toggle Dropdown</span>\n                              </button>\n                              <ul class=\"dropdown-menu\">\n                                  <li><a href=\"#\">Delete</a></li>\n                                  <li><a href=\"#\">Another action</a></li>\n                                  <li><a href=\"#\">Something else here</a></li>\n                                  <li role=\"separator\" class=\"divider\"></li>\n                                  <li><a href=\"#\">Separated link</a></li>\n                              </ul>\n                          </div>\n                      </td>\n                  </tr>\n              </tbody>\n          </table>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [asset_service_1.AssetService, router_1.Router])
                ], AssetsComponent);
                return AssetsComponent;
            })();
            exports_1("AssetsComponent", AssetsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hc3NldHMvYXNzZXRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJBc3NldHNDb21wb25lbnQiLCJBc3NldHNDb21wb25lbnQuY29uc3RydWN0b3IiLCJBc3NldHNDb21wb25lbnQubmdPbkluaXQiLCJBc3NldHNDb21wb25lbnQuZ29Ub0RldGFpbCIsIkFzc2V0c0NvbXBvbmVudC5uZXdBc3NldCIsIkFzc2V0c0NvbXBvbmVudC5kaWFnbm9zdGljIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFzRElBLHlCQUFvQkEsY0FBNEJBLEVBQ3BDQSxPQUFlQTtvQkFEUEMsbUJBQWNBLEdBQWRBLGNBQWNBLENBQWNBO29CQUNwQ0EsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBUUE7Z0JBQzNCQSxDQUFDQTtnQkFFREQsa0NBQVFBLEdBQVJBO29CQUFBRSxpQkFHQ0E7b0JBRkdBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFNBQVNBLEVBQUVBO3lCQUMxQkEsU0FBU0EsQ0FBQ0EsVUFBQUEsR0FBR0EsSUFBSUEsT0FBQUEsS0FBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsR0FBR0EsRUFBakJBLENBQWlCQSxDQUFDQSxDQUFDQTtnQkFDN0NBLENBQUNBO2dCQUVERixvQ0FBVUEsR0FBVkEsVUFBV0EsS0FBWUE7b0JBQ25CRyxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxPQUFJQSxzQkFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsS0FBS0EsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzdFQSxDQUFDQTtnQkFFREgsa0NBQVFBLEdBQVJBO29CQUNJSSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxPQUFJQSxzQkFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzNEQSxDQUFDQTtnQkFDREosc0JBQUlBLHVDQUFVQTt5QkFBZEEsY0FBbUJLLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBOzs7bUJBQUFMO2dCQXRFNURBO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFFBQVFBO3dCQUNsQkEsUUFBUUEsRUFBRUEsa3FFQStDVEE7cUJBQ0pBLENBQUNBOztvQ0FzQkRBO2dCQUFEQSxzQkFBQ0E7WUFBREEsQ0F4RUEsQUF3RUNBLElBQUE7WUF4RUQsNkNBd0VDLENBQUEiLCJmaWxlIjoiYXBwL2Fzc2V0cy9hc3NldHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgUGlwZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Um91dGVzfSBmcm9tIFwiLi4vcm91dGVzLmNvbmZpZ1wiO1xuaW1wb3J0IHtBc3NldFNlcnZpY2V9IGZyb20gJy4vYXNzZXQuc2VydmljZSc7XG5pbXBvcnQge0Fzc2V0fSBmcm9tICcuL2Fzc2V0JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhc3NldHMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICDvu788IS0te3tkaWFnbm9zdGljfX0tLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0IFwiPlxuICAgICAgICAgIDwhLS0gRGVmYXVsdCBwYW5lbCBjb250ZW50cyAtLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPk5ldyBBc3NldDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgIDxwPkhlcmUgaXMgYW4gZXhhbXBsZSBvZiB0aGUgYXNzZXRzIHRoYXQgeW91IHdpbGwgc2VlIGluIENNUy48L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8IS0tIFRhYmxlIC0tPlxuICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlXCI+XG4gICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoPk1TTjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoPkNyZWF0aW9uIGRhdGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgPHRib2R5ICpuZ0Zvcj1cIiNhc3NldCBvZiBhc3NldHNcIj5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj57e2Fzc2V0LklkfX08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e2Fzc2V0Lk1zbn19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3thc3NldC5DcmVhdGlvbkRhdGV9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFNwbGl0IGJ1dHRvbiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBidG4tZ3JvdXAtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgIChjbGljayk9XCJnb1RvRGV0YWlsKGFzc2V0KVwiPkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGRyb3Bkb3duLXRvZ2dsZSBidG4tcHJpbWFyeVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZXRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+VG9nZ2xlIERyb3Bkb3duPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+RGVsZXRlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Tb21ldGhpbmcgZWxzZSBoZXJlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHJvbGU9XCJzZXBhcmF0b3JcIiBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlNlcGFyYXRlZCBsaW5rPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBBc3NldHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBhc3NldHM6IEFycmF5PEFzc2V0PjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Fzc2V0c1NlcnZpY2U6IEFzc2V0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fYXNzZXRzU2VydmljZS5nZXRBc3NldHMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4gdGhpcy5hc3NldHMgPSByZXMpO1xuICAgIH1cblxuICAgIGdvVG9EZXRhaWwoYXNzZXQ6IEFzc2V0KSB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYC8ke1JvdXRlcy5hc3NldERldGFpbC5uYW1lfWAsIHsgaWQ6IGFzc2V0LklkIH1dKTtcbiAgICB9XG5cbiAgICBuZXdBc3NldCgpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgLyR7Um91dGVzLmFzc2V0RGV0YWlsLm5hbWV9YF0pO1xuICAgIH1cbiAgICBnZXQgZGlhZ25vc3RpYygpIHsgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuYXNzZXRzKTsgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
