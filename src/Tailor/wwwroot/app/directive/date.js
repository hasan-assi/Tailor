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
    var MyDate;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyDate = (function () {
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
            exports_1("MyDate", MyDate);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kaXJlY3RpdmUvZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQU1JO29CQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztnQkFDekMsQ0FBQztnQkFQUSxzQkFBSSx3QkFBSTt5QkFBUixVQUFTLENBQU87d0JBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdEMsQ0FBQzs7O21CQUFBO2dCQU9PLDZCQUFZLEdBQXBCLFVBQXFCLElBQVU7b0JBQzNCLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzBCQUMzSCxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELENBQUM7Z0JBRU8sZ0NBQWUsR0FBdkIsVUFBd0IsSUFBWTtvQkFDaEMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUM5QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM1QixJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUVwQyxzRUFBc0U7b0JBQ3RFLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLDJCQUEyQjtnQkFFcEgsQ0FBQztnQkFFTyw2QkFBWSxHQUFwQixVQUFxQixLQUFhO29CQUM5QixFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBR3RCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBRTdDLCtCQUErQjt3QkFDL0IsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOzRCQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDckMsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUM7Z0JBcENEO29CQUFDLFlBQUssRUFBRTs7O2tEQUFBO2dCQUdSO29CQUFDLGFBQU0sRUFBRTs7MERBQUE7Z0JBVmI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsU0FBUzt3QkFDbkIseUJBQXlCO3dCQUN6QixRQUFRLEVBQUUsd0dBQWtHO3FCQUMvRyxDQUFDOzswQkFBQTtnQkF3Q0YsYUFBQztZQUFELENBdkNBLEFBdUNDLElBQUE7WUF2Q0QsMkJBdUNDLENBQUEiLCJmaWxlIjoiYXBwL2RpcmVjdGl2ZS9kYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9odHRwOi8vcGxua3IuY28vZWRpdC9CSzZxNWRUZW5Nd3hTUnEzZjhKWD9wPXByZXZpZXdcbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge05nRm9yLCBOZ01vZGVsfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1kYXRlJyxcbiAgICAvL2V2ZW50czogWydkYXRlQ2hhbmdlJ10sXG4gICAgdGVtcGxhdGU6IGA8aW5wdXQgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCIgW3ZhbHVlXSA9IFwiX2RhdGVcIiAoY2hhbmdlKSA9IFwib25EYXRlQ2hhbmdlKCRldmVudC50YXJnZXQudmFsdWUpXCIgLz5gXG59KVxuZXhwb3J0IGNsYXNzIE15RGF0ZSB7XG4gICAgcHJpdmF0ZSBfZGF0ZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHNldCBkYXRlKGQ6IERhdGUpIHtcbiAgICAgICAgdGhpcy5fZGF0ZSA9IHRoaXMudG9EYXRlU3RyaW5nKGQpO1xuICAgIH1cbiAgICBAT3V0cHV0KCkgZGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLmRhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b0RhdGVTdHJpbmcoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAoZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkgKyAnLScgKyAoXCIwXCIgKyAoZGF0ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKSArICctJyArIChcIjBcIiArIChkYXRlLmdldERhdGUoKSkpLnNsaWNlKC0yKSlcbiAgICAgICAgICAgICsgJ1QnICsgZGF0ZS50b1RpbWVTdHJpbmcoKS5zbGljZSgwLCA1KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBhcnNlRGF0ZVN0cmluZyhkYXRlOiBzdHJpbmcpOiBEYXRlIHtcbiAgICAgICAgZGF0ZSA9IGRhdGUucmVwbGFjZSgnVCcsICctJyk7XG4gICAgICAgIHZhciBwYXJ0cyA9IGRhdGUuc3BsaXQoJy0nKTtcbiAgICAgICAgdmFyIHRpbWVQYXJ0cyA9IHBhcnRzWzNdLnNwbGl0KCc6Jyk7XG4gICAgICAgXG4gICAgICAgIC8vIG5ldyBEYXRlKHllYXIsIG1vbnRoIFssIGRheSBbLCBob3Vyc1ssIG1pbnV0ZXNbLCBzZWNvbmRzWywgbXNdXV1dXSlcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCArcGFydHNbMF0sICtwYXJ0c1sxXSAtIDEsICtwYXJ0c1syXSwgK3RpbWVQYXJ0c1swXSwgK3RpbWVQYXJ0c1sxXSk7IC8vIE5vdGU6IG1vbnRocyBhcmUgMC1iYXNlZFxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRhdGVDaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodmFsdWUgIT0gdGhpcy5fZGF0ZSkge1xuXG5cbiAgICAgICAgICAgIHZhciBwYXJzZWREYXRlID0gdGhpcy5wYXJzZURhdGVTdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBjaGVjayBpZiBkYXRlIGlzIHZhbGlkIGZpcnN0XG4gICAgICAgICAgICBpZiAocGFyc2VkRGF0ZS5nZXRUaW1lKCkgIT0gTmFOKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHBhcnNlZERhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
