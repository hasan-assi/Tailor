System.register(['angular2/core', 'angular2/router', "../routes.config", './asset.service', './asset'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, routes_config_1, asset_service_1, asset_1;
    var AssetDetailFormComponent;
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
            },
            function (asset_1_1) {
                asset_1 = asset_1_1;
            }],
        execute: function() {
            AssetDetailFormComponent = (function () {
                function AssetDetailFormComponent(_assetService, _routeParams, _router) {
                    this._assetService = _assetService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this.submitted = false;
                    this._isNew = false;
                }
                AssetDetailFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this.asset) {
                        var id = +this._routeParams.get('id');
                        if (id > 0) {
                            this._isNew = false;
                            this._assetService.getAsset(id).subscribe(function (res) { return _this.asset = res; });
                        }
                        else {
                            this.asset = new asset_1.Asset();
                            this.asset.Msn = "new";
                            ////this._asset.CreationDate = '2015-12-24T00:00:00';
                            this._isNew = true;
                        }
                    }
                };
                AssetDetailFormComponent.prototype.onSubmit = function () {
                    var _this = this;
                    if (!this._isNew) {
                        this._assetService.updateAsset(this.asset).subscribe(function (data) { return data; }, function (err) { return console.log(err); }, function () { return _this.afterSubmit(); });
                    }
                    else {
                        this._assetService.createAsset(this.asset).subscribe(function (data) { return data; }, function (err) { return console.log(err); }, function () { return _this.afterSubmit(); });
                    }
                };
                AssetDetailFormComponent.prototype.afterSubmit = function () {
                    this.submitted = true;
                    this._router.navigate([("/" + routes_config_1.Routes.assets.name)]);
                };
                Object.defineProperty(AssetDetailFormComponent.prototype, "diagnostic", {
                    // Reveal in html:
                    //   AlterEgo via form.controls = {{showFormControls(hf)}}
                    //showFormControls(form: NgForm) {
                    //    return form.controls["CreationDate"] && form.controls['msn'].value; // Dr. IQ
                    //}
                    //get diagnostic() { return JSON.stringify(this.asset); }
                    get: function () { return this.asset.CreationDate; },
                    enumerable: true,
                    configurable: true
                });
                AssetDetailFormComponent = __decorate([
                    core_1.Component({
                        selector: 'asset-detail-form',
                        template: "\n\uFEFF\n      <div class=\"container\">\n          <div [hidden]=\"submitted\">\n              <h1>Asset Form  </h1>\n              <form (ngSubmit)=\"onSubmit()\" #assetForm=\"ngForm\" *ngIf=\"asset\">\n                  {{diagnostic}}\n                  <div class=\"form-group\">\n                      <label for=\"msn\">Msn</label>\n                      <input type=\"text\" class=\"form-control\" required [(ngModel)]='asset.Msn' ngControl=\"msn\" #msn=\"ngForm\" #spy>\n                      <div [hidden]=\"msn.valid\" class=\"alert alert-danger\">\n                          Name is required\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"creationDate\">Creation Date</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"asset.CreationDate\" ngControl=\"creationDate\">\n                  </div>\n\n                  <button type=\"submit\" class=\"btn btn-default\"\n                          [disabled]=\"!assetForm.form.valid\">\n                      Submit\n                  </button>\n              </form>\n          </div>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [asset_service_1.AssetService, router_1.RouteParams, router_1.Router])
                ], AssetDetailFormComponent);
                return AssetDetailFormComponent;
            })();
            exports_1("AssetDetailFormComponent", AssetDetailFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hc3NldHMvYXNzZXQtZGV0YWlsLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkFzc2V0RGV0YWlsRm9ybUNvbXBvbmVudCIsIkFzc2V0RGV0YWlsRm9ybUNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFzc2V0RGV0YWlsRm9ybUNvbXBvbmVudC5uZ09uSW5pdCIsIkFzc2V0RGV0YWlsRm9ybUNvbXBvbmVudC5vblN1Ym1pdCIsIkFzc2V0RGV0YWlsRm9ybUNvbXBvbmVudC5hZnRlclN1Ym1pdCIsIkFzc2V0RGV0YWlsRm9ybUNvbXBvbmVudC5kaWFnbm9zdGljIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFvQ0lBLGtDQUFvQkEsYUFBMkJBLEVBQ25DQSxZQUF5QkEsRUFDekJBLE9BQWVBO29CQUZQQyxrQkFBYUEsR0FBYkEsYUFBYUEsQ0FBY0E7b0JBQ25DQSxpQkFBWUEsR0FBWkEsWUFBWUEsQ0FBYUE7b0JBQ3pCQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtvQkFMbkJBLGNBQVNBLEdBQVlBLEtBQUtBLENBQUNBO29CQUMzQkEsV0FBTUEsR0FBWUEsS0FBS0EsQ0FBQ0E7Z0JBTWhDQSxDQUFDQTtnQkFFREQsMkNBQVFBLEdBQVJBO29CQUFBRSxpQkFlQ0E7b0JBZEdBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO3dCQUNkQSxJQUFJQSxFQUFFQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTt3QkFDdENBLEVBQUVBLENBQUNBLENBQUNBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBOzRCQUNUQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxLQUFLQSxDQUFDQTs0QkFDcEJBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFFBQVFBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLFVBQUFBLEdBQUdBLElBQUlBLE9BQUFBLEtBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEdBQUdBLEVBQWhCQSxDQUFnQkEsQ0FBQ0EsQ0FBQ0E7d0JBQ3ZFQSxDQUFDQTt3QkFDREEsSUFBSUEsQ0FDSkEsQ0FBQ0E7NEJBQ0dBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLGFBQUtBLEVBQUVBLENBQUNBOzRCQUN6QkEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsR0FBR0EsS0FBS0EsQ0FBQ0E7NEJBQ3ZCQSxxREFBcURBOzRCQUNyREEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0E7d0JBQ3ZCQSxDQUFDQTtvQkFDTEEsQ0FBQ0E7Z0JBQ0xBLENBQUNBO2dCQUVERiwyQ0FBUUEsR0FBUkE7b0JBQUFHLGlCQVlDQTtvQkFYR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2ZBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLFNBQVNBLENBQ2hEQSxVQUFBQSxJQUFJQSxJQUFJQSxPQUFBQSxJQUFJQSxFQUFKQSxDQUFJQSxFQUNaQSxVQUFBQSxHQUFHQSxJQUFJQSxPQUFBQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFoQkEsQ0FBZ0JBLEVBQ3ZCQSxjQUFNQSxPQUFBQSxLQUFJQSxDQUFDQSxXQUFXQSxFQUFFQSxFQUFsQkEsQ0FBa0JBLENBQUNBLENBQUNBO29CQUNsQ0EsQ0FBQ0E7b0JBQUNBLElBQUlBLENBQUNBLENBQUNBO3dCQUNKQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUNoREEsVUFBQUEsSUFBSUEsSUFBSUEsT0FBQUEsSUFBSUEsRUFBSkEsQ0FBSUEsRUFDWkEsVUFBQUEsR0FBR0EsSUFBSUEsT0FBQUEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBaEJBLENBQWdCQSxFQUN2QkEsY0FBTUEsT0FBQUEsS0FBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsRUFBbEJBLENBQWtCQSxDQUFDQSxDQUFDQTtvQkFDbENBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFFREgsOENBQVdBLEdBQVhBO29CQUNJSSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFDdEJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLE9BQUlBLHNCQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdERBLENBQUNBO2dCQVNESixzQkFBSUEsZ0RBQVVBO29CQVBkQSxrQkFBa0JBO29CQUNsQkEsMERBQTBEQTtvQkFDMURBLGtDQUFrQ0E7b0JBQ2xDQSxtRkFBbUZBO29CQUNuRkEsR0FBR0E7b0JBRUhBLHlEQUF5REE7eUJBQ3pEQSxjQUFtQkssTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OzttQkFBQUw7Z0JBckZ4REE7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsbUJBQW1CQTt3QkFDN0JBLFFBQVFBLEVBQUVBLHdxQ0EwQlRBO3FCQUNKQSxDQUFDQTs7NkNBeUREQTtnQkFBREEsK0JBQUNBO1lBQURBLENBdEZBLEFBc0ZDQSxJQUFBO1lBdEZELCtEQXNGQyxDQUFBIiwiZmlsZSI6ImFwcC9hc3NldHMvYXNzZXQtZGV0YWlsLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge05nRm9ybX0gICAgZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7Um91dGVQYXJhbXMsIFJvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Um91dGVzfSBmcm9tIFwiLi4vcm91dGVzLmNvbmZpZ1wiXG5pbXBvcnQge0Fzc2V0U2VydmljZX0gZnJvbSAnLi9hc3NldC5zZXJ2aWNlJztcbmltcG9ydCB7QXNzZXR9IGZyb20gJy4vYXNzZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Fzc2V0LWRldGFpbC1mb3JtJyxcbiAgICB0ZW1wbGF0ZTogYFxu77u/XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBbaGlkZGVuXT1cInN1Ym1pdHRlZFwiPlxuICAgICAgICAgICAgICA8aDE+QXNzZXQgRm9ybSAgPC9oMT5cbiAgICAgICAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIiAjYXNzZXRGb3JtPVwibmdGb3JtXCIgKm5nSWY9XCJhc3NldFwiPlxuICAgICAgICAgICAgICAgICAge3tkaWFnbm9zdGljfX1cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1zblwiPk1zbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT0nYXNzZXQuTXNuJyBuZ0NvbnRyb2w9XCJtc25cIiAjbXNuPVwibmdGb3JtXCIgI3NweT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtoaWRkZW5dPVwibXNuLnZhbGlkXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgTmFtZSBpcyByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjcmVhdGlvbkRhdGVcIj5DcmVhdGlvbiBEYXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFsobmdNb2RlbCldPVwiYXNzZXQuQ3JlYXRpb25EYXRlXCIgbmdDb250cm9sPVwiY3JlYXRpb25EYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWFzc2V0Rm9ybS5mb3JtLnZhbGlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBBc3NldERldGFpbEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHJpdmF0ZSBhc3NldDogQXNzZXQ7Ly8gPSAgQXNzZXQuR2V0RGVmYXVsdCgpOy8vID0gbmV3IEFzc2V0KDQwLCc0MCcsIG51bGwpIDtcbiAgICBwcml2YXRlIHN1Ym1pdHRlZDogQm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2lzTmV3OiBCb29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hc3NldFNlcnZpY2U6IEFzc2V0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5hc3NldCkge1xuICAgICAgICAgICAgbGV0IGlkID0gK3RoaXMuX3JvdXRlUGFyYW1zLmdldCgnaWQnKTtcbiAgICAgICAgICAgIGlmIChpZCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pc05ldyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Fzc2V0U2VydmljZS5nZXRBc3NldChpZCkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmFzc2V0ID0gcmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgLy9uZXdcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFzc2V0ID0gbmV3IEFzc2V0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hc3NldC5Nc24gPSBcIm5ld1wiO1xuICAgICAgICAgICAgICAgIC8vLy90aGlzLl9hc3NldC5DcmVhdGlvbkRhdGUgPSAnMjAxNS0xMi0yNFQwMDowMDowMCc7XG4gICAgICAgICAgICAgICAgdGhpcy5faXNOZXcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5faXNOZXcpIHtcbiAgICAgICAgICAgIHRoaXMuX2Fzc2V0U2VydmljZS51cGRhdGVBc3NldCh0aGlzLmFzc2V0KS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiBkYXRhLFxuICAgICAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpLFxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuYWZ0ZXJTdWJtaXQoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9hc3NldFNlcnZpY2UuY3JlYXRlQXNzZXQodGhpcy5hc3NldCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4gZGF0YSxcbiAgICAgICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coZXJyKSxcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmFmdGVyU3VibWl0KCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWZ0ZXJTdWJtaXQoKSB7XG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgLyR7Um91dGVzLmFzc2V0cy5uYW1lfWBdKTtcbiAgICB9XG5cbiAgICAvLyBSZXZlYWwgaW4gaHRtbDpcbiAgICAvLyAgIEFsdGVyRWdvIHZpYSBmb3JtLmNvbnRyb2xzID0ge3tzaG93Rm9ybUNvbnRyb2xzKGhmKX19XG4gICAgLy9zaG93Rm9ybUNvbnRyb2xzKGZvcm06IE5nRm9ybSkge1xuICAgIC8vICAgIHJldHVybiBmb3JtLmNvbnRyb2xzW1wiQ3JlYXRpb25EYXRlXCJdICYmIGZvcm0uY29udHJvbHNbJ21zbiddLnZhbHVlOyAvLyBEci4gSVFcbiAgICAvL31cblxuICAgIC8vZ2V0IGRpYWdub3N0aWMoKSB7IHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLmFzc2V0KTsgfVxuICAgIGdldCBkaWFnbm9zdGljKCkgeyByZXR1cm4gdGhpcy5hc3NldC5DcmVhdGlvbkRhdGU7IH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
