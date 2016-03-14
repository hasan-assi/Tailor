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
    var EmployeeService;
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
            EmployeeService = (function () {
                //   person: Person = null;
                function EmployeeService(_http) {
                    this._http = _http;
                    this.employees = [];
                    this._employeesUrl = '/api/Employee/';
                }
                EmployeeService.prototype.getEmployees = function () {
                    //return an observable
                    return this._http.get(this._employeesUrl)
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                EmployeeService.prototype.getEmployee = function (id) {
                    return this._http.get('/api/Employee/' + id.toString())
                        .map(function (response) {
                        return response.json();
                    });
                };
                EmployeeService.prototype.updateEmployee = function (employee) {
                    var postHeaders = new http_1.Headers();
                    postHeaders.append('Content-Type', 'application/json');
                    return this._http.put(this._employeesUrl + employee.Id.toString(), JSON.stringify(employee), { headers: postHeaders })
                        .catch(this.handleError);
                };
                EmployeeService.prototype.handleError = function (err) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(err);
                    return Observable_1.Observable.throw(err || 'Server error');
                };
                EmployeeService.prototype.createEmployee = function (employee) {
                    var body = JSON.stringify(employee);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http.post(this._employeesUrl, body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                EmployeeService.prototype.deleteEmployee = function (employeeId) {
                    return this._http.delete('/api/Employee/' + employeeId.toString());
                };
                EmployeeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], EmployeeService);
                return EmployeeService;
            }());
            exports_1("EmployeeService", EmployeeService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lbXBsb3llZS9lbXBsb3llZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7O2VBRUc7WUFFSDtnQkFFSSwyQkFBMkI7Z0JBRTNCLHlCQUFvQixLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07b0JBSC9CLGNBQVMsR0FBZSxFQUFFLENBQUM7b0JBSW5CLGtCQUFhLEdBQUcsZ0JBQWdCLENBQUM7Z0JBRE4sQ0FBQztnQkFHcEMsc0NBQVksR0FBWjtvQkFDSSxzQkFBc0I7b0JBRXRCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO3lCQUNwQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBWSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQXRCLENBQXNCLENBQUM7eUJBQ3RDLEVBQUUsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLENBQUM7eUJBQzdCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzdCLENBQUM7Z0JBRUQscUNBQVcsR0FBWCxVQUFZLEVBQVU7b0JBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7eUJBQ2xELEdBQUcsQ0FBQyxVQUFDLFFBQVE7d0JBQ1YsTUFBTSxDQUFXLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDckMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQztnQkFHRCx3Q0FBYyxHQUFkLFVBQWUsUUFBa0I7b0JBQzdCLElBQUksV0FBVyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQ2hDLFdBQVcsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7b0JBRXZELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsQ0FBQzt5QkFHakgsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFFTyxxQ0FBVyxHQUFuQixVQUFvQixHQUFhO29CQUM3QixtRkFBbUY7b0JBQ25GLDRDQUE0QztvQkFDNUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbkIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxjQUFjLENBQUMsQ0FBQztnQkFDbkQsQ0FBQztnQkFHRCx3Q0FBYyxHQUFkLFVBQWUsUUFBa0I7b0JBQzdCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3BDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztvQkFDbEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7b0JBRXZELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7eUJBQ3BELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBRyxPQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQzt5QkFDL0IsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFDRCx3Q0FBYyxHQUFkLFVBQWUsVUFBa0I7b0JBRTdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDdkUsQ0FBQztnQkF2REw7b0JBQUMsaUJBQVUsRUFBRTs7bUNBQUE7Z0JBeURiLHNCQUFDO1lBQUQsQ0F4REEsQUF3REMsSUFBQTtZQXhERCw2Q0F3REMsQ0FBQSIsImZpbGUiOiJhcHAvZW1wbG95ZWUvZW1wbG95ZWUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cCwgSGVhZGVycywgUmVzcG9uc2UsIFJlcXVlc3RPcHRpb25zfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0VtcGxveWVlfSBmcm9tIFwiLi9lbXBsb3llZVwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSAgICAgZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuLyoqXG4gKiBwZW9wbGUgc2VydmljZVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVTZXJ2aWNlIHtcbiAgICBlbXBsb3llZXM6IEVtcGxveWVlW10gPSBbXTtcbiAgICAvLyAgIHBlcnNvbjogUGVyc29uID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHsgfVxuICAgIHByaXZhdGUgX2VtcGxveWVlc1VybCA9ICcvYXBpL0VtcGxveWVlLyc7XG5cbiAgICBnZXRFbXBsb3llZXMoKSB7XG4gICAgICAgIC8vcmV0dXJuIGFuIG9ic2VydmFibGVcblxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fZW1wbG95ZWVzVXJsKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gPEVtcGxveWVlW10+cmVzLmpzb24oKSlcbiAgICAgICAgLmRvKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpIFxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gICAgfVxuXG4gICAgZ2V0RW1wbG95ZWUoaWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJy9hcGkvRW1wbG95ZWUvJyArIGlkLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8RW1wbG95ZWU+cmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICB1cGRhdGVFbXBsb3llZShlbXBsb3llZTogRW1wbG95ZWUpIHtcbiAgICAgICAgdmFyIHBvc3RIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgcG9zdEhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnB1dCh0aGlzLl9lbXBsb3llZXNVcmwgKyBlbXBsb3llZS5JZC50b1N0cmluZygpLCBKU09OLnN0cmluZ2lmeShlbXBsb3llZSksIHsgaGVhZGVyczogcG9zdEhlYWRlcnMgfSlcbiAgICAgICAgICAgIC8vLm1hcChyZXMgPT4gPEVtcGxveWVlPnJlcy5qc29uKCkpXG4gICAgICAgICAgICAvLy5kbyhkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyOiBSZXNwb25zZSkge1xuICAgICAgICAvLyBpbiBhIHJlYWwgd29ybGQgYXBwLCB3ZSBtYXkgc2VuZCB0aGUgZXJyb3IgdG8gc29tZSByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxuICAgICAgICAvLyBpbnN0ZWFkIG9mIGp1c3QgbG9nZ2luZyBpdCB0byB0aGUgY29uc29sZVxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVyciB8fCAnU2VydmVyIGVycm9yJyk7XG4gICAgfVxuXG5cbiAgICBjcmVhdGVFbXBsb3llZShlbXBsb3llZTogRW1wbG95ZWUpOiBPYnNlcnZhYmxlPEVtcGxveWVlPiAge1xuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGVtcGxveWVlKTtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2VtcGxveWVlc1VybCwgYm9keSwgb3B0aW9ucylcbiAgICAgICAgICAgIC5tYXAocmVzPT4gPEVtcGxveWVlPnJlcy5qc29uKCkpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gICAgfVxuICAgIGRlbGV0ZUVtcGxveWVlKGVtcGxveWVlSWQ6IG51bWJlcikge1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSgnL2FwaS9FbXBsb3llZS8nICsgZW1wbG95ZWVJZC50b1N0cmluZygpKTtcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
