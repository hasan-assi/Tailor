var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var assets_service_1 = require('./assets.service');
var Assets = (function () {
    function Assets(_assetsService) {
        var _this = this;
        this._assetsService = _assetsService;
        _assetsService.getAssets()
            .subscribe(function (res) { return _this.assets = res; });
    }
    Object.defineProperty(Assets.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.assets); },
        enumerable: true,
        configurable: true
    });
    Assets = __decorate([
        angular2_1.Component({
            selector: 'assets',
            template: "\n\uFEFF\n      {{diagnostic}}\n      <div class=\"container\">\n          <div class=\"page-header\"><h1>Runners</h1></div>\n          <div class=\"panel panel-default\">\n              <!-- Default panel contents -->\n              <div class=\"panel-heading\">Our Top Runners</div>\n              <div class=\"panel-body\">\n                  <p>Here is an example of the runners that you will see on the trails in our area.</p>\n              </div>\n\n              <!-- Table -->\n              <table class=\"table\">\n                  <thead>\n                  <tr>\n                      <th>#</th>\n                      <th>MSN</th>\n                  </tr>\n                  </thead>\n                  <tbody *ng-for=\"#asset of assets\" >\n                      <tr>\n                          <th scope=\"row\">{{asset.Id}}</th>\n                          <td>{{asset.Msn}}</td>\n                      </tr>\n                  </tbody>\n              </table>\n          </div>\n      </div>\n    ",
            directives: [angular2_1.CORE_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [assets_service_1.AssetService])
    ], Assets);
    return Assets;
})();
exports.Assets = Assets;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hc3NldHMvQXNzZXRzLnRzIl0sIm5hbWVzIjpbIkFzc2V0cyIsIkFzc2V0cy5jb25zdHJ1Y3RvciIsIkFzc2V0cy5kaWFnbm9zdGljIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx5QkFBaUQsbUJBQW1CLENBQUMsQ0FBQTtBQUNyRSwrQkFBMkIsa0JBQWtCLENBQUMsQ0FBQTtBQUc5QztJQXFDSUEsZ0JBQW9CQSxjQUE0QkE7UUFyQ3BEQyxpQkE0Q0NBO1FBUHVCQSxtQkFBY0EsR0FBZEEsY0FBY0EsQ0FBY0E7UUFDNUNBLGNBQWNBLENBQUNBLFNBQVNBLEVBQUVBO2FBQ3JCQSxTQUFTQSxDQUFDQSxVQUFBQSxHQUFHQSxJQUFJQSxPQUFBQSxLQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxHQUFHQSxFQUFqQkEsQ0FBaUJBLENBQUNBLENBQUNBO0lBQzdDQSxDQUFDQTtJQUVERCxzQkFBSUEsOEJBQVVBO2FBQWRBLGNBQW1CRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTs7O09BQUFGO0lBMUM1REE7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLFFBQVFBO1lBQ2xCQSxRQUFRQSxFQUFFQSx5L0JBNkJUQTtZQUNEQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBZUEsQ0FBQ0E7U0FDaENBLENBQUNBOztlQVdEQTtJQUFEQSxhQUFDQTtBQUFEQSxDQTVDQSxBQTRDQ0EsSUFBQTtBQVZZLGNBQU0sU0FVbEIsQ0FBQSIsImZpbGUiOiJhcHAvYXNzZXRzL0Fzc2V0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBDT1JFX0RJUkVDVElWRVMsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtBc3NldFNlcnZpY2V9IGZyb20gJy4vYXNzZXRzLnNlcnZpY2UnO1xuaW1wb3J0IHtBc3NldH0gZnJvbSAnLi9hc3NldCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXNzZXRzJyxcbiAgICB0ZW1wbGF0ZTogYFxu77u/XG4gICAgICB7e2RpYWdub3N0aWN9fVxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlclwiPjxoMT5SdW5uZXJzPC9oMT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICA8IS0tIERlZmF1bHQgcGFuZWwgY29udGVudHMgLS0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+T3VyIFRvcCBSdW5uZXJzPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICA8cD5IZXJlIGlzIGFuIGV4YW1wbGUgb2YgdGhlIHJ1bm5lcnMgdGhhdCB5b3Ugd2lsbCBzZWUgb24gdGhlIHRyYWlscyBpbiBvdXIgYXJlYS48L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDwhLS0gVGFibGUgLS0+XG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5NU048L3RoPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICA8dGJvZHkgKm5nLWZvcj1cIiNhc3NldCBvZiBhc3NldHNcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj57e2Fzc2V0LklkfX08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3thc3NldC5Nc259fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVNdLFxufSlcbmV4cG9ydCBjbGFzcyBBc3NldHMge1xuICAgIHB1YmxpYyBhc3NldHM6IEFycmF5PEFzc2V0PjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Fzc2V0c1NlcnZpY2U6IEFzc2V0U2VydmljZSkge1xuICAgICAgICBfYXNzZXRzU2VydmljZS5nZXRBc3NldHMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4gdGhpcy5hc3NldHMgPSByZXMpO1xuICAgIH1cblxuICAgIGdldCBkaWFnbm9zdGljKCkgeyByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5hc3NldHMpOyB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
