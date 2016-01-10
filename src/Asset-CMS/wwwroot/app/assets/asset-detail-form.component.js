System.register(['angular2/core', 'angular2/router', "../routes.config", './asset.service', './asset', "../blocks/dialog.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, routes_config_1, asset_service_1, asset_1, dialog_service_1;
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
            },
            function (dialog_service_1_1) {
                dialog_service_1 = dialog_service_1_1;
            }],
        execute: function() {
            AssetDetailFormComponent = (function () {
                function AssetDetailFormComponent(_assetService, _routeParams, _router, _dialog) {
                    this._assetService = _assetService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this._dialog = _dialog;
                    this.submitted = false;
                    this._isNew = false;
                }
                AssetDetailFormComponent.prototype.routerCanDeactivate = function (next, prev) {
                    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
                    if (!this.asset || this.asset.Msn === this._msn) {
                        return true;
                    }
                    // Otherwise ask the user with the dialog service and return its
                    // promise which resolves to true or false when the user decides
                    return this._dialog.confirm('Discard changes?');
                };
                AssetDetailFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this.asset) {
                        var id = +this._routeParams.get('id');
                        if (id > 0) {
                            this._isNew = false;
                            this._assetService.getAsset(id).subscribe(function (res) {
                                _this.asset = res;
                                _this._msn = _this.asset.Msn;
                            }, function (err) { return console.log(err); });
                        }
                        else {
                            this.asset = new asset_1.Asset();
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
                    __metadata('design:paramtypes', [asset_service_1.AssetService, router_1.RouteParams, router_1.Router, dialog_service_1.DialogService])
                ], AssetDetailFormComponent);
                return AssetDetailFormComponent;
            })();
            exports_1("AssetDetailFormComponent", AssetDetailFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hc3NldHMvYXNzZXQtZGV0YWlsLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkFzc2V0RGV0YWlsRm9ybUNvbXBvbmVudCIsIkFzc2V0RGV0YWlsRm9ybUNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFzc2V0RGV0YWlsRm9ybUNvbXBvbmVudC5yb3V0ZXJDYW5EZWFjdGl2YXRlIiwiQXNzZXREZXRhaWxGb3JtQ29tcG9uZW50Lm5nT25Jbml0IiwiQXNzZXREZXRhaWxGb3JtQ29tcG9uZW50Lm9uU3VibWl0IiwiQXNzZXREZXRhaWxGb3JtQ29tcG9uZW50LmFmdGVyU3VibWl0IiwiQXNzZXREZXRhaWxGb3JtQ29tcG9uZW50LmRpYWdub3N0aWMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQXFDSUEsa0NBQW9CQSxhQUEyQkEsRUFDbkNBLFlBQXlCQSxFQUN6QkEsT0FBZUEsRUFDZkEsT0FBc0JBO29CQUhkQyxrQkFBYUEsR0FBYkEsYUFBYUEsQ0FBY0E7b0JBQ25DQSxpQkFBWUEsR0FBWkEsWUFBWUEsQ0FBYUE7b0JBQ3pCQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtvQkFDZkEsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBZUE7b0JBUDFCQSxjQUFTQSxHQUFZQSxLQUFLQSxDQUFDQTtvQkFDM0JBLFdBQU1BLEdBQVlBLEtBQUtBLENBQUNBO2dCQVFoQ0EsQ0FBQ0E7Z0JBRURELHNEQUFtQkEsR0FBbkJBLFVBQW9CQSxJQUEwQkEsRUFBRUEsSUFBMEJBO29CQUN0RUUsaUZBQWlGQTtvQkFDakZBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLElBQUlBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLEtBQUtBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO3dCQUM5Q0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7b0JBQ2hCQSxDQUFDQTtv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Q0E7Z0JBU0RMLHNCQUFJQSxnREFBVUE7b0JBUGRBLGtCQUFrQkE7b0JBQ2xCQSwwREFBMERBO29CQUMxREEsa0NBQWtDQTtvQkFDbENBLG1GQUFtRkE7b0JBQ25GQSxHQUFHQTtvQkFFSEEseURBQXlEQTt5QkFDekRBLGNBQW1CTSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQSxDQUFDQTs7O21CQUFBTjtnQkFyR3hEQTtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxtQkFBbUJBO3dCQUM3QkEsUUFBUUEsRUFBRUEsd3FDQTBCVEE7cUJBQ0pBLENBQUNBOzs2Q0F5RURBO2dCQUFEQSwrQkFBQ0E7WUFBREEsQ0F0R0EsQUFzR0NBLElBQUE7WUF0R0QsK0RBc0dDLENBQUEiLCJmaWxlIjoiYXBwL2Fzc2V0cy9hc3NldC1kZXRhaWwtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TmdGb3JtfSAgICBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtSb3V0ZVBhcmFtcywgUm91dGVyLCBDYW5EZWFjdGl2YXRlLCBDb21wb25lbnRJbnN0cnVjdGlvbn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Um91dGVzfSBmcm9tIFwiLi4vcm91dGVzLmNvbmZpZ1wiXG5pbXBvcnQge0Fzc2V0U2VydmljZX0gZnJvbSAnLi9hc3NldC5zZXJ2aWNlJztcbmltcG9ydCB7QXNzZXR9IGZyb20gJy4vYXNzZXQnO1xuaW1wb3J0IHtEaWFsb2dTZXJ2aWNlfSBmcm9tIFwiLi4vYmxvY2tzL2RpYWxvZy5zZXJ2aWNlXCJcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhc3NldC1kZXRhaWwtZm9ybScsXG4gICAgdGVtcGxhdGU6IGBcbu+7v1xuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgW2hpZGRlbl09XCJzdWJtaXR0ZWRcIj5cbiAgICAgICAgICAgICAgPGgxPkFzc2V0IEZvcm0gIDwvaDE+XG4gICAgICAgICAgICAgIDxmb3JtIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCIgI2Fzc2V0Rm9ybT1cIm5nRm9ybVwiICpuZ0lmPVwiYXNzZXRcIj5cbiAgICAgICAgICAgICAgICAgIHt7ZGlhZ25vc3RpY319XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtc25cIj5Nc248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09J2Fzc2V0Lk1zbicgbmdDb250cm9sPVwibXNuXCIgI21zbj1cIm5nRm9ybVwiICNzcHk+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBbaGlkZGVuXT1cIm1zbi52YWxpZFwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIE5hbWUgaXMgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY3JlYXRpb25EYXRlXCI+Q3JlYXRpb24gRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbKG5nTW9kZWwpXT1cImFzc2V0LkNyZWF0aW9uRGF0ZVwiIG5nQ29udHJvbD1cImNyZWF0aW9uRGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFhc3NldEZvcm0uZm9ybS52YWxpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQXNzZXREZXRhaWxGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDYW5EZWFjdGl2YXRlICB7XG5cbiAgICBwcml2YXRlIGFzc2V0OiBBc3NldDsvLyA9ICBBc3NldC5HZXREZWZhdWx0KCk7Ly8gPSBuZXcgQXNzZXQoNDAsJzQwJywgbnVsbCkgO1xuICAgIHByaXZhdGUgc3VibWl0dGVkOiBCb29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfaXNOZXc6IEJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIF9tc246c3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXNzZXRTZXJ2aWNlOiBBc3NldFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcyxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgX2RpYWxvZzogRGlhbG9nU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgcm91dGVyQ2FuRGVhY3RpdmF0ZShuZXh0OiBDb21wb25lbnRJbnN0cnVjdGlvbiwgcHJldjogQ29tcG9uZW50SW5zdHJ1Y3Rpb24pOiBhbnkge1xuICAgICAgICAvLyBBbGxvdyBzeW5jaHJvbm91cyBuYXZpZ2F0aW9uIChgdHJ1ZWApIGlmIG5vIGNyaXNpcyBvciB0aGUgY3Jpc2lzIGlzIHVuY2hhbmdlZC5cbiAgICAgICAgaWYgKCF0aGlzLmFzc2V0IHx8IHRoaXMuYXNzZXQuTXNuID09PSB0aGlzLl9tc24pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSBhc2sgdGhlIHVzZXIgd2l0aCB0aGUgZGlhbG9nIHNlcnZpY2UgYW5kIHJldHVybiBpdHNcbiAgICAgICAgLy8gcHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0cnVlIG9yIGZhbHNlIHdoZW4gdGhlIHVzZXIgZGVjaWRlc1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlhbG9nLmNvbmZpcm0oJ0Rpc2NhcmQgY2hhbmdlcz8nKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzc2V0KSB7XG4gICAgICAgICAgICBsZXQgaWQgPSArdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpZCcpO1xuICAgICAgICAgICAgaWYgKGlkID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzTmV3ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXNzZXRTZXJ2aWNlLmdldEFzc2V0KGlkKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hc3NldCA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21zbiA9IHRoaXMuYXNzZXQuTXNuO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgLy9uZXdcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFzc2V0ID0gbmV3IEFzc2V0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5faXNOZXcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5faXNOZXcpIHtcbiAgICAgICAgICAgIHRoaXMuX2Fzc2V0U2VydmljZS51cGRhdGVBc3NldCh0aGlzLmFzc2V0KS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiBkYXRhLFxuICAgICAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpLFxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuYWZ0ZXJTdWJtaXQoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9hc3NldFNlcnZpY2UuY3JlYXRlQXNzZXQodGhpcy5hc3NldCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4gZGF0YSxcbiAgICAgICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coZXJyKSxcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmFmdGVyU3VibWl0KCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWZ0ZXJTdWJtaXQoKSB7XG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgLyR7Um91dGVzLmFzc2V0cy5uYW1lfWBdKTtcbiAgICB9XG5cbiAgICAvLyBSZXZlYWwgaW4gaHRtbDpcbiAgICAvLyAgIEFsdGVyRWdvIHZpYSBmb3JtLmNvbnRyb2xzID0ge3tzaG93Rm9ybUNvbnRyb2xzKGhmKX19XG4gICAgLy9zaG93Rm9ybUNvbnRyb2xzKGZvcm06IE5nRm9ybSkge1xuICAgIC8vICAgIHJldHVybiBmb3JtLmNvbnRyb2xzW1wiQ3JlYXRpb25EYXRlXCJdICYmIGZvcm0uY29udHJvbHNbJ21zbiddLnZhbHVlOyAvLyBEci4gSVFcbiAgICAvL31cblxuICAgIC8vZ2V0IGRpYWdub3N0aWMoKSB7IHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLmFzc2V0KTsgfVxuICAgIGdldCBkaWFnbm9zdGljKCkgeyByZXR1cm4gdGhpcy5hc3NldC5DcmVhdGlvbkRhdGU7IH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
