"use strict";
var EmployeeTimeSheet = (function () {
    function EmployeeTimeSheet(Id, Employee, Date, Hours, HourRate, Wage, Checked) {
        this.Id = Id;
        this.Employee = Employee;
        this.Date = Date;
        this.Hours = Hours;
        this.HourRate = HourRate;
        this.Wage = Wage;
        this.Checked = Checked;
    }
    return EmployeeTimeSheet;
}());
exports.EmployeeTimeSheet = EmployeeTimeSheet;
//# sourceMappingURL=employee-time-sheet.js.map