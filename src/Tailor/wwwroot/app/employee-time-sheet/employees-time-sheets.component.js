System.register(['angular2/core', 'angular2/common', "../employee-time-sheet/employee-time-sheet.service", "../blocks/dialog.service", "../directive/date"], function(exports_1, context_1) {
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
    var core_1, common_1, employee_time_sheet_service_1, dialog_service_1, date_1;
    var EmployeesTimeSheetsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (employee_time_sheet_service_1_1) {
                employee_time_sheet_service_1 = employee_time_sheet_service_1_1;
            },
            function (dialog_service_1_1) {
                dialog_service_1 = dialog_service_1_1;
            },
            function (date_1_1) {
                date_1 = date_1_1;
            }],
        execute: function() {
            EmployeesTimeSheetsComponent = (function () {
                function EmployeesTimeSheetsComponent(_dialogService, _empTimeSheetService, _fb) {
                    this._dialogService = _dialogService;
                    this._empTimeSheetService = _empTimeSheetService;
                    this._fb = _fb;
                    this._form = _fb.group({});
                    this._date = new Date();
                }
                EmployeesTimeSheetsComponent.prototype.ngOnInit = function () {
                    //this._empTimeSheetService.getEmployeesTimeSheets(this._date).subscribe(
                    //    res=> this._employeesTimeSheets = res,
                    //    err => console.log(err)
                    //);
                    this.load();
                };
                EmployeesTimeSheetsComponent.prototype.load = function () {
                    var _this = this;
                    this._empTimeSheetService.getEmployeesTimeSheets(this._date).subscribe(function (res) { return _this._employeesTimeSheets = res; }, function (err) { return console.log(err); });
                };
                EmployeesTimeSheetsComponent.prototype.onSubmit = function () {
                    //let empsTimeSheets: EmployeeTimeSheet[] = [];
                    var _this = this;
                    //for (var i = 0; i < this._employees.length-1; i++) {
                    //    let emp = this._employees[i];
                    //     let empTimeSheet = new EmployeeTimeSheet(0, emp, this._date, +emp.HourPerDay, +emp.HourRate, (+emp.HourPerDay * +emp.HourRate));
                    //    empsTimeSheets.push(empTimeSheet);
                    //}
                    //for (var emp in this._employees.) {
                    //    let e = <Employee>emp;
                    //    console.log(e.HourPerDay);
                    //    //let empTimeSheet = new EmployeeTimeSheet(0, <Employee>emp, this._date, +emp.HourPerDay, +emp.HourRate, (+emp.HourPerDay * +emp.HourRate));
                    //    //empsTimeSheets.push(empTimeSheet);
                    //}
                    this._empTimeSheetService.createEmployeesTimeSheets(this._employeesTimeSheets, this._date).subscribe(function (res) { return _this.load(); });
                };
                EmployeesTimeSheetsComponent.prototype.getDayTimeSheet = function () {
                    this.load();
                };
                EmployeesTimeSheetsComponent.prototype.test = function () {
                    alert(this._date);
                };
                EmployeesTimeSheetsComponent.prototype.checkValue = function (employee) {
                    alert(employee.Checked);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Date)
                ], EmployeesTimeSheetsComponent.prototype, "_date", void 0);
                EmployeesTimeSheetsComponent = __decorate([
                    core_1.Component({
                        selector: 'employees-time-sheets',
                        directives: [date_1.MyDate],
                        template: "\n\uFEFF\n      <div class=\"panel panel-default \">\n          <!-- Default panel contents -->\n          <div class=\"panel-heading\">\n              <!--<input type=\"date\" [(ngModel)] ='_date'/>-->\n              <my-date [(date)]=\"_date\" (dateChange) =\"getDayTimeSheet()\"></my-date>\n       \n          </div>\n\n          <form (ngSubmit)=\"onSubmit()\" #employeeForm=\"ngForm\" *ngIf=\"_employeesTimeSheets\" [ngFormModel]=\"_form\">\n              <!-- Table -->\n              <table class=\"table\">\n                  <thead>\n                  <tr>\n                      <th></th>\n                      <th>Name</th>\n                      <th>Hour Rate</th>\n                      <th>Hour Per Day</th>\n                      <th>Wage</th>\n                      <th></th>\n                  </tr>\n                  </thead>\n                  <tbody *ngFor=\"#employeeTimeSheet of _employeesTimeSheets\">\n                  <tr>\n                      <th scope=\"row\">\n                          <input type=\"checkbox\" [(ngModel)]=\"employeeTimeSheet.Checked\" />\n                      </th>\n                      <td>{{employeeTimeSheet.Employee.FirstName}} {{employeeTimeSheet.Employee.LastName}} </td>\n                      <td><input [disabled] =\"!employeeTimeSheet.Checked\" type=\"number\" [(ngModel)]=\"employeeTimeSheet.HourRate\" /></td>\n                      <td><input [disabled]=\"!employeeTimeSheet.Checked\" type=\"number\" [(ngModel)]=\"employeeTimeSheet.Hours\" /></td>\n                      <td>{{employeeTimeSheet.Hours * employeeTimeSheet.HourRate}}</td>\n                  </tr>\n                  </tbody>\n              </table>\n              <button type=\"submit\" class=\"btn btn-default\"\n                      [disabled]=\"!employeeForm.form.valid\">\n                  Submit\n              </button>\n          </form>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [dialog_service_1.DialogService, employee_time_sheet_service_1.EmployeeTimeSheetService, common_1.FormBuilder])
                ], EmployeesTimeSheetsComponent);
                return EmployeesTimeSheetsComponent;
            }());
            exports_1("EmployeesTimeSheetsComponent", EmployeesTimeSheetsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lbXBsb3llZS10aW1lLXNoZWV0L2VtcGxveWVlcy10aW1lLXNoZWV0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwREE7Z0JBRUksc0NBQW9CLGNBQTZCLEVBQ3JDLG9CQUE4QyxFQUM5QyxHQUFnQjtvQkFGUixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtvQkFDckMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUEwQjtvQkFDOUMsUUFBRyxHQUFILEdBQUcsQ0FBYTtvQkFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBRXRCLENBQUMsQ0FBQztvQkFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQzVCLENBQUM7Z0JBTUQsK0NBQVEsR0FBUjtvQkFDSSx5RUFBeUU7b0JBQ3pFLDRDQUE0QztvQkFDNUMsNkJBQTZCO29CQUM3QixJQUFJO29CQUNKLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDaEIsQ0FBQztnQkFFTywyQ0FBSSxHQUFaO29CQUFBLGlCQUtDO29CQUpHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUNsRSxVQUFBLEdBQUcsSUFBRyxPQUFBLEtBQUksQ0FBQyxvQkFBb0IsR0FBRyxHQUFHLEVBQS9CLENBQStCLEVBQ3JDLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBaEIsQ0FBZ0IsQ0FDMUIsQ0FBQztnQkFDTixDQUFDO2dCQUNELCtDQUFRLEdBQVI7b0JBRUksK0NBQStDO29CQUZuRCxpQkFvQkM7b0JBaEJHLHNEQUFzRDtvQkFDdEQsbUNBQW1DO29CQUNuQyx1SUFBdUk7b0JBQ3ZJLHdDQUF3QztvQkFDeEMsR0FBRztvQkFFSCxxQ0FBcUM7b0JBQ3JDLDRCQUE0QjtvQkFDNUIsZ0NBQWdDO29CQUNoQyxrSkFBa0o7b0JBQ2xKLDBDQUEwQztvQkFDMUMsR0FBRztvQkFFSCxJQUFJLENBQUMsb0JBQW9CLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQ2hHLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FDckIsQ0FBQztnQkFDTixDQUFDO2dCQUNELHNEQUFlLEdBQWY7b0JBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNoQixDQUFDO2dCQUNELDJDQUFJLEdBQUo7b0JBQ0ksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdEIsQ0FBQztnQkFDRCxpREFBVSxHQUFWLFVBQVcsUUFBaUI7b0JBQ3hCLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBaEREO29CQUFDLFlBQUssRUFBRTs7MkVBQUE7Z0JBeERaO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHVCQUF1Qjt3QkFDakMsVUFBVSxFQUFFLENBQUMsYUFBTSxDQUFDO3dCQUNwQixRQUFRLEVBQUUsKzJEQXlDVDtxQkFDQSxDQUFDOztnREFBQTtnQkE0RE4sbUNBQUM7WUFBRCxDQTNEQSxBQTJEQyxJQUFBO1lBM0RELHVFQTJEQyxDQUFBIiwiZmlsZSI6ImFwcC9lbXBsb3llZS10aW1lLXNoZWV0L2VtcGxveWVlcy10aW1lLXNoZWV0cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge05nRm9ybSwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIENvbnRyb2xHcm91cCwgQ29udHJvbH0gICAgZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7Um91dGVQYXJhbXMsIFJvdXRlciwgQ2FuRGVhY3RpdmF0ZSwgQ29tcG9uZW50SW5zdHJ1Y3Rpb259IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1JvdXRlc30gZnJvbSBcIi4uL3JvdXRlcy5jb25maWdcIlxuaW1wb3J0IHtFbXBsb3llZVNlcnZpY2UgfSBmcm9tIFwiLi4vZW1wbG95ZWUvZW1wbG95ZWUuc2VydmljZVwiO1xuaW1wb3J0IHtFbXBsb3llZVRpbWVTaGVldFNlcnZpY2UgfSBmcm9tIFwiLi4vZW1wbG95ZWUtdGltZS1zaGVldC9lbXBsb3llZS10aW1lLXNoZWV0LnNlcnZpY2VcIjtcbmltcG9ydCB7RW1wbG95ZWUgfSBmcm9tIFwiLi4vZW1wbG95ZWUvZW1wbG95ZWVcIjtcbmltcG9ydCB7RW1wbG95ZWVUaW1lU2hlZXQgfSBmcm9tIFwiLi9lbXBsb3llZS10aW1lLXNoZWV0XCI7XG5pbXBvcnQge0RpYWxvZ1NlcnZpY2V9IGZyb20gXCIuLi9ibG9ja3MvZGlhbG9nLnNlcnZpY2VcIlxuaW1wb3J0IHtNeURhdGV9IGZyb20gXCIuLi9kaXJlY3RpdmUvZGF0ZVwiXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdlbXBsb3llZXMtdGltZS1zaGVldHMnLFxuICAgIGRpcmVjdGl2ZXM6IFtNeURhdGVdLFxuICAgIHRlbXBsYXRlOiBgXG7vu79cbiAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0IFwiPlxuICAgICAgICAgIDwhLS0gRGVmYXVsdCBwYW5lbCBjb250ZW50cyAtLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICA8IS0tPGlucHV0IHR5cGU9XCJkYXRlXCIgWyhuZ01vZGVsKV0gPSdfZGF0ZScvPi0tPlxuICAgICAgICAgICAgICA8bXktZGF0ZSBbKGRhdGUpXT1cIl9kYXRlXCIgKGRhdGVDaGFuZ2UpID1cImdldERheVRpbWVTaGVldCgpXCI+PC9teS1kYXRlPlxuICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIiAjZW1wbG95ZWVGb3JtPVwibmdGb3JtXCIgKm5nSWY9XCJfZW1wbG95ZWVzVGltZVNoZWV0c1wiIFtuZ0Zvcm1Nb2RlbF09XCJfZm9ybVwiPlxuICAgICAgICAgICAgICA8IS0tIFRhYmxlIC0tPlxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGg+SG91ciBSYXRlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGg+SG91ciBQZXIgRGF5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGg+V2FnZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgIDx0Ym9keSAqbmdGb3I9XCIjZW1wbG95ZWVUaW1lU2hlZXQgb2YgX2VtcGxveWVlc1RpbWVTaGVldHNcIj5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwiZW1wbG95ZWVUaW1lU2hlZXQuQ2hlY2tlZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tlbXBsb3llZVRpbWVTaGVldC5FbXBsb3llZS5GaXJzdE5hbWV9fSB7e2VtcGxveWVlVGltZVNoZWV0LkVtcGxveWVlLkxhc3ROYW1lfX0gPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IFtkaXNhYmxlZF0gPVwiIWVtcGxveWVlVGltZVNoZWV0LkNoZWNrZWRcIiB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJlbXBsb3llZVRpbWVTaGVldC5Ib3VyUmF0ZVwiIC8+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IFtkaXNhYmxlZF09XCIhZW1wbG95ZWVUaW1lU2hlZXQuQ2hlY2tlZFwiIHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cImVtcGxveWVlVGltZVNoZWV0LkhvdXJzXCIgLz48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e2VtcGxveWVlVGltZVNoZWV0LkhvdXJzICogZW1wbG95ZWVUaW1lU2hlZXQuSG91clJhdGV9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhZW1wbG95ZWVGb3JtLmZvcm0udmFsaWRcIj5cbiAgICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICBgXG4gICAgfSlcbmV4cG9ydCBjbGFzcyBFbXBsb3llZXNUaW1lU2hlZXRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kaWFsb2dTZXJ2aWNlOiBEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9lbXBUaW1lU2hlZXRTZXJ2aWNlOiBFbXBsb3llZVRpbWVTaGVldFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlcikge1xuICAgICAgICB0aGlzLl9mb3JtID0gX2ZiLmdyb3VwKHtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgfVxuICAgIEBJbnB1dCgpIF9kYXRlOiBEYXRlO1xuICAgIHByaXZhdGUgX2VtcGxveWVlc1RpbWVTaGVldHM6IEVtcGxveWVlVGltZVNoZWV0W107XG5cbiAgICBwcml2YXRlIF9mb3JtOiBDb250cm9sR3JvdXA7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy90aGlzLl9lbXBUaW1lU2hlZXRTZXJ2aWNlLmdldEVtcGxveWVlc1RpbWVTaGVldHModGhpcy5fZGF0ZSkuc3Vic2NyaWJlKFxuICAgICAgICAvLyAgICByZXM9PiB0aGlzLl9lbXBsb3llZXNUaW1lU2hlZXRzID0gcmVzLFxuICAgICAgICAvLyAgICBlcnIgPT4gY29uc29sZS5sb2coZXJyKVxuICAgICAgICAvLyk7XG4gICAgICAgIHRoaXMubG9hZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZCgpIHtcbiAgICAgICAgdGhpcy5fZW1wVGltZVNoZWV0U2VydmljZS5nZXRFbXBsb3llZXNUaW1lU2hlZXRzKHRoaXMuX2RhdGUpLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcz0+IHRoaXMuX2VtcGxveWVlc1RpbWVTaGVldHMgPSByZXMsXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coZXJyKVxuICAgICAgICApO1xuICAgIH1cbiAgICBvblN1Ym1pdCgpIHtcblxuICAgICAgICAvL2xldCBlbXBzVGltZVNoZWV0czogRW1wbG95ZWVUaW1lU2hlZXRbXSA9IFtdO1xuXG4gICAgICAgIC8vZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9lbXBsb3llZXMubGVuZ3RoLTE7IGkrKykge1xuICAgICAgICAvLyAgICBsZXQgZW1wID0gdGhpcy5fZW1wbG95ZWVzW2ldO1xuICAgICAgICAvLyAgICAgbGV0IGVtcFRpbWVTaGVldCA9IG5ldyBFbXBsb3llZVRpbWVTaGVldCgwLCBlbXAsIHRoaXMuX2RhdGUsICtlbXAuSG91clBlckRheSwgK2VtcC5Ib3VyUmF0ZSwgKCtlbXAuSG91clBlckRheSAqICtlbXAuSG91clJhdGUpKTtcbiAgICAgICAgLy8gICAgZW1wc1RpbWVTaGVldHMucHVzaChlbXBUaW1lU2hlZXQpO1xuICAgICAgICAvL31cblxuICAgICAgICAvL2ZvciAodmFyIGVtcCBpbiB0aGlzLl9lbXBsb3llZXMuKSB7XG4gICAgICAgIC8vICAgIGxldCBlID0gPEVtcGxveWVlPmVtcDtcbiAgICAgICAgLy8gICAgY29uc29sZS5sb2coZS5Ib3VyUGVyRGF5KTtcbiAgICAgICAgLy8gICAgLy9sZXQgZW1wVGltZVNoZWV0ID0gbmV3IEVtcGxveWVlVGltZVNoZWV0KDAsIDxFbXBsb3llZT5lbXAsIHRoaXMuX2RhdGUsICtlbXAuSG91clBlckRheSwgK2VtcC5Ib3VyUmF0ZSwgKCtlbXAuSG91clBlckRheSAqICtlbXAuSG91clJhdGUpKTtcbiAgICAgICAgLy8gICAgLy9lbXBzVGltZVNoZWV0cy5wdXNoKGVtcFRpbWVTaGVldCk7XG4gICAgICAgIC8vfVxuXG4gICAgICAgIHRoaXMuX2VtcFRpbWVTaGVldFNlcnZpY2UuY3JlYXRlRW1wbG95ZWVzVGltZVNoZWV0cyh0aGlzLl9lbXBsb3llZXNUaW1lU2hlZXRzLCB0aGlzLl9kYXRlKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4gdGhpcy5sb2FkKClcbiAgICAgICAgKTtcbiAgICB9XG4gICAgZ2V0RGF5VGltZVNoZWV0KCkge1xuICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICB9XG4gICAgdGVzdCgpIHtcbiAgICAgICAgYWxlcnQodGhpcy5fZGF0ZSk7XG4gICAgfVxuICAgIGNoZWNrVmFsdWUoZW1wbG95ZWU6RW1wbG95ZWUpIHtcbiAgICAgICAgYWxlcnQoZW1wbG95ZWUuQ2hlY2tlZCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
