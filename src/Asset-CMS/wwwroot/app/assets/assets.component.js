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
                    this._router.navigate([("/" + routes_config_1.Routes.assetNew.name)]);
                };
                AssetsComponent.prototype.deleteAsset = function (assetId) {
                    this._assetsService.deleteAsset(assetId).subscribe();
                };
                Object.defineProperty(AssetsComponent.prototype, "diagnostic", {
                    get: function () { return JSON.stringify(this.assets); },
                    enumerable: true,
                    configurable: true
                });
                AssetsComponent = __decorate([
                    core_1.Component({
                        selector: 'assets',
                        template: "\n      \uFEFF<!--{{diagnostic}}-->\n      <div class=\"panel panel-default \">\n          <!-- Default panel contents -->\n          <div class=\"panel-heading\">\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"newAsset()\">New Asset</button>\n          </div>\n          <div class=\"panel-body\">\n              <p>Here is an example of the assets that you will see in CMS.</p>\n          </div>\n\n          <!-- Table -->\n          <table class=\"table\">\n              <thead>\n                  <tr>\n                      <th>#</th>\n                      <th>MSN</th>\n                      <th>Creation date</th>\n                      <th></th>\n                  </tr>\n              </thead>\n              <tbody *ngFor=\"#asset of assets\">\n                  <tr>\n                      <th scope=\"row\">{{asset.Id}}</th>\n                      <td>{{asset.Msn}}</td>\n                      <td>{{asset.CreationDate}}</td>\n                      <td>\n                          <!-- Split button -->\n                          <div class=\"btn-group btn-group-sm\">\n                              <button type=\"button\" class=\"btn btn-primary\"  (click)=\"goToDetail(asset)\">Edit</button>\n                              <button type=\"button\" class=\"btn dropdown-toggle btn-primary\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                  <span class=\"caret\"></span>\n                                  <span class=\"sr-only\">Toggle Dropdown</span>\n                              </button>\n                              <ul class=\"dropdown-menu\">\n                                  <li><a (click)=\"deleteAsset(asset.Id)\">Delete</a></li>\n                                  <li><a href=\"#\">Another action</a></li>\n                                  <li><a href=\"#\">Something else here</a></li>\n                                  <li role=\"separator\" class=\"divider\"></li>\n                                  <li><a href=\"#\">Separated link</a></li>\n                              </ul>\n                          </div>\n                      </td>\n                  </tr>\n              </tbody>\n          </table>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [asset_service_1.AssetService, router_1.Router])
                ], AssetsComponent);
                return AssetsComponent;
            })();
            exports_1("AssetsComponent", AssetsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hc3NldHMvYXNzZXRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJBc3NldHNDb21wb25lbnQiLCJBc3NldHNDb21wb25lbnQuY29uc3RydWN0b3IiLCJBc3NldHNDb21wb25lbnQubmdPbkluaXQiLCJBc3NldHNDb21wb25lbnQuZ29Ub0RldGFpbCIsIkFzc2V0c0NvbXBvbmVudC5uZXdBc3NldCIsIkFzc2V0c0NvbXBvbmVudC5kZWxldGVBc3NldCIsIkFzc2V0c0NvbXBvbmVudC5kaWFnbm9zdGljIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFzRElBLHlCQUFvQkEsY0FBNEJBLEVBQ3BDQSxPQUFlQTtvQkFEUEMsbUJBQWNBLEdBQWRBLGNBQWNBLENBQWNBO29CQUNwQ0EsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBUUE7Z0JBQzNCQSxDQUFDQTtnQkFFREQsa0NBQVFBLEdBQVJBO29CQUFBRSxpQkFHQ0E7b0JBRkdBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFNBQVNBLEVBQUVBO3lCQUMxQkEsU0FBU0EsQ0FBQ0EsVUFBQUEsR0FBR0EsSUFBSUEsT0FBQUEsS0FBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsR0FBR0EsRUFBakJBLENBQWlCQSxDQUFDQSxDQUFDQTtnQkFDN0NBLENBQUNBO2dCQUVERixvQ0FBVUEsR0FBVkEsVUFBV0EsS0FBWUE7b0JBQ25CRyxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxPQUFJQSxzQkFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsS0FBS0EsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzdFQSxDQUFDQTtnQkFFREgsa0NBQVFBLEdBQVJBO29CQUNJSSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxPQUFJQSxzQkFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3hEQSxDQUFDQTtnQkFFREoscUNBQVdBLEdBQVhBLFVBQVlBLE9BQWNBO29CQUN0QkssSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0E7Z0JBQ3pEQSxDQUFDQTtnQkFFREwsc0JBQUlBLHVDQUFVQTt5QkFBZEEsY0FBbUJNLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBOzs7bUJBQUFOO2dCQTNFNURBO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFFBQVFBO3dCQUNsQkEsUUFBUUEsRUFBRUEsZ3RFQStDVEE7cUJBQ0pBLENBQUNBOztvQ0EyQkRBO2dCQUFEQSxzQkFBQ0E7WUFBREEsQ0E3RUEsQUE2RUNBLElBQUE7WUE3RUQsNkNBNkVDLENBQUEiLCJmaWxlIjoiYXBwL2Fzc2V0cy9hc3NldHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgUGlwZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Um91dGVzfSBmcm9tIFwiLi4vcm91dGVzLmNvbmZpZ1wiO1xuaW1wb3J0IHtBc3NldFNlcnZpY2V9IGZyb20gJy4vYXNzZXQuc2VydmljZSc7XG5pbXBvcnQge0Fzc2V0fSBmcm9tICcuL2Fzc2V0JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhc3NldHMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICDvu788IS0te3tkaWFnbm9zdGljfX0tLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0IFwiPlxuICAgICAgICAgIDwhLS0gRGVmYXVsdCBwYW5lbCBjb250ZW50cyAtLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJuZXdBc3NldCgpXCI+TmV3IEFzc2V0PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgPHA+SGVyZSBpcyBhbiBleGFtcGxlIG9mIHRoZSBhc3NldHMgdGhhdCB5b3Ugd2lsbCBzZWUgaW4gQ01TLjwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwhLS0gVGFibGUgLS0+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGg+TVNOPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGg+Q3JlYXRpb24gZGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8dGJvZHkgKm5nRm9yPVwiI2Fzc2V0IG9mIGFzc2V0c1wiPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPnt7YXNzZXQuSWR9fTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPnt7YXNzZXQuTXNufX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e2Fzc2V0LkNyZWF0aW9uRGF0ZX19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gU3BsaXQgYnV0dG9uIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGJ0bi1ncm91cC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAgKGNsaWNrKT1cImdvVG9EZXRhaWwoYXNzZXQpXCI+RWRpdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gZHJvcGRvd24tdG9nZ2xlIGJ0bi1wcmltYXJ5XCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Ub2dnbGUgRHJvcGRvd248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgKGNsaWNrKT1cImRlbGV0ZUFzc2V0KGFzc2V0LklkKVwiPkRlbGV0ZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFub3RoZXIgYWN0aW9uPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U29tZXRoaW5nIGVsc2UgaGVyZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSByb2xlPVwic2VwYXJhdG9yXCIgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5TZXBhcmF0ZWQgbGluazwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQXNzZXRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgYXNzZXRzOiBBcnJheTxBc3NldD47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hc3NldHNTZXJ2aWNlOiBBc3NldFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2Fzc2V0c1NlcnZpY2UuZ2V0QXNzZXRzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMuYXNzZXRzID0gcmVzKTtcbiAgICB9XG5cbiAgICBnb1RvRGV0YWlsKGFzc2V0OiBBc3NldCkge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2AvJHtSb3V0ZXMuYXNzZXREZXRhaWwubmFtZX1gLCB7IGlkOiBhc3NldC5JZCB9XSk7XG4gICAgfVxuXG4gICAgbmV3QXNzZXQoKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYC8ke1JvdXRlcy5hc3NldE5ldy5uYW1lfWBdKTtcbiAgICB9XG5cbiAgICBkZWxldGVBc3NldChhc3NldElkOm51bWJlcikge1xuICAgICAgICB0aGlzLl9hc3NldHNTZXJ2aWNlLmRlbGV0ZUFzc2V0KGFzc2V0SWQpLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGdldCBkaWFnbm9zdGljKCkgeyByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5hc3NldHMpOyB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
