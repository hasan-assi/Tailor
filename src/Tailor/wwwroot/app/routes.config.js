System.register(['./home/home.component', "./employee/employees.component", "./employee/employee-detail-form.component", "./employee-time-sheet/employees-time-sheets.component", 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var home_component_1, employees_component_1, employee_detail_form_component_1, employees_time_sheets_component_1, router_1;
    var Routes, APP_ROUTES;
    return {
        setters:[
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (employees_component_1_1) {
                employees_component_1 = employees_component_1_1;
            },
            function (employee_detail_form_component_1_1) {
                employee_detail_form_component_1 = employee_detail_form_component_1_1;
            },
            function (employees_time_sheets_component_1_1) {
                employees_time_sheets_component_1 = employees_time_sheets_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            exports_1("Routes", Routes = {
                employees: new router_1.Route({ path: '/employees', name: "Employees", component: employees_component_1.EmployeesComponent }),
                employeeDetail: new router_1.Route({ path: '/Employee/:id', name: "EmployeeDetail", component: employee_detail_form_component_1.EmployeeDetailFormComponent }),
                employeeNew: new router_1.Route({ path: '/Employee', name: "EmployeeDetail", component: employee_detail_form_component_1.EmployeeDetailFormComponent }),
                employeesTimeSheets: new router_1.Route({ path: '/EmployeesTimeSheets', name: "EmployeesTimeSheets", component: employees_time_sheets_component_1.EmployeesTimeSheetsComponent }),
                home: new router_1.Route({ path: '/home', name: "Home", component: home_component_1.HomeComponent, useAsDefault: true })
            });
            exports_1("APP_ROUTES", APP_ROUTES = Object.keys(Routes).map(function (r) { return Routes[r]; }));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFNVyxNQUFNLEVBUUosVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVJaLG9CQUFBLE1BQU0sR0FBRztnQkFDaEIsU0FBUyxFQUFFLElBQUksY0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRSxDQUFDO2dCQUM5RixjQUFjLEVBQUUsSUFBSSxjQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsNERBQTJCLEVBQUUsQ0FBQztnQkFDcEgsV0FBVyxFQUFFLElBQUksY0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLDREQUEyQixFQUFFLENBQUM7Z0JBQzdHLG1CQUFtQixFQUFFLElBQUksY0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxTQUFTLEVBQUUsOERBQTRCLEVBQUUsQ0FBQztnQkFDdEksSUFBSSxFQUFFLElBQUksY0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUNqRyxDQUFBLENBQUM7WUFFVyx3QkFBQSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQVQsQ0FBUyxDQUFDLENBQUEsQ0FBQyIsImZpbGUiOiJhcHAvcm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRW1wbG95ZWVzQ29tcG9uZW50fSBmcm9tIFwiLi9lbXBsb3llZS9lbXBsb3llZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBFbXBsb3llZURldGFpbEZvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9lbXBsb3llZS9lbXBsb3llZS1kZXRhaWwtZm9ybS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEVtcGxveWVlc1RpbWVTaGVldHNDb21wb25lbnQgfSBmcm9tIFwiLi9lbXBsb3llZS10aW1lLXNoZWV0L2VtcGxveWVlcy10aW1lLXNoZWV0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5leHBvcnQgdmFyIFJvdXRlcyA9IHtcbiAgICBlbXBsb3llZXM6IG5ldyBSb3V0ZSh7IHBhdGg6ICcvZW1wbG95ZWVzJywgbmFtZTogXCJFbXBsb3llZXNcIiwgY29tcG9uZW50OiBFbXBsb3llZXNDb21wb25lbnQgfSksXG4gICAgZW1wbG95ZWVEZXRhaWw6IG5ldyBSb3V0ZSh7IHBhdGg6ICcvRW1wbG95ZWUvOmlkJywgbmFtZTogXCJFbXBsb3llZURldGFpbFwiLCBjb21wb25lbnQ6IEVtcGxveWVlRGV0YWlsRm9ybUNvbXBvbmVudCB9KSxcbiAgICBlbXBsb3llZU5ldzogbmV3IFJvdXRlKHsgcGF0aDogJy9FbXBsb3llZScsIG5hbWU6IFwiRW1wbG95ZWVEZXRhaWxcIiwgY29tcG9uZW50OiBFbXBsb3llZURldGFpbEZvcm1Db21wb25lbnQgfSksXG4gICAgZW1wbG95ZWVzVGltZVNoZWV0czogbmV3IFJvdXRlKHsgcGF0aDogJy9FbXBsb3llZXNUaW1lU2hlZXRzJywgbmFtZTogXCJFbXBsb3llZXNUaW1lU2hlZXRzXCIsIGNvbXBvbmVudDogRW1wbG95ZWVzVGltZVNoZWV0c0NvbXBvbmVudCB9KSxcbiAgICBob21lOiBuZXcgUm91dGUoeyBwYXRoOiAnL2hvbWUnLCBuYW1lOiBcIkhvbWVcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LCB1c2VBc0RlZmF1bHQ6IHRydWUgfSlcbn07XG5cbmV4cG9ydCBjb25zdCBBUFBfUk9VVEVTID0gT2JqZWN0LmtleXMoUm91dGVzKS5tYXAociA9PiBSb3V0ZXNbcl0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
