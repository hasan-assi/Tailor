System.register(['angular2/http', 'angular2/core', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, Observable_1;
    var EmployeeTimeSheetService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            /**
             * people service
             */
            EmployeeTimeSheetService = (function () {
                //   person: Person = null;
                function EmployeeTimeSheetService(_http) {
                    this._http = _http;
                    this.employeeTimeSheets = [];
                    this._employeesUrl = '/api/EmployeeTimeSheet/';
                }
                //getEmployeesTimeSheet() {
                //    //return an observable
                //    return this._http.get(this._employeesUrl)
                //        .map(res => <EmployeeTimeSheet[]>res.json())
                //        .do(data => console.log(data))
                //        .catch(this.handleError);
                //}
                //getEmployee(id: number) {
                //    return this._http.get('/api/Employee/' + id.toString())
                //        .map((response) => {
                //            return <Employee>response.json();
                //        });
                //}
                //updateEmployee(employee: Employee) {
                //    var postHeaders = new Headers();
                //    postHeaders.append('Content-Type', 'application/json');
                //    return this._http.put(this._employeesUrl + employee.Id.toString(), JSON.stringify(employee), { headers: postHeaders })
                //        //.map(res => <Employee>res.json())
                //        //.do(data => console.log(data))
                //        .catch(this.handleError);
                //}
                EmployeeTimeSheetService.prototype.toDateString = function (date) {
                    return (date.getFullYear().toString() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + ("0" + (date.getDate())).slice(-2))
                        + 'T' + date.toTimeString().slice(0, 5);
                };
                EmployeeTimeSheetService.prototype.handleError = function (err) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(err);
                    return Observable_1.Observable.throw(err || 'Server error');
                };
                EmployeeTimeSheetService.prototype.getEmployeesTimeSheets = function (date) {
                    //return an observable
                    return this._http.get(this._employeesUrl + this.toDateString(date))
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                EmployeeTimeSheetService.prototype.createEmployeesTimeSheets = function (employeesTimeSheets, date) {
                    var body = JSON.stringify(employeesTimeSheets);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    var dateFormated = this.toDateString(date);
                    return this._http.post(this._employeesUrl + dateFormated, body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                EmployeeTimeSheetService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], EmployeeTimeSheetService);
                return EmployeeTimeSheetService;
            }());
            exports_1("EmployeeTimeSheetService", EmployeeTimeSheetService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lbXBsb3llZS10aW1lLXNoZWV0L2VtcGxveWVlLXRpbWUtc2hlZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBOztlQUVHO1lBRUg7Z0JBRUksMkJBQTJCO2dCQUUzQixrQ0FBb0IsS0FBVztvQkFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO29CQUgvQix1QkFBa0IsR0FBdUIsRUFBRSxDQUFDO29CQUlwQyxrQkFBYSxHQUFHLHlCQUF5QixDQUFDO2dCQURmLENBQUM7Z0JBR3BDLDJCQUEyQjtnQkFDM0IsNEJBQTRCO2dCQUM1QiwrQ0FBK0M7Z0JBQy9DLHNEQUFzRDtnQkFDdEQsd0NBQXdDO2dCQUN4QyxtQ0FBbUM7Z0JBQ25DLEdBQUc7Z0JBRUgsMkJBQTJCO2dCQUMzQiw2REFBNkQ7Z0JBQzdELDhCQUE4QjtnQkFDOUIsK0NBQStDO2dCQUMvQyxhQUFhO2dCQUNiLEdBQUc7Z0JBR0gsc0NBQXNDO2dCQUN0QyxzQ0FBc0M7Z0JBQ3RDLDZEQUE2RDtnQkFFN0QsNEhBQTRIO2dCQUM1SCw2Q0FBNkM7Z0JBQzdDLDBDQUEwQztnQkFDMUMsbUNBQW1DO2dCQUNuQyxHQUFHO2dCQUVLLCtDQUFZLEdBQXBCLFVBQXFCLElBQVU7b0JBQzNCLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzBCQUMzSCxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELENBQUM7Z0JBRU8sOENBQVcsR0FBbkIsVUFBb0IsR0FBYTtvQkFDN0IsbUZBQW1GO29CQUNuRiw0Q0FBNEM7b0JBQzVDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ25CLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksY0FBYyxDQUFDLENBQUM7Z0JBQ25ELENBQUM7Z0JBRUQseURBQXNCLEdBQXRCLFVBQXVCLElBQVM7b0JBQzVCLHNCQUFzQjtvQkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDOUQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQXFCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBL0IsQ0FBK0IsQ0FBQzt5QkFDM0MsRUFBRSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsQ0FBQzt5QkFDN0IsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFFRCw0REFBeUIsR0FBekIsVUFBMEIsbUJBQXdDLEVBQUUsSUFBUztvQkFDekUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7b0JBQ2xFLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO29CQUN2RCxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQzt5QkFDbkUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFHLE9BQXFCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBL0IsQ0FBK0IsQ0FBQzt5QkFDMUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkE5REw7b0JBQUMsaUJBQVUsRUFBRTs7NENBQUE7Z0JBb0ViLCtCQUFDO1lBQUQsQ0FuRUEsQUFtRUMsSUFBQTtZQW5FRCwrREFtRUMsQ0FBQSIsImZpbGUiOiJhcHAvZW1wbG95ZWUtdGltZS1zaGVldC9lbXBsb3llZS10aW1lLXNoZWV0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9uc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtFbXBsb3llZVRpbWVTaGVldH0gZnJvbSBcIi4vZW1wbG95ZWUtdGltZS1zaGVldFwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSAgICAgZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuLyoqXG4gKiBwZW9wbGUgc2VydmljZVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVUaW1lU2hlZXRTZXJ2aWNlIHtcbiAgICBlbXBsb3llZVRpbWVTaGVldHM6RW1wbG95ZWVUaW1lU2hlZXRbXSA9IFtdO1xuICAgIC8vICAgcGVyc29uOiBQZXJzb24gPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkgeyB9XG4gICAgcHJpdmF0ZSBfZW1wbG95ZWVzVXJsID0gJy9hcGkvRW1wbG95ZWVUaW1lU2hlZXQvJztcblxuICAgIC8vZ2V0RW1wbG95ZWVzVGltZVNoZWV0KCkge1xuICAgIC8vICAgIC8vcmV0dXJuIGFuIG9ic2VydmFibGVcbiAgICAvLyAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fZW1wbG95ZWVzVXJsKVxuICAgIC8vICAgICAgICAubWFwKHJlcyA9PiA8RW1wbG95ZWVUaW1lU2hlZXRbXT5yZXMuanNvbigpKVxuICAgIC8vICAgICAgICAuZG8oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcbiAgICAvLyAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgIC8vfVxuXG4gICAgLy9nZXRFbXBsb3llZShpZDogbnVtYmVyKSB7XG4gICAgLy8gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCcvYXBpL0VtcGxveWVlLycgKyBpZC50b1N0cmluZygpKVxuICAgIC8vICAgICAgICAubWFwKChyZXNwb25zZSkgPT4ge1xuICAgIC8vICAgICAgICAgICAgcmV0dXJuIDxFbXBsb3llZT5yZXNwb25zZS5qc29uKCk7XG4gICAgLy8gICAgICAgIH0pO1xuICAgIC8vfVxuXG5cbiAgICAvL3VwZGF0ZUVtcGxveWVlKGVtcGxveWVlOiBFbXBsb3llZSkge1xuICAgIC8vICAgIHZhciBwb3N0SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgLy8gICAgcG9zdEhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gICAgLy8gICAgcmV0dXJuIHRoaXMuX2h0dHAucHV0KHRoaXMuX2VtcGxveWVlc1VybCArIGVtcGxveWVlLklkLnRvU3RyaW5nKCksIEpTT04uc3RyaW5naWZ5KGVtcGxveWVlKSwgeyBoZWFkZXJzOiBwb3N0SGVhZGVycyB9KVxuICAgIC8vICAgICAgICAvLy5tYXAocmVzID0+IDxFbXBsb3llZT5yZXMuanNvbigpKVxuICAgIC8vICAgICAgICAvLy5kbyhkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuICAgIC8vICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gICAgLy99XG5cbiAgICBwcml2YXRlIHRvRGF0ZVN0cmluZyhkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIChkYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSArICctJyArIChcIjBcIiArIChkYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpICsgJy0nICsgKFwiMFwiICsgKGRhdGUuZ2V0RGF0ZSgpKSkuc2xpY2UoLTIpKVxuICAgICAgICAgICAgKyAnVCcgKyBkYXRlLnRvVGltZVN0cmluZygpLnNsaWNlKDAsIDUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyOiBSZXNwb25zZSkge1xuICAgICAgICAvLyBpbiBhIHJlYWwgd29ybGQgYXBwLCB3ZSBtYXkgc2VuZCB0aGUgZXJyb3IgdG8gc29tZSByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxuICAgICAgICAvLyBpbnN0ZWFkIG9mIGp1c3QgbG9nZ2luZyBpdCB0byB0aGUgY29uc29sZVxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVyciB8fCAnU2VydmVyIGVycm9yJyk7XG4gICAgfVxuXG4gICAgZ2V0RW1wbG95ZWVzVGltZVNoZWV0cyhkYXRlOkRhdGUpIHtcbiAgICAgICAgLy9yZXR1cm4gYW4gb2JzZXJ2YWJsZVxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fZW1wbG95ZWVzVXJsICsgdGhpcy50b0RhdGVTdHJpbmcoZGF0ZSkpXG4gICAgICAgICAgICAubWFwKHJlcyA9PiA8RW1wbG95ZWVUaW1lU2hlZXRbXT5yZXMuanNvbigpKVxuICAgICAgICAgICAgLmRvKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gICAgfVxuXG4gICAgY3JlYXRlRW1wbG95ZWVzVGltZVNoZWV0cyhlbXBsb3llZXNUaW1lU2hlZXRzOiBFbXBsb3llZVRpbWVTaGVldFtdLCBkYXRlOkRhdGUpOiBPYnNlcnZhYmxlPEVtcGxveWVlVGltZVNoZWV0W10+IHtcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShlbXBsb3llZXNUaW1lU2hlZXRzKTtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICAgICAgbGV0IGRhdGVGb3JtYXRlZCA9IHRoaXMudG9EYXRlU3RyaW5nKGRhdGUpO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2VtcGxveWVlc1VybCArIGRhdGVGb3JtYXRlZCwgYm9keSwgb3B0aW9ucylcbiAgICAgICAgICAgIC5tYXAocmVzPT4gPEVtcGxveWVlVGltZVNoZWV0W10+cmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgICB9XG4gICAgLy9kZWxldGVFbXBsb3llZShlbXBsb3llZUlkOiBudW1iZXIpIHtcblxuICAgIC8vICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSgnL2FwaS9FbXBsb3llZS8nICsgZW1wbG95ZWVJZC50b1N0cmluZygpKTtcbiAgICAvL31cblxufVxuXG5pbnRlcmZhY2UgTWFwPFQ+IHtcbiAgICBbSzogc3RyaW5nXTogVDtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
