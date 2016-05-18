"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//http://plnkr.co/edit/BK6q5dTenMwxSRq3f8JX?p=preview
var core_1 = require('@angular/core');
var MyDate = (function () {
    function MyDate() {
        this.date = new Date();
        this.dateChange = new core_1.EventEmitter();
    }
    Object.defineProperty(MyDate.prototype, "date", {
        set: function (d) {
            this._date = this.toDateString(d);
        },
        enumerable: true,
        configurable: true
    });
    MyDate.prototype.toDateString = function (date) {
        return (date.getFullYear().toString() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + ("0" + (date.getDate())).slice(-2))
            + 'T' + date.toTimeString().slice(0, 5);
    };
    MyDate.prototype.parseDateString = function (date) {
        date = date.replace('T', '-');
        var parts = date.split('-');
        var timeParts = parts[3].split(':');
        // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
        return new Date(+parts[0], +parts[1] - 1, +parts[2], +timeParts[0], +timeParts[1]); // Note: months are 0-based
    };
    MyDate.prototype.onDateChange = function (value) {
        if (value != this._date) {
            var parsedDate = this.parseDateString(value);
            // check if date is valid first
            if (parsedDate.getTime() != NaN) {
                this._date = value;
                this.dateChange.emit(parsedDate);
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Date), 
        __metadata('design:paramtypes', [Date])
    ], MyDate.prototype, "date", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MyDate.prototype, "dateChange", void 0);
    MyDate = __decorate([
        core_1.Component({
            selector: 'my-date',
            //events: ['dateChange'],
            template: "<input type=\"datetime-local\" [value] = \"_date\" (change) = \"onDateChange($event.target.value)\" />"
        }), 
        __metadata('design:paramtypes', [])
    ], MyDate);
    return MyDate;
}());
exports.MyDate = MyDate;
//# sourceMappingURL=date.js.map