var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('angular2/http');
var angular2_1 = require('angular2/angular2');
/**
 * people service
 */
var AssetService = (function () {
    //   person: Person = null;
    function AssetService(_http) {
        this._http = _http;
        this.assets = [];
    }
    AssetService.prototype.getAssets = function () {
        //return an observable
        return this._http.get('/api/Asset')
            .catch(function (err) {
            console.log(err);
            return [];
        })
            .map(function (response) {
            return response.json();
        }).map(function (assets) {
            var result = [];
            if (assets) {
                assets.forEach(function (p) {
                    result.push(p);
                });
            }
            return result;
        });
    };
    AssetService.prototype._fetchFailed = function (error) {
        console.error(error);
        return Promise.reject(error);
    };
    AssetService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AssetService);
    return AssetService;
})();
exports.AssetService = AssetService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hc3NldHMvYXNzZXRzLnNlcnZpY2UudHMiXSwibmFtZXMiOlsiQXNzZXRTZXJ2aWNlIiwiQXNzZXRTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiQXNzZXRTZXJ2aWNlLmdldEFzc2V0cyIsIkFzc2V0U2VydmljZS5fZmV0Y2hGYWlsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUFtQixlQUFlLENBQUMsQ0FBQTtBQUNuQyx5QkFBeUIsbUJBQW1CLENBQUMsQ0FBQTtBQUc3Qzs7R0FFRztBQUNIO0lBR0lBLDJCQUEyQkE7SUFFM0JBLHNCQUFvQkEsS0FBV0E7UUFBWEMsVUFBS0EsR0FBTEEsS0FBS0EsQ0FBTUE7UUFIL0JBLFdBQU1BLEdBQVlBLEVBQUVBLENBQUNBO0lBR2NBLENBQUNBO0lBRXBDRCxnQ0FBU0EsR0FBVEE7UUFDSUUsc0JBQXNCQTtRQUN0QkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsWUFBWUEsQ0FBQ0E7YUFDN0JBLEtBQUtBLENBQUNBLFVBQUNBLEdBQUdBO1lBQ1JBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2pCQSxNQUFNQSxDQUFDQSxFQUFFQSxDQUFDQTtRQUNkQSxDQUFDQSxDQUFDQTthQUNEQSxHQUFHQSxDQUFDQSxVQUFDQSxRQUFRQTtZQUNWQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQTtRQUMzQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBQ0EsTUFBa0JBO1lBQ3RCQSxJQUFJQSxNQUFNQSxHQUFpQkEsRUFBRUEsQ0FBQ0E7WUFFOUJBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO2dCQUNUQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFDQSxDQUFDQTtvQkFDYkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7Z0JBQ2xCQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNQQSxDQUFDQTtZQUNEQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtRQUNsQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDWEEsQ0FBQ0E7SUFFT0YsbUNBQVlBLEdBQXBCQSxVQUFxQkEsS0FBVUE7UUFDM0JHLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQ3JCQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtJQUNqQ0EsQ0FBQ0E7SUEvQkxIO1FBQUNBLHFCQUFVQSxFQUFFQTs7cUJBZ0NaQTtJQUFEQSxtQkFBQ0E7QUFBREEsQ0FoQ0EsQUFnQ0NBLElBQUE7QUEvQlksb0JBQVksZUErQnhCLENBQUEiLCJmaWxlIjoiYXBwL2Fzc2V0cy9hc3NldHMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7QXNzZXR9IGZyb20gJy4vYXNzZXQnO1xuXG4vKipcbiAqIHBlb3BsZSBzZXJ2aWNlXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBc3NldFNlcnZpY2Uge1xuICAgIGFzc2V0czogQXNzZXRbXSA9IFtdO1xuICAgIC8vICAgcGVyc29uOiBQZXJzb24gPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkgeyB9XG5cbiAgICBnZXRBc3NldHMoKSB7XG4gICAgICAgIC8vcmV0dXJuIGFuIG9ic2VydmFibGVcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCcvYXBpL0Fzc2V0JylcbiAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIH0pLm1hcCgoYXNzZXRzOiBBcnJheTxhbnk+KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdDogQXJyYXk8QXNzZXQ+ID0gW107XG5cbiAgICAgICAgICAgICAgICBpZiAoYXNzZXRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0cy5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2ZldGNoRmFpbGVkKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
