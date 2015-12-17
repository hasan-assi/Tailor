System.register(['./home/Home', './assets/assets', 'angular2/router'], function(exports_1) {
    var Home_1, assets_1, router_1;
    var Routes, APP_ROUTES;
    return {
        setters:[
            function (Home_1_1) {
                Home_1 = Home_1_1;
            },
            function (assets_1_1) {
                assets_1 = assets_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            exports_1("Routes", Routes = {
                home: new router_1.Route({ path: '/', name: "Home", component: Home_1.Home }),
                assets: new router_1.Route({ path: '/assets', name: "Assets", component: assets_1.Assets })
            });
            exports_1("APP_ROUTES", APP_ROUTES = Object.keys(Routes).map(function (r) { return Routes[r]; }));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBSVcsTUFBTSxFQUtKLFVBQVU7Ozs7Ozs7Ozs7Ozs7WUFMWixvQkFBQSxNQUFNLEdBQUc7Z0JBQ2xCLElBQUksRUFBRSxJQUFJLGNBQUssQ0FBQyxFQUFJLElBQUksRUFBRSxHQUFHLEVBQVEsSUFBSSxFQUFFLE1BQU0sRUFBSSxTQUFTLEVBQUUsV0FBSSxFQUFDLENBQUM7Z0JBQ3RFLE1BQU0sRUFBRSxJQUFJLGNBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZUFBTSxFQUFFLENBQUM7YUFDMUUsQ0FBQSxDQUFDO1lBRVcsd0JBQUEsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFULENBQVMsQ0FBQyxDQUFBLENBQUMiLCJmaWxlIjoiYXBwL3JvdXRlcy5jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIb21lIH0gZnJvbSAnLi9ob21lL0hvbWUnO1xuaW1wb3J0IHsgQXNzZXRzIH0gZnJvbSAnLi9hc3NldHMvYXNzZXRzJztcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5leHBvcnQgdmFyIFJvdXRlcyA9IHtcbiAgaG9tZTogbmV3IFJvdXRlKHsgICBwYXRoOiAnLycgICAgICAsIG5hbWU6IFwiSG9tZVwiICAsIGNvbXBvbmVudDogSG9tZX0pLFxuICBhc3NldHM6IG5ldyBSb3V0ZSh7IHBhdGg6ICcvYXNzZXRzJywgbmFtZTogXCJBc3NldHNcIiwgY29tcG9uZW50OiBBc3NldHMgfSlcbn07XG5cbmV4cG9ydCBjb25zdCBBUFBfUk9VVEVTID0gT2JqZWN0LmtleXMoUm91dGVzKS5tYXAociA9PiBSb3V0ZXNbcl0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
