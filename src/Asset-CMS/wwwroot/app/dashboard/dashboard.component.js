System.register(['angular2/core', 'angular2/router', "../assets/asset.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, asset_service_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
                    this._router.navigate(['/$Routes.assetsDetail.name', { id: asset.Id }]);
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'my-dashboard',
                        template: "\n      \uFEFF<h3>Top Assets</h3>\n      <div class=\"gird grid-pad\">\n          <div *ngFor=\"#asset of assets\" class=\"col-4\" (click)=\"gotoDetail(asset)\">\n              <div class=\"module asset\">\n                  <h4>{{asset.Msn}}</h4>\n              </div>\n          </div>\n      </div>\n    ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJEYXNoYm9hcmRDb21wb25lbnQiLCJEYXNoYm9hcmRDb21wb25lbnQuY29uc3RydWN0b3IiLCJEYXNoYm9hcmRDb21wb25lbnQubmdPbkluaXQiLCJEYXNoYm9hcmRDb21wb25lbnQuZ290b0Fzc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkF3RElBLDRCQUFvQkEsYUFBMkJBLEVBQVVBLE9BQWNBO29CQUFuREMsa0JBQWFBLEdBQWJBLGFBQWFBLENBQWNBO29CQUFVQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFPQTtvQkFGaEVBLFdBQU1BLEdBQVlBLEVBQUVBLENBQUNBO2dCQUc1QkEsQ0FBQ0E7Z0JBRURELHFDQUFRQSxHQUFSQTtvQkFBQUUsaUJBR0NBO29CQUZHQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxTQUFTQSxFQUFFQTt5QkFDekJBLFNBQVNBLENBQUNBLFVBQUFBLEdBQUdBLElBQUlBLE9BQUFBLEtBQUlBLENBQUNBLE1BQU1BLEdBQUdBLEdBQUdBLEVBQWpCQSxDQUFpQkEsQ0FBQ0EsQ0FBQ0E7Z0JBQzdDQSxDQUFDQTtnQkFFREYsc0NBQVNBLEdBQVRBLFVBQVVBLEtBQVdBO29CQUNqQkcsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsNEJBQTRCQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxLQUFLQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDNUVBLENBQUNBO2dCQWxFTEg7b0JBQ0FBLGdCQUFTQSxDQUFDQTt3QkFDTkEsUUFBUUEsRUFBRUEsY0FBY0E7d0JBQ3hCQSxRQUFRQSxFQUFFQSxxVEFTVEE7d0JBQ0RBLE1BQU1BLEVBQUVBLENBQUNBLG9pQ0FzQ1JBLENBQUNBO3FCQUNMQSxDQUFDQTs7dUNBZURBO2dCQUFEQSx5QkFBQ0E7WUFBREEsQ0FuRUEsQUFtRUNBLElBQUE7WUFuRUQsbURBbUVDLENBQUEiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlciwgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7Um91dGVzfSBmcm9tICcuLi9yb3V0ZXMuY29uZmlnJztcbmltcG9ydCB7QXNzZXR9IGZyb20gXCIuLi9hc3NldHMvYXNzZXRcIjtcbmltcG9ydCB7QXNzZXRTZXJ2aWNlfSBmcm9tIFwiLi4vYXNzZXRzL2Fzc2V0LnNlcnZpY2VcIjtcblxuQFxuQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWRhc2hib2FyZCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIO+7vzxoMz5Ub3AgQXNzZXRzPC9oMz5cbiAgICAgIDxkaXYgY2xhc3M9XCJnaXJkIGdyaWQtcGFkXCI+XG4gICAgICAgICAgPGRpdiAqbmdGb3I9XCIjYXNzZXQgb2YgYXNzZXRzXCIgY2xhc3M9XCJjb2wtNFwiIChjbGljayk9XCJnb3RvRGV0YWlsKGFzc2V0KVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kdWxlIGFzc2V0XCI+XG4gICAgICAgICAgICAgICAgICA8aDQ+e3thc3NldC5Nc259fTwvaDQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICDvu79bY2xhc3MqPSdjb2wtJ10geyBmbG9hdDogbGVmdDsgfVxuXG4gICAgICAqLCAqOmFmdGVyLCAqOmJlZm9yZSB7XG4gICAgICBcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIFx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuXG4gICAgICBoMyB7IHRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luLWJvdHRvbTogMDsgfVxuXG4gICAgICBbY2xhc3MqPSdjb2wtJ10geyBwYWRkaW5nLXJpZ2h0OiAyMHB4OyBwYWRkaW5nLWJvdHRvbTogMjBweDt9XG4gICAgICBbY2xhc3MqPSdjb2wtJ106bGFzdC1vZi10eXBlIHsgcGFkZGluZy1yaWdodDogMDsgfVxuXG4gICAgICAuZ3JpZCB7IG1hcmdpbjogMCAxMGVtOyB9XG4gICAgICAuY29sLTEtNCB7IHdpZHRoOiAyNSU7IH1cbiAgICAgIC5tb2R1bGUge1xuICAgICAgXHRwYWRkaW5nOiAyMHB4O1xuICAgICAgXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBcdGNvbG9yOiAjZWVlO1xuICAgICAgXHRtYXgtaGVpZ2h0OiAxMjBweDtcbiAgICAgIFx0bWluLXdpZHRoOiAxMjBweDtcbiAgICAgIFx0YmFja2dyb3VuZC1jb2xvcjogIzExNzFhMztcbiAgICAgIH1cblxuICAgICAgLm1vZHVsZTpob3ZlciB7IGJhY2tncm91bmQtY29sb3I6ICM1MmI5ZTk7IGN1cnNvcjogcG9pbnRlcjsgfVxuXG4gICAgICAuZ3JpZC1wYWQgeyBwYWRkaW5nOiAyMHB4IDAgMjBweCAyMHB4OyB9XG4gICAgICAuZ3JpZC1wYWQgPiBbY2xhc3MqPSdjb2wtJ106bGFzdC1vZi10eXBlIHsgcGFkZGluZy1yaWdodDogMjBweDsgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgIFx0Lm1vZHVsZSB7IGZvbnQtc2l6ZTogMTBweDsgbWF4LWhlaWdodDogNzVweDsgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICBcdC5ncmlkIHsgbWFyZ2luOiAwOyB9XG4gICAgICBcdC5tb2R1bGUgeyBtaW4td2lkdGg6IDYwcHg7IH1cbiAgICAgIH1cbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBhc3NldHM6IEFzc2V0W10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Fzc2V0U2VydmljZTogQXNzZXRTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6Um91dGVyKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2Fzc2V0U2VydmljZS5nZXRBc3NldHMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4gdGhpcy5hc3NldHMgPSByZXMpO1xuICAgIH1cblxuICAgIGdvdG9Bc3NldChhc3NldDpBc3NldCkge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvJFJvdXRlcy5hc3NldHNEZXRhaWwubmFtZScsIHsgaWQ6IGFzc2V0LklkIH1dKTtcbiAgICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
