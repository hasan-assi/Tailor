System.register(['./home/home.component', './assets/assets.component', 'angular2/router'], function(exports_1) {
    var home_component_1, assets_component_1, router_1;
    var Routes, APP_ROUTES;
    return {
        setters:[
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (assets_component_1_1) {
                assets_component_1 = assets_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            exports_1("Routes", Routes = {
                home: new router_1.Route({ path: '/', name: "Home", component: home_component_1.HomeComponent }),
                assets: new router_1.Route({ path: '/assets', name: "Assets", component: assets_component_1.AssetsComponent })
            });
            exports_1("APP_ROUTES", APP_ROUTES = Object.keys(Routes).map(function (r) { return Routes[r]; }));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBSVcsTUFBTSxFQUtKLFVBQVU7Ozs7Ozs7Ozs7Ozs7WUFMWixvQkFBQSxNQUFNLEdBQUc7Z0JBQ2xCLElBQUksRUFBRSxJQUFJLGNBQUssQ0FBQyxFQUFJLElBQUksRUFBRSxHQUFHLEVBQVEsSUFBSSxFQUFFLE1BQU0sRUFBSSxTQUFTLEVBQUUsOEJBQWEsRUFBQyxDQUFDO2dCQUMvRSxNQUFNLEVBQUUsSUFBSSxjQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUUsQ0FBQzthQUNuRixDQUFBLENBQUM7WUFFVyx3QkFBQSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQVQsQ0FBUyxDQUFDLENBQUEsQ0FBQyIsImZpbGUiOiJhcHAvcm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXNzZXRzQ29tcG9uZW50IH0gZnJvbSAnLi9hc3NldHMvYXNzZXRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVyIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuZXhwb3J0IHZhciBSb3V0ZXMgPSB7XG4gIGhvbWU6IG5ldyBSb3V0ZSh7ICAgcGF0aDogJy8nICAgICAgLCBuYW1lOiBcIkhvbWVcIiAgLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnR9KSxcbiAgYXNzZXRzOiBuZXcgUm91dGUoeyBwYXRoOiAnL2Fzc2V0cycsIG5hbWU6IFwiQXNzZXRzXCIsIGNvbXBvbmVudDogQXNzZXRzQ29tcG9uZW50IH0pXG59O1xuXG5leHBvcnQgY29uc3QgQVBQX1JPVVRFUyA9IE9iamVjdC5rZXlzKFJvdXRlcykubWFwKHIgPT4gUm91dGVzW3JdKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
