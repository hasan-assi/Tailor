System.register(['./home/home.component', './assets/assets.component', "./dashboard/dashboard.component", 'angular2/router'], function(exports_1) {
    var home_component_1, assets_component_1, dashboard_component_1, router_1;
    var Routes, APP_ROUTES;
    return {
        setters:[
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (assets_component_1_1) {
                assets_component_1 = assets_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            exports_1("Routes", Routes = {
                home: new router_1.Route({ path: '/', name: "Home", component: home_component_1.HomeComponent }),
                assets: new router_1.Route({ path: '/assets', name: "Assets", component: assets_component_1.AssetsComponent }),
                dashboard: new router_1.Route({ path: "/dashboard", name: "Dashboard", component: dashboard_component_1.DashboardComponent })
            });
            exports_1("APP_ROUTES", APP_ROUTES = Object.keys(Routes).map(function (r) { return Routes[r]; }));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBS1csTUFBTSxFQU1KLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7WUFOWixvQkFBQSxNQUFNLEdBQUc7Z0JBQ2hCLElBQUksRUFBRSxJQUFJLGNBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRSxDQUFDO2dCQUN0RSxNQUFNLEVBQUUsSUFBSSxjQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUUsQ0FBQztnQkFDbEYsU0FBUyxFQUFFLElBQUksY0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRSxDQUFDO2FBQ2pHLENBQUEsQ0FBQztZQUVXLHdCQUFBLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBVCxDQUFTLENBQUMsQ0FBQSxDQUFDIiwiZmlsZSI6ImFwcC9yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBc3NldHNDb21wb25lbnQgfSBmcm9tICcuL2Fzc2V0cy9hc3NldHMuY29tcG9uZW50JztcbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gXCIuL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVyIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuZXhwb3J0IHZhciBSb3V0ZXMgPSB7XG4gICAgaG9tZTogbmV3IFJvdXRlKHsgcGF0aDogJy8nLCBuYW1lOiBcIkhvbWVcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0pLFxuICAgIGFzc2V0czogbmV3IFJvdXRlKHsgcGF0aDogJy9hc3NldHMnLCBuYW1lOiBcIkFzc2V0c1wiLCBjb21wb25lbnQ6IEFzc2V0c0NvbXBvbmVudCB9KSxcbiAgICBkYXNoYm9hcmQ6IG5ldyBSb3V0ZSh7IHBhdGg6IFwiL2Rhc2hib2FyZFwiLCBuYW1lOiBcIkRhc2hib2FyZFwiLCBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCB9KVxufTtcblxuZXhwb3J0IGNvbnN0IEFQUF9ST1VURVMgPSBPYmplY3Qua2V5cyhSb3V0ZXMpLm1hcChyID0+IFJvdXRlc1tyXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
