System.register(['angular2/http', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1;
    var AssetService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * people service
             */
            AssetService = (function () {
                //   person: Person = null;
                function AssetService(_http) {
                    this._http = _http;
                    this.assets = [];
                }
                AssetService.prototype.getAssets = function () {
                    //return an observable
                    var request = this._http.get('/api/Asset');
                    return request
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
                AssetService.prototype.getAsset = function (id) {
                    return this._http.get('/api/Asset/' + id.toString())
                        .map(function (response) {
                        return response.json();
                    }).
                        map(function (asset) { return asset; });
                };
                AssetService.prototype.updateAsset = function (asset) {
                    var postHeaders = new http_1.Headers();
                    postHeaders.append('Content-Type', 'application/json');
                    return this._http.put('/api/Asset/' + asset.Id.toString(), JSON.stringify(asset), { headers: postHeaders });
                };
                AssetService.prototype._fetchFailed = function (error) {
                    console.error(error);
                    return Promise.reject(error);
                };
                AssetService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AssetService);
                return AssetService;
            })();
            exports_1("AssetService", AssetService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hc3NldHMvYXNzZXQuc2VydmljZS50cyJdLCJuYW1lcyI6WyJBc3NldFNlcnZpY2UiLCJBc3NldFNlcnZpY2UuY29uc3RydWN0b3IiLCJBc3NldFNlcnZpY2UuZ2V0QXNzZXRzIiwiQXNzZXRTZXJ2aWNlLmdldEFzc2V0IiwiQXNzZXRTZXJ2aWNlLnVwZGF0ZUFzc2V0IiwiQXNzZXRTZXJ2aWNlLl9mZXRjaEZhaWxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7O2VBRUc7WUFDSDtnQkFHSUEsMkJBQTJCQTtnQkFFM0JBLHNCQUFvQkEsS0FBV0E7b0JBQVhDLFVBQUtBLEdBQUxBLEtBQUtBLENBQU1BO29CQUgvQkEsV0FBTUEsR0FBWUEsRUFBRUEsQ0FBQ0E7Z0JBR2NBLENBQUNBO2dCQUVwQ0QsZ0NBQVNBLEdBQVRBO29CQUNJRSxzQkFBc0JBO29CQUN0QkEsSUFBSUEsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0E7b0JBQzNDQSxNQUFNQSxDQUFDQSxPQUFPQTt5QkFDVEEsR0FBR0EsQ0FBQ0EsVUFBQ0EsUUFBUUE7d0JBQ1ZBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO29CQUMzQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBQ0EsTUFBa0JBO3dCQUN0QkEsSUFBSUEsTUFBTUEsR0FBaUJBLEVBQUVBLENBQUNBO3dCQUU5QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ1RBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLFVBQUNBLENBQUNBO2dDQUNiQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFBQTs0QkFDbEJBLENBQUNBLENBQUNBLENBQUNBO3dCQUNQQSxDQUFDQTt3QkFDREEsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7b0JBQ2xCQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDWEEsQ0FBQ0E7Z0JBRURGLCtCQUFRQSxHQUFSQSxVQUFTQSxFQUFVQTtvQkFDZkcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsYUFBYUEsR0FBR0EsRUFBRUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0E7eUJBQy9DQSxHQUFHQSxDQUFDQSxVQUFDQSxRQUFRQTt3QkFDVkEsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7b0JBQzNCQSxDQUFDQSxDQUFDQTt3QkFDRkEsR0FBR0EsQ0FBQ0EsVUFBQ0EsS0FBWUEsSUFBT0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2pEQSxDQUFDQTtnQkFFREgsa0NBQVdBLEdBQVhBLFVBQVlBLEtBQVlBO29CQUNwQkksSUFBSUEsV0FBV0EsR0FBR0EsSUFBSUEsY0FBT0EsRUFBRUEsQ0FBQ0E7b0JBQ2hDQSxXQUFXQSxDQUFDQSxNQUFNQSxDQUFDQSxjQUFjQSxFQUFFQSxrQkFBa0JBLENBQUNBLENBQUNBO29CQUV2REEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsYUFBYUEsR0FBR0EsS0FBS0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsUUFBUUEsRUFBRUEsRUFBRUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsRUFBRUEsRUFBRUEsT0FBT0EsRUFBRUEsV0FBV0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ2hIQSxDQUFDQTtnQkFFT0osbUNBQVlBLEdBQXBCQSxVQUFxQkEsS0FBVUE7b0JBQzNCSyxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtvQkFDckJBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2dCQUNqQ0EsQ0FBQ0E7Z0JBM0NMTDtvQkFBQ0EsaUJBQVVBLEVBQUVBOztpQ0E0Q1pBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0E1Q0EsQUE0Q0NBLElBQUE7WUE1Q0QsdUNBNENDLENBQUEiLCJmaWxlIjoiYXBwL2Fzc2V0cy9hc3NldC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0Fzc2V0fSBmcm9tICcuL2Fzc2V0JztcblxuXG4vKipcbiAqIHBlb3BsZSBzZXJ2aWNlXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBc3NldFNlcnZpY2Uge1xuICAgIGFzc2V0czogQXNzZXRbXSA9IFtdO1xuICAgIC8vICAgcGVyc29uOiBQZXJzb24gPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkgeyB9XG5cbiAgICBnZXRBc3NldHMoKSB7XG4gICAgICAgIC8vcmV0dXJuIGFuIG9ic2VydmFibGVcbiAgICAgICAgbGV0IHJlcXVlc3QgPSB0aGlzLl9odHRwLmdldCgnL2FwaS9Bc3NldCcpO1xuICAgICAgICByZXR1cm4gcmVxdWVzdFxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgfSkubWFwKChhc3NldHM6IEFycmF5PGFueT4pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0OiBBcnJheTxBc3NldD4gPSBbXTtcblxuICAgICAgICAgICAgICAgIGlmIChhc3NldHMpIHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzLmZvckVhY2goKHApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHApXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0QXNzZXQoaWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJy9hcGkvQXNzZXQvJyArIGlkLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9KS5cbiAgICAgICAgICAgIG1hcCgoYXNzZXQ6IEFzc2V0KSA9PiB7IHJldHVybiBhc3NldDsgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQXNzZXQoYXNzZXQ6IEFzc2V0KSB7XG4gICAgICAgIHZhciBwb3N0SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIHBvc3RIZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wdXQoJy9hcGkvQXNzZXQvJyArIGFzc2V0LklkLnRvU3RyaW5nKCksIEpTT04uc3RyaW5naWZ5KGFzc2V0KSwgeyBoZWFkZXJzOiBwb3N0SGVhZGVycyB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9mZXRjaEZhaWxlZChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
