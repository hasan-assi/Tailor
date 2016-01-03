System.register(['./home/home.component', './assets/assets.component', "./assets/asset-detail-form.component", "./dashboard/dashboard.component", 'angular2/router'], function(exports_1) {
    var home_component_1, assets_component_1, asset_detail_form_component_1, dashboard_component_1, router_1;
    var Routes, APP_ROUTES;
    return {
        setters:[
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (assets_component_1_1) {
                assets_component_1 = assets_component_1_1;
            },
            function (asset_detail_form_component_1_1) {
                asset_detail_form_component_1 = asset_detail_form_component_1_1;
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
                assetDetail: new router_1.Route({ path: '/asset/:id', name: "AssetDetail", component: asset_detail_form_component_1.AssetDetailFormComponent }),
                assetNew: new router_1.Route({ path: '/asset', name: "AssetDetail", component: asset_detail_form_component_1.AssetDetailFormComponent }),
                home: new router_1.Route({ path: '/home', name: "Home", component: home_component_1.HomeComponent, useAsDefault: true }),
                dashboard: new router_1.Route({ path: "/dashboard", name: "Dashboard", component: dashboard_component_1.DashboardComponent })
            });
            exports_1("APP_ROUTES", APP_ROUTES = Object.keys(Routes).map(function (r) { return Routes[r]; }));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBTVcsTUFBTSxFQVFKLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFSWixvQkFBQSxNQUFNLEdBQUc7Z0JBQ2hCLE1BQU0sRUFBRSxJQUFJLGNBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRSxDQUFDO2dCQUNsRixXQUFXLEVBQUUsSUFBSSxjQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLHNEQUF3QixFQUFFLENBQUM7Z0JBQ3hHLFFBQVEsRUFBRSxJQUFJLGNBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsc0RBQXdCLEVBQUUsQ0FBQztnQkFDakcsSUFBSSxFQUFFLElBQUksY0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDOUYsU0FBUyxFQUFFLElBQUksY0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRSxDQUFDO2FBQ2pHLENBQUEsQ0FBQztZQUVXLHdCQUFBLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBVCxDQUFTLENBQUMsQ0FBQSxDQUFDIiwiZmlsZSI6ImFwcC9yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBc3NldHNDb21wb25lbnQgfSBmcm9tICcuL2Fzc2V0cy9hc3NldHMuY29tcG9uZW50JztcbmltcG9ydCB7IEFzc2V0RGV0YWlsRm9ybUNvbXBvbmVudCB9IGZyb20gXCIuL2Fzc2V0cy9hc3NldC1kZXRhaWwtZm9ybS5jb21wb25lbnRcIjtcbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gXCIuL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVyIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuZXhwb3J0IHZhciBSb3V0ZXMgPSB7XG4gICAgYXNzZXRzOiBuZXcgUm91dGUoeyBwYXRoOiAnL2Fzc2V0cycsIG5hbWU6IFwiQXNzZXRzXCIsIGNvbXBvbmVudDogQXNzZXRzQ29tcG9uZW50IH0pLFxuICAgIGFzc2V0RGV0YWlsOiBuZXcgUm91dGUoeyBwYXRoOiAnL2Fzc2V0LzppZCcsIG5hbWU6IFwiQXNzZXREZXRhaWxcIiwgY29tcG9uZW50OiBBc3NldERldGFpbEZvcm1Db21wb25lbnQgfSksXG4gICAgYXNzZXROZXc6IG5ldyBSb3V0ZSh7IHBhdGg6ICcvYXNzZXQnLCBuYW1lOiBcIkFzc2V0RGV0YWlsXCIsIGNvbXBvbmVudDogQXNzZXREZXRhaWxGb3JtQ29tcG9uZW50IH0pLFxuICAgIGhvbWU6IG5ldyBSb3V0ZSh7IHBhdGg6ICcvaG9tZScsIG5hbWU6IFwiSG9tZVwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9KSxcbiAgICBkYXNoYm9hcmQ6IG5ldyBSb3V0ZSh7IHBhdGg6IFwiL2Rhc2hib2FyZFwiLCBuYW1lOiBcIkRhc2hib2FyZFwiLCBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCB9KVxufTtcblxuZXhwb3J0IGNvbnN0IEFQUF9ST1VURVMgPSBPYmplY3Qua2V5cyhSb3V0ZXMpLm1hcChyID0+IFJvdXRlc1tyXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
