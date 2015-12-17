System.register(['angular2/platform/browser', 'angular2/router', 'angular2/common', 'angular2/http', './app.component', './assets/asset.service'], function(exports_1) {
    var browser_1, router_1, common_1, http_1, app_component_1, asset_service_1;
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
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (asset_service_1_1) {
                asset_service_1 = asset_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS, router_1.ROUTER_DIRECTIVES,
                http_1.HTTP_BINDINGS,
                common_1.FormBuilder,
                asset_service_1.AssetService
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ib290c3RyYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQSxtQkFBUyxDQUFDLDRCQUFZLEVBQUU7Z0JBQ3BCLHlCQUFnQixFQUFFLDBCQUFpQjtnQkFDbkMsb0JBQWE7Z0JBQ2Isb0JBQVc7Z0JBQ1gsNEJBQVk7YUFDWCxDQUFDLENBQUMiLCJmaWxlIjoiYXBwL2Jvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7Uk9VVEVSX1BST1ZJREVSUywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0Zvcm1CdWlsZGVyfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHsgSHR0cCwgSFRUUF9CSU5ESU5HUyB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEFzc2V0U2VydmljZSB9IGZyb20gJy4vYXNzZXRzL2Fzc2V0LnNlcnZpY2UnXG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQsIFtcbiAgICBST1VURVJfUFJPVklERVJTLCBST1VURVJfRElSRUNUSVZFUyxcbiAgICBIVFRQX0JJTkRJTkdTLFxuICAgIEZvcm1CdWlsZGVyLFxuICAgIEFzc2V0U2VydmljZVxuICAgIF0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
