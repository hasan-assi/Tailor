System.register(['./home/home.component', "./employee/employees.component", "./employee/employee-detail-form.component", 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var home_component_1, employees_component_1, employee_detail_form_component_1, router_1;
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
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            exports_1("Routes", Routes = {
                employees: new router_1.Route({ path: '/employees', name: "Employees", component: employees_component_1.EmployeesComponent }),
                employeeDetail: new router_1.Route({ path: '/Employee/:id', name: "EmployeeDetail", component: employee_detail_form_component_1.EmployeeDetailFormComponent }),
                employeeNew: new router_1.Route({ path: '/Employee', name: "EmployeeDetail", component: employee_detail_form_component_1.EmployeeDetailFormComponent }),
                home: new router_1.Route({ path: '/home', name: "Home", component: home_component_1.HomeComponent, useAsDefault: true })
            });
            exports_1("APP_ROUTES", APP_ROUTES = Object.keys(Routes).map(function (r) { return Routes[r]; }));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFLVyxNQUFNLEVBT0osVUFBVTs7Ozs7Ozs7Ozs7Ozs7OztZQVBaLG9CQUFBLE1BQU0sR0FBRztnQkFDaEIsU0FBUyxFQUFFLElBQUksY0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRSxDQUFDO2dCQUM5RixjQUFjLEVBQUUsSUFBSSxjQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsNERBQTJCLEVBQUUsQ0FBQztnQkFDcEgsV0FBVyxFQUFFLElBQUksY0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLDREQUEyQixFQUFFLENBQUM7Z0JBQzdHLElBQUksRUFBRSxJQUFJLGNBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDakcsQ0FBQSxDQUFDO1lBRVcsd0JBQUEsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFULENBQVMsQ0FBQyxDQUFBLENBQUMiLCJmaWxlIjoiYXBwL3JvdXRlcy5jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IEVtcGxveWVlc0NvbXBvbmVudH0gZnJvbSBcIi4vZW1wbG95ZWUvZW1wbG95ZWVzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRW1wbG95ZWVEZXRhaWxGb3JtQ29tcG9uZW50IH0gZnJvbSBcIi4vZW1wbG95ZWUvZW1wbG95ZWUtZGV0YWlsLWZvcm0uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVyIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuZXhwb3J0IHZhciBSb3V0ZXMgPSB7XG4gICAgZW1wbG95ZWVzOiBuZXcgUm91dGUoeyBwYXRoOiAnL2VtcGxveWVlcycsIG5hbWU6IFwiRW1wbG95ZWVzXCIsIGNvbXBvbmVudDogRW1wbG95ZWVzQ29tcG9uZW50IH0pLFxuICAgIGVtcGxveWVlRGV0YWlsOiBuZXcgUm91dGUoeyBwYXRoOiAnL0VtcGxveWVlLzppZCcsIG5hbWU6IFwiRW1wbG95ZWVEZXRhaWxcIiwgY29tcG9uZW50OiBFbXBsb3llZURldGFpbEZvcm1Db21wb25lbnQgfSksXG4gICAgZW1wbG95ZWVOZXc6IG5ldyBSb3V0ZSh7IHBhdGg6ICcvRW1wbG95ZWUnLCBuYW1lOiBcIkVtcGxveWVlRGV0YWlsXCIsIGNvbXBvbmVudDogRW1wbG95ZWVEZXRhaWxGb3JtQ29tcG9uZW50IH0pLFxuICAgIGhvbWU6IG5ldyBSb3V0ZSh7IHBhdGg6ICcvaG9tZScsIG5hbWU6IFwiSG9tZVwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9KVxufTtcblxuZXhwb3J0IGNvbnN0IEFQUF9ST1VURVMgPSBPYmplY3Qua2V5cyhSb3V0ZXMpLm1hcChyID0+IFJvdXRlc1tyXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
