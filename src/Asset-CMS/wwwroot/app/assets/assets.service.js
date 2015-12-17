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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hc3NldHMvYXNzZXRzLnNlcnZpY2UudHMiXSwibmFtZXMiOlsiQXNzZXRTZXJ2aWNlIiwiQXNzZXRTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiQXNzZXRTZXJ2aWNlLmdldEFzc2V0cyIsIkFzc2V0U2VydmljZS5fZmV0Y2hGYWlsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBOztlQUVHO1lBQ0g7Z0JBR0lBLDJCQUEyQkE7Z0JBRTNCQSxzQkFBb0JBLEtBQVdBO29CQUFYQyxVQUFLQSxHQUFMQSxLQUFLQSxDQUFNQTtvQkFIL0JBLFdBQU1BLEdBQVlBLEVBQUVBLENBQUNBO2dCQUdjQSxDQUFDQTtnQkFFcENELGdDQUFTQSxHQUFUQTtvQkFDSUUsc0JBQXNCQTtvQkFDdEJBLElBQUlBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBO29CQUUzQ0EsTUFBTUEsQ0FBQ0EsT0FBT0E7eUJBQ1RBLEdBQUdBLENBQUNBLFVBQUNBLFFBQVFBO3dCQUNWQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQTtvQkFDM0JBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLFVBQUNBLE1BQWtCQTt3QkFDdEJBLElBQUlBLE1BQU1BLEdBQWlCQSxFQUFFQSxDQUFDQTt3QkFFOUJBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBOzRCQUNUQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFDQSxDQUFDQTtnQ0FDYkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7NEJBQ2xCQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDUEEsQ0FBQ0E7d0JBQ0RBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBO29CQUNsQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1hBLENBQUNBO2dCQUVPRixtQ0FBWUEsR0FBcEJBLFVBQXFCQSxLQUFVQTtvQkFDM0JHLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO29CQUNyQkEsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2pDQSxDQUFDQTtnQkE3QkxIO29CQUFDQSxpQkFBVUEsRUFBRUE7O2lDQThCWkE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQTlCQSxBQThCQ0EsSUFBQTtZQTlCRCx1Q0E4QkMsQ0FBQSIsImZpbGUiOiJhcHAvYXNzZXRzL2Fzc2V0cy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0Fzc2V0fSBmcm9tICcuL2Fzc2V0JztcblxuXG4vKipcbiAqIHBlb3BsZSBzZXJ2aWNlXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBc3NldFNlcnZpY2Uge1xuICAgIGFzc2V0czogQXNzZXRbXSA9IFtdO1xuICAgIC8vICAgcGVyc29uOiBQZXJzb24gPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkgeyB9XG5cbiAgICBnZXRBc3NldHMoKSB7XG4gICAgICAgIC8vcmV0dXJuIGFuIG9ic2VydmFibGVcbiAgICAgICAgbGV0IHJlcXVlc3QgPSB0aGlzLl9odHRwLmdldCgnL2FwaS9Bc3NldCcpO1xuXG4gICAgICAgIHJldHVybiByZXF1ZXN0XG4gICAgICAgICAgICAubWFwKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9KS5tYXAoKGFzc2V0czogQXJyYXk8YW55PikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQ6IEFycmF5PEFzc2V0PiA9IFtdO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFzc2V0cykge1xuICAgICAgICAgICAgICAgICAgICBhc3NldHMuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocClcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9mZXRjaEZhaWxlZChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
