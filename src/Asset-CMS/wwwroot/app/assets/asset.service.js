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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hc3NldHMvYXNzZXQuc2VydmljZS50cyJdLCJuYW1lcyI6WyJBc3NldFNlcnZpY2UiLCJBc3NldFNlcnZpY2UuY29uc3RydWN0b3IiLCJBc3NldFNlcnZpY2UuZ2V0QXNzZXRzIiwiQXNzZXRTZXJ2aWNlLl9mZXRjaEZhaWxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7O2VBRUc7WUFDSDtnQkFHSUEsMkJBQTJCQTtnQkFFM0JBLHNCQUFvQkEsS0FBV0E7b0JBQVhDLFVBQUtBLEdBQUxBLEtBQUtBLENBQU1BO29CQUgvQkEsV0FBTUEsR0FBWUEsRUFBRUEsQ0FBQ0E7Z0JBR2NBLENBQUNBO2dCQUVwQ0QsZ0NBQVNBLEdBQVRBO29CQUNJRSxzQkFBc0JBO29CQUN0QkEsSUFBSUEsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0E7b0JBRTNDQSxNQUFNQSxDQUFDQSxPQUFPQTt5QkFDVEEsR0FBR0EsQ0FBQ0EsVUFBQ0EsUUFBUUE7d0JBQ1ZBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO29CQUMzQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBQ0EsTUFBa0JBO3dCQUN0QkEsSUFBSUEsTUFBTUEsR0FBaUJBLEVBQUVBLENBQUNBO3dCQUU5QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ1RBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLFVBQUNBLENBQUNBO2dDQUNiQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFBQTs0QkFDbEJBLENBQUNBLENBQUNBLENBQUNBO3dCQUNQQSxDQUFDQTt3QkFDREEsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7b0JBQ2xCQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDWEEsQ0FBQ0E7Z0JBRU9GLG1DQUFZQSxHQUFwQkEsVUFBcUJBLEtBQVVBO29CQUMzQkcsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3JCQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDakNBLENBQUNBO2dCQTdCTEg7b0JBQUNBLGlCQUFVQSxFQUFFQTs7aUNBOEJaQTtnQkFBREEsbUJBQUNBO1lBQURBLENBOUJBLEFBOEJDQSxJQUFBO1lBOUJELHVDQThCQyxDQUFBIiwiZmlsZSI6ImFwcC9hc3NldHMvYXNzZXQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBc3NldH0gZnJvbSAnLi9hc3NldCc7XG5cblxuLyoqXG4gKiBwZW9wbGUgc2VydmljZVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXNzZXRTZXJ2aWNlIHtcbiAgICBhc3NldHM6IEFzc2V0W10gPSBbXTtcbiAgICAvLyAgIHBlcnNvbjogUGVyc29uID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHsgfVxuXG4gICAgZ2V0QXNzZXRzKCkge1xuICAgICAgICAvL3JldHVybiBhbiBvYnNlcnZhYmxlXG4gICAgICAgIGxldCByZXF1ZXN0ID0gdGhpcy5faHR0cC5nZXQoJy9hcGkvQXNzZXQnKTtcblxuICAgICAgICByZXR1cm4gcmVxdWVzdFxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgfSkubWFwKChhc3NldHM6IEFycmF5PGFueT4pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0OiBBcnJheTxBc3NldD4gPSBbXTtcblxuICAgICAgICAgICAgICAgIGlmIChhc3NldHMpIHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzLmZvckVhY2goKHApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHApXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZmV0Y2hGYWlsZWQoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
