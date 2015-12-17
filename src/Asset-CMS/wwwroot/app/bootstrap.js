System.register(['angular2/platform/browser', 'angular2/router', 'angular2/common', 'angular2/http', './app', './assets/assets.service'], function(exports_1) {
    var browser_1, router_1, common_1, http_1, app_1, assets_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (assets_service_1_1) {
                assets_service_1 = assets_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.App, [
                router_1.ROUTER_PROVIDERS, router_1.ROUTER_DIRECTIVES,
                http_1.HTTP_BINDINGS,
                common_1.FormBuilder,
                assets_service_1.AssetService
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ib290c3RyYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQSxtQkFBUyxDQUFDLFNBQUcsRUFBRTtnQkFDWCx5QkFBZ0IsRUFBRSwwQkFBaUI7Z0JBQ25DLG9CQUFhO2dCQUNiLG9CQUFXO2dCQUNYLDZCQUFZO2FBQ1gsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC9ib290c3RyYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge1JPVVRFUl9QUk9WSURFUlMsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtGb3JtQnVpbGRlcn0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7IEh0dHAsIEhUVFBfQklORElOR1MgfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vYXBwJztcbmltcG9ydCB7IEFzc2V0U2VydmljZSB9IGZyb20gJy4vYXNzZXRzL2Fzc2V0cy5zZXJ2aWNlJ1xuXG5ib290c3RyYXAoQXBwLCBbXG4gICAgUk9VVEVSX1BST1ZJREVSUywgUk9VVEVSX0RJUkVDVElWRVMsXG4gICAgSFRUUF9CSU5ESU5HUyxcbiAgICBGb3JtQnVpbGRlcixcbiAgICBBc3NldFNlcnZpY2VcbiAgICBdKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
