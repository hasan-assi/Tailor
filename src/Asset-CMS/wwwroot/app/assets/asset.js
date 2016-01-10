System.register([], function(exports_1) {
    var Asset;
    return {
        setters:[],
        execute: function() {
            Asset = (function () {
                function Asset() {
                    this.blocksPerRow = function (windowWidth) {
                        return Math.floor(windowWidth / 12);
                    };
                    this.Clone = function () {
                        return JSON.parse(JSON.stringify(this));
                    };
                }
                Object.defineProperty(Asset.prototype, "Id", {
                    get: function () {
                        return this._id;
                    },
                    set: function (value) {
                        this._id = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Asset.prototype, "Msn", {
                    get: function () {
                        return this._msn;
                    },
                    set: function (value) {
                        this._msn = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Asset.prototype, "CreationDate", {
                    get: function () {
                        return this._creationDate;
                    },
                    set: function (value) {
                        this._creationDate = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Asset;
            })();
            exports_1("Asset", Asset);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hc3NldHMvYXNzZXQudHMiXSwibmFtZXMiOlsiQXNzZXQiLCJBc3NldC5jb25zdHJ1Y3RvciIsIkFzc2V0LklkIiwiQXNzZXQuTXNuIiwiQXNzZXQuQ3JlYXRpb25EYXRlIl0sIm1hcHBpbmdzIjoiOzs7OztZQUVBO2dCQW9CSUE7b0JBWkFDLGlCQUFZQSxHQUNWQSxVQUFVQSxXQUFXQTt3QkFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDO29CQUN4QyxDQUFDLENBQUNBO29CQUdGQSxVQUFLQSxHQUNIQTt3QkFFRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzVDLENBQUMsQ0FBQUE7Z0JBSURBLENBQUNBO2dCQUVERCxzQkFBSUEscUJBQUVBO3lCQUFOQTt3QkFDSUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7b0JBQ3BCQSxDQUFDQTt5QkFDREYsVUFBT0EsS0FBYUE7d0JBQ2hCRSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDckJBLENBQUNBOzs7bUJBSEFGO2dCQUtEQSxzQkFBSUEsc0JBQUdBO3lCQUFQQTt3QkFDSUcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7b0JBQ3JCQSxDQUFDQTt5QkFDREgsVUFBUUEsS0FBYUE7d0JBQ2pCRyxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDdEJBLENBQUNBOzs7bUJBSEFIO2dCQUtEQSxzQkFBSUEsK0JBQVlBO3lCQUFoQkE7d0JBQ0lJLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBO29CQUM5QkEsQ0FBQ0E7eUJBQ0RKLFVBQWlCQSxLQUFXQTt3QkFDeEJJLElBQUlBLENBQUNBLGFBQWFBLEdBQUVBLEtBQUtBLENBQUNBO29CQUM5QkEsQ0FBQ0E7OzttQkFIQUo7Z0JBS0xBLFlBQUNBO1lBQURBLENBN0NBLEFBNkNDQSxJQUFBO1lBN0NELHlCQTZDQyxDQUFBIiwiZmlsZSI6ImFwcC9hc3NldHMvYXNzZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lNb2RlbCwgTW9kZWxCYXNlfSBmcm9tIFwiLi4vQmFzZS9JTW9kZWxcIjtcblxuZXhwb3J0IGNsYXNzIEFzc2V0IHsvL2V4dGVuZHMgTW9kZWxCYXNlPG51bWJlcj4ge1xuXG4gICAgLy9PcmlnaW46QXNzZXQ7XG5cbiAgICBwcml2YXRlIF9pZDogbnVtYmVyO1xuICAgIHByaXZhdGUgX21zbjogc3RyaW5nO1xuICAgIHByaXZhdGUgX2NyZWF0aW9uRGF0ZTogRGF0ZTtcblxuICAgIGJsb2Nrc1BlclJvdzogKHdpbmRvd1dpZHRoOiBudW1iZXIpID0+IG51bWJlclxuICAgID0gZnVuY3Rpb24gKHdpbmRvd1dpZHRoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHdpbmRvd1dpZHRoIC8gMTIpO1xuICAgIH07XG5cblxuICAgIENsb25lOiAoKSA9PiBBc3NldCAgXG4gICAgPSBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcykpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgIFxuICAgIH1cblxuICAgIGdldCBJZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuICAgIHNldCBJZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gICAgfVxuICAgXG4gICAgZ2V0IE1zbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbXNuO1xuICAgIH1cbiAgICBzZXQgTXNuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbXNuID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IENyZWF0aW9uRGF0ZSgpOiBEYXRlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0aW9uRGF0ZTtcbiAgICB9XG4gICAgc2V0IENyZWF0aW9uRGF0ZSh2YWx1ZTogRGF0ZSl7XG4gICAgICAgIHRoaXMuX2NyZWF0aW9uRGF0ZT0gdmFsdWU7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
