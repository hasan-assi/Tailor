System.register(['angular2/http', 'angular2/core'], function(exports_1, context_1) {
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
    var http_1, core_1;
    var EmployeeService;
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
            EmployeeService = (function () {
                //   person: Person = null;
                function EmployeeService(_http) {
                    this._http = _http;
                    this.employees = [];
                }
                EmployeeService.prototype.getEmployees = function () {
                    //return an observable
                    var request = this._http.get('/api/Employee');
                    return request
                        .map(function (response) {
                        return response.json();
                    }).map(function (employees) {
                        var result = [];
                        if (employees) {
                            employees.forEach(function (p) {
                                result.push(p);
                            });
                        }
                        return result;
                    });
                };
                EmployeeService.prototype.getEmployee = function (id) {
                    return this._http.get('/api/Employee/' + id.toString())
                        .map(function (response) {
                        return response.json();
                    }).
                        map(function (employee) { return employee; });
                };
                EmployeeService.prototype.updateEmployee = function (employee) {
                    var postHeaders = new http_1.Headers();
                    postHeaders.append('Content-Type', 'application/json');
                    return this._http.put('/api/Employee/' + employee.Id.toString(), JSON.stringify(employee), { headers: postHeaders });
                };
                EmployeeService.prototype.createEmployee = function (employee) {
                    var postHeaders = new http_1.Headers();
                    postHeaders.append('Content-Type', 'application/json');
                    return this._http.post('api/Employee/', JSON.stringify(employee, Object.keys(employee.constructor.prototype)), { headers: postHeaders });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lbXBsb3llZS9lbXBsb3llZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7O2VBRUc7WUFFSDtnQkFFSSwyQkFBMkI7Z0JBRTNCLHlCQUFvQixLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07b0JBSC9CLGNBQVMsR0FBZSxFQUFFLENBQUM7Z0JBR1EsQ0FBQztnQkFFcEMsc0NBQVksR0FBWjtvQkFDSSxzQkFBc0I7b0JBQ3RCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUM5QyxNQUFNLENBQUMsT0FBTzt5QkFDVCxHQUFHLENBQUMsVUFBQyxRQUFRO3dCQUNWLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzNCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLFNBQXFCO3dCQUN6QixJQUFJLE1BQU0sR0FBb0IsRUFBRSxDQUFDO3dCQUVqQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOzRCQUNaLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDO2dDQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBOzRCQUNsQixDQUFDLENBQUMsQ0FBQzt3QkFDUCxDQUFDO3dCQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7b0JBQ2xCLENBQUMsQ0FBQyxDQUFDO2dCQUNYLENBQUM7Z0JBRUQscUNBQVcsR0FBWCxVQUFZLEVBQVU7b0JBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7eUJBQ2xELEdBQUcsQ0FBQyxVQUFDLFFBQVE7d0JBQ1YsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDM0IsQ0FBQyxDQUFDO3dCQUNGLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxDQUFDO2dCQUVELHdDQUFjLEdBQWQsVUFBZSxRQUFrQjtvQkFDN0IsSUFBSSxXQUFXLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDaEMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztvQkFFdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO2dCQUN6SCxDQUFDO2dCQUVELHdDQUFjLEdBQWQsVUFBZSxRQUFrQjtvQkFDN0IsSUFBSSxXQUFXLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDaEMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztvQkFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO2dCQUM3SSxDQUFDO2dCQUNELHdDQUFjLEdBQWQsVUFBZSxVQUFrQjtvQkFFN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RSxDQUFDO2dCQWhETDtvQkFBQyxpQkFBVSxFQUFFOzttQ0FBQTtnQkFzRGIsc0JBQUM7WUFBRCxDQXJEQSxBQXFEQyxJQUFBO1lBckRELDZDQXFEQyxDQUFBIiwiZmlsZSI6ImFwcC9lbXBsb3llZS9lbXBsb3llZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0VtcGxveWVlfSBmcm9tIFwiLi9lbXBsb3llZVwiO1xuXG5cbi8qKlxuICogcGVvcGxlIHNlcnZpY2VcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVtcGxveWVlU2VydmljZSB7XG4gICAgZW1wbG95ZWVzOiBFbXBsb3llZVtdID0gW107XG4gICAgLy8gICBwZXJzb246IFBlcnNvbiA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7IH1cblxuICAgIGdldEVtcGxveWVlcygpIHtcbiAgICAgICAgLy9yZXR1cm4gYW4gb2JzZXJ2YWJsZVxuICAgICAgICBsZXQgcmVxdWVzdCA9IHRoaXMuX2h0dHAuZ2V0KCcvYXBpL0VtcGxveWVlJyk7XG4gICAgICAgIHJldHVybiByZXF1ZXN0XG4gICAgICAgICAgICAubWFwKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9KS5tYXAoKGVtcGxveWVlczogQXJyYXk8YW55PikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQ6IEFycmF5PEVtcGxveWVlPiA9IFtdO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVtcGxveWVlcykge1xuICAgICAgICAgICAgICAgICAgICBlbXBsb3llZXMuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocClcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRFbXBsb3llZShpZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnL2FwaS9FbXBsb3llZS8nICsgaWQudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIH0pLlxuICAgICAgICAgICAgbWFwKChlbXBsb3llZTogRW1wbG95ZWUpID0+IHsgcmV0dXJuIGVtcGxveWVlOyB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVFbXBsb3llZShlbXBsb3llZTogRW1wbG95ZWUpIHtcbiAgICAgICAgdmFyIHBvc3RIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgcG9zdEhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnB1dCgnL2FwaS9FbXBsb3llZS8nICsgZW1wbG95ZWUuSWQudG9TdHJpbmcoKSwgSlNPTi5zdHJpbmdpZnkoZW1wbG95ZWUpLCB7IGhlYWRlcnM6IHBvc3RIZWFkZXJzIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZUVtcGxveWVlKGVtcGxveWVlOiBFbXBsb3llZSkge1xuICAgICAgICB2YXIgcG9zdEhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBwb3N0SGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2FwaS9FbXBsb3llZS8nLCBKU09OLnN0cmluZ2lmeShlbXBsb3llZSwgT2JqZWN0LmtleXMoZW1wbG95ZWUuY29uc3RydWN0b3IucHJvdG90eXBlKSksIHsgaGVhZGVyczogcG9zdEhlYWRlcnMgfSk7XG4gICAgfVxuICAgIGRlbGV0ZUVtcGxveWVlKGVtcGxveWVlSWQ6IG51bWJlcikge1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSgnL2FwaS9FbXBsb3llZS8nICsgZW1wbG95ZWVJZC50b1N0cmluZygpKTtcbiAgICB9XG5cbiAgICAvL3ByaXZhdGUgX2ZldGNoRmFpbGVkKGVycm9yOiBhbnkpIHtcbiAgICAvLyAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAvLyAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIC8vfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
