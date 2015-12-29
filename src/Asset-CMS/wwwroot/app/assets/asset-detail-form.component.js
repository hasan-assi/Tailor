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
                }
                AssetDetailFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this.asset) {
                        var id = +this._routeParams.get('id');
                        this._assetService.getAsset(id).subscribe(function (res) { return _this.asset = res; });
                    }
                    else {
                        this.asset = new asset_1.Asset();
                    }
                };
                AssetDetailFormComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this._assetService.updateAsset(this.asset).subscribe(function (data) { return data; }, function (err) { return console.log(err); }, function () { return _this.afterSubmit(); });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hc3NldHMvYXNzZXQtZGV0YWlsLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkFzc2V0RGV0YWlsRm9ybUNvbXBvbmVudCIsIkFzc2V0RGV0YWlsRm9ybUNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFzc2V0RGV0YWlsRm9ybUNvbXBvbmVudC5uZ09uSW5pdCIsIkFzc2V0RGV0YWlsRm9ybUNvbXBvbmVudC5vblN1Ym1pdCIsIkFzc2V0RGV0YWlsRm9ybUNvbXBvbmVudC5hZnRlclN1Ym1pdCIsIkFzc2V0RGV0YWlsRm9ybUNvbXBvbmVudC5kaWFnbm9zdGljIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFtQ0lBLGtDQUFvQkEsYUFBMkJBLEVBQ25DQSxZQUF5QkEsRUFDekJBLE9BQWVBO29CQUZQQyxrQkFBYUEsR0FBYkEsYUFBYUEsQ0FBY0E7b0JBQ25DQSxpQkFBWUEsR0FBWkEsWUFBWUEsQ0FBYUE7b0JBQ3pCQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtvQkFKM0JBLGNBQVNBLEdBQVlBLEtBQUtBLENBQUNBO2dCQU0zQkEsQ0FBQ0E7Z0JBRURELDJDQUFRQSxHQUFSQTtvQkFBQUUsaUJBU0NBO29CQVJHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDZEEsSUFBSUEsRUFBRUEsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ3RDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxRQUFRQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFBQSxHQUFHQSxJQUFJQSxPQUFBQSxLQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxHQUFHQSxFQUFoQkEsQ0FBZ0JBLENBQUNBLENBQUNBO29CQUN2RUEsQ0FBQ0E7b0JBQ0RBLElBQUlBLENBQ0pBLENBQUNBO3dCQUNHQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxhQUFLQSxFQUFFQSxDQUFDQTtvQkFDN0JBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFFREYsMkNBQVFBLEdBQVJBO29CQUFBRyxpQkFLQ0E7b0JBSkdBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLFNBQVNBLENBQ3BEQSxVQUFBQSxJQUFJQSxJQUFJQSxPQUFBQSxJQUFJQSxFQUFKQSxDQUFJQSxFQUNaQSxVQUFBQSxHQUFHQSxJQUFJQSxPQUFBQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFoQkEsQ0FBZ0JBLEVBQ3ZCQSxjQUFNQSxPQUFBQSxLQUFJQSxDQUFDQSxXQUFXQSxFQUFFQSxFQUFsQkEsQ0FBa0JBLENBQUNBLENBQUNBO2dCQUM5QkEsQ0FBQ0E7Z0JBRURILDhDQUFXQSxHQUFYQTtvQkFDSUksSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0E7b0JBQ3RCQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxPQUFJQSxzQkFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3REQSxDQUFDQTtnQkFTREosc0JBQUlBLGdEQUFVQTtvQkFQZEEsa0JBQWtCQTtvQkFDbEJBLDBEQUEwREE7b0JBQzFEQSxrQ0FBa0NBO29CQUNsQ0EsbUZBQW1GQTtvQkFDbkZBLEdBQUdBO29CQUVIQSx5REFBeURBO3lCQUN6REEsY0FBbUJLLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBLENBQUNBOzs7bUJBQUFMO2dCQXZFeERBO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLG1CQUFtQkE7d0JBQzdCQSxRQUFRQSxFQUFFQSx3cUNBMEJUQTtxQkFDSkEsQ0FBQ0E7OzZDQTJDREE7Z0JBQURBLCtCQUFDQTtZQUFEQSxDQXhFQSxBQXdFQ0EsSUFBQTtZQXhFRCwrREF3RUMsQ0FBQSIsImZpbGUiOiJhcHAvYXNzZXRzL2Fzc2V0LWRldGFpbC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtOZ0Zvcm19ICAgIGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge1JvdXRlUGFyYW1zLCBSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1JvdXRlc30gZnJvbSBcIi4uL3JvdXRlcy5jb25maWdcIlxuaW1wb3J0IHtBc3NldFNlcnZpY2V9IGZyb20gJy4vYXNzZXQuc2VydmljZSc7XG5pbXBvcnQge0Fzc2V0fSBmcm9tICcuL2Fzc2V0JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhc3NldC1kZXRhaWwtZm9ybScsXG4gICAgdGVtcGxhdGU6IGBcbu+7v1xuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgW2hpZGRlbl09XCJzdWJtaXR0ZWRcIj5cbiAgICAgICAgICAgICAgPGgxPkFzc2V0IEZvcm0gIDwvaDE+XG4gICAgICAgICAgICAgIDxmb3JtIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCIgI2Fzc2V0Rm9ybT1cIm5nRm9ybVwiICpuZ0lmPVwiYXNzZXRcIj5cbiAgICAgICAgICAgICAgICAgIHt7ZGlhZ25vc3RpY319XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtc25cIj5Nc248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09J2Fzc2V0Lk1zbicgbmdDb250cm9sPVwibXNuXCIgI21zbj1cIm5nRm9ybVwiICNzcHk+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBbaGlkZGVuXT1cIm1zbi52YWxpZFwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIE5hbWUgaXMgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY3JlYXRpb25EYXRlXCI+Q3JlYXRpb24gRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbKG5nTW9kZWwpXT1cImFzc2V0LkNyZWF0aW9uRGF0ZVwiIG5nQ29udHJvbD1cImNyZWF0aW9uRGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFhc3NldEZvcm0uZm9ybS52YWxpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQXNzZXREZXRhaWxGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBhc3NldDogQXNzZXQ7Ly8gPSAgQXNzZXQuR2V0RGVmYXVsdCgpOy8vID0gbmV3IEFzc2V0KDQwLCc0MCcsIG51bGwpIDtcbiAgICBzdWJtaXR0ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Fzc2V0U2VydmljZTogQXNzZXRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzc2V0KSB7XG4gICAgICAgICAgICBsZXQgaWQgPSArdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpZCcpO1xuICAgICAgICAgICAgdGhpcy5fYXNzZXRTZXJ2aWNlLmdldEFzc2V0KGlkKS5zdWJzY3JpYmUocmVzID0+IHRoaXMuYXNzZXQgPSByZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgLy9uZXdcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5hc3NldCA9IG5ldyBBc3NldCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICAgIHRoaXMuX2Fzc2V0U2VydmljZS51cGRhdGVBc3NldCh0aGlzLmFzc2V0KS5zdWJzY3JpYmUoXG4gICAgICAgIGRhdGEgPT4gZGF0YSAsXG4gICAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpLFxuICAgICAgICAoKSA9PiB0aGlzLmFmdGVyU3VibWl0KCkpO1xuICAgIH1cblxuICAgIGFmdGVyU3VibWl0KCkge1xuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYC8ke1JvdXRlcy5hc3NldHMubmFtZX1gXSk7XG4gICAgfVxuXG4gICAgLy8gUmV2ZWFsIGluIGh0bWw6XG4gICAgLy8gICBBbHRlckVnbyB2aWEgZm9ybS5jb250cm9scyA9IHt7c2hvd0Zvcm1Db250cm9scyhoZil9fVxuICAgIC8vc2hvd0Zvcm1Db250cm9scyhmb3JtOiBOZ0Zvcm0pIHtcbiAgICAvLyAgICByZXR1cm4gZm9ybS5jb250cm9sc1tcIkNyZWF0aW9uRGF0ZVwiXSAmJiBmb3JtLmNvbnRyb2xzWydtc24nXS52YWx1ZTsgLy8gRHIuIElRXG4gICAgLy99XG5cbiAgICAvL2dldCBkaWFnbm9zdGljKCkgeyByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5hc3NldCk7IH1cbiAgICBnZXQgZGlhZ25vc3RpYygpIHsgcmV0dXJuIHRoaXMuYXNzZXQuQ3JlYXRpb25EYXRlOyB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
