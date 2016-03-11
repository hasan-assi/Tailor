System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var DialogService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DialogService = (function () {
                function DialogService() {
                }
                DialogService.prototype.confirm = function (message) {
                    return new Promise(function (resolve, reject) {
                        return resolve(window.confirm(message || 'Is it OK?'));
                    });
                };
                ;
                DialogService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DialogService);
                return DialogService;
            }());
            exports_1("DialogService", DialogService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ibG9ja3MvZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFBQTtnQkFLQSxDQUFDO2dCQUpHLCtCQUFPLEdBQVAsVUFBUSxPQUFnQjtvQkFDcEIsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFVLFVBQUMsT0FBTyxFQUFFLE1BQU07d0JBQ3hDLE9BQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLFdBQVcsQ0FBQyxDQUFDO29CQUEvQyxDQUErQyxDQUFDLENBQUM7Z0JBQ3pELENBQUM7O2dCQUxMO29CQUFDLGlCQUFVLEVBQUU7O2lDQUFBO2dCQU1iLG9CQUFDO1lBQUQsQ0FMQSxBQUtDLElBQUE7WUFMRCx5Q0FLQyxDQUFBIiwiZmlsZSI6ImFwcC9ibG9ja3MvZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGlhbG9nU2VydmljZSB7XG4gICAgY29uZmlybShtZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PlxuICAgICAgICAgICAgcmVzb2x2ZSh3aW5kb3cuY29uZmlybShtZXNzYWdlIHx8ICdJcyBpdCBPSz8nKSkpO1xuICAgIH07XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
