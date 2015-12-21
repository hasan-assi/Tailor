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
                assets: new router_1.Route({ path: '/assets', name: "Assets", component: assets_component_1.AssetsComponent }),
                home: new router_1.Route({ path: '/home', name: "Home", component: home_component_1.HomeComponent, useAsDefault: true }),
                dashboard: new router_1.Route({ path: "/dashboard", name: "Dashboard", component: dashboard_component_1.DashboardComponent })
            });
            exports_1("APP_ROUTES", APP_ROUTES = Object.keys(Routes).map(function (r) { return Routes[r]; }));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBS1csTUFBTSxFQU1KLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7WUFOWixvQkFBQSxNQUFNLEdBQUc7Z0JBQ2hCLE1BQU0sRUFBRSxJQUFJLGNBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBQyxDQUFDO2dCQUNqRixJQUFJLEVBQUUsSUFBSSxjQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUM5RixTQUFTLEVBQUUsSUFBSSxjQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHdDQUFrQixFQUFFLENBQUM7YUFDakcsQ0FBQSxDQUFDO1lBRVcsd0JBQUEsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFULENBQVMsQ0FBQyxDQUFBLENBQUMiLCJmaWxlIjoiYXBwL3JvdXRlcy5jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IEFzc2V0c0NvbXBvbmVudCB9IGZyb20gJy4vYXNzZXRzL2Fzc2V0cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSBcIi4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5leHBvcnQgdmFyIFJvdXRlcyA9IHtcbiAgICBhc3NldHM6IG5ldyBSb3V0ZSh7IHBhdGg6ICcvYXNzZXRzJywgbmFtZTogXCJBc3NldHNcIiwgY29tcG9uZW50OiBBc3NldHNDb21wb25lbnR9KSxcbiAgICBob21lOiBuZXcgUm91dGUoeyBwYXRoOiAnL2hvbWUnLCBuYW1lOiBcIkhvbWVcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LCB1c2VBc0RlZmF1bHQ6IHRydWUgfSksXG4gICAgZGFzaGJvYXJkOiBuZXcgUm91dGUoeyBwYXRoOiBcIi9kYXNoYm9hcmRcIiwgbmFtZTogXCJEYXNoYm9hcmRcIiwgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnQgfSlcbn07XG5cbmV4cG9ydCBjb25zdCBBUFBfUk9VVEVTID0gT2JqZWN0LmtleXMoUm91dGVzKS5tYXAociA9PiBSb3V0ZXNbcl0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
