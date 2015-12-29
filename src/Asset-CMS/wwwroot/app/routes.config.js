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
                home: new router_1.Route({ path: '/home', name: "Home", component: home_component_1.HomeComponent, useAsDefault: true }),
                dashboard: new router_1.Route({ path: "/dashboard", name: "Dashboard", component: dashboard_component_1.DashboardComponent })
            });
            exports_1("APP_ROUTES", APP_ROUTES = Object.keys(Routes).map(function (r) { return Routes[r]; }));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBTVcsTUFBTSxFQU9KLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFQWixvQkFBQSxNQUFNLEdBQUc7Z0JBQ2hCLE1BQU0sRUFBRSxJQUFJLGNBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRSxDQUFDO2dCQUNsRixXQUFXLEVBQUUsSUFBSSxjQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLHNEQUF3QixFQUFFLENBQUM7Z0JBQ3hHLElBQUksRUFBRSxJQUFJLGNBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQzlGLFNBQVMsRUFBRSxJQUFJLGNBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsd0NBQWtCLEVBQUUsQ0FBQzthQUNqRyxDQUFBLENBQUM7WUFFVyx3QkFBQSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQVQsQ0FBUyxDQUFDLENBQUEsQ0FBQyIsImZpbGUiOiJhcHAvcm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXNzZXRzQ29tcG9uZW50IH0gZnJvbSAnLi9hc3NldHMvYXNzZXRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBc3NldERldGFpbEZvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9hc3NldHMvYXNzZXQtZGV0YWlsLWZvcm0uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tIFwiLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUm91dGUsIFJvdXRlciB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbmV4cG9ydCB2YXIgUm91dGVzID0ge1xuICAgIGFzc2V0czogbmV3IFJvdXRlKHsgcGF0aDogJy9hc3NldHMnLCBuYW1lOiBcIkFzc2V0c1wiLCBjb21wb25lbnQ6IEFzc2V0c0NvbXBvbmVudCB9KSxcbiAgICBhc3NldERldGFpbDogbmV3IFJvdXRlKHsgcGF0aDogJy9hc3NldC86aWQnLCBuYW1lOiBcIkFzc2V0RGV0YWlsXCIsIGNvbXBvbmVudDogQXNzZXREZXRhaWxGb3JtQ29tcG9uZW50IH0pLFxuICAgIGhvbWU6IG5ldyBSb3V0ZSh7IHBhdGg6ICcvaG9tZScsIG5hbWU6IFwiSG9tZVwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9KSxcbiAgICBkYXNoYm9hcmQ6IG5ldyBSb3V0ZSh7IHBhdGg6IFwiL2Rhc2hib2FyZFwiLCBuYW1lOiBcIkRhc2hib2FyZFwiLCBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCB9KVxufTtcblxuZXhwb3J0IGNvbnN0IEFQUF9ST1VURVMgPSBPYmplY3Qua2V5cyhSb3V0ZXMpLm1hcChyID0+IFJvdXRlc1tyXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
