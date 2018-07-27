"use strict";
var EventObserve = /** @class */ (function () {
    function EventObserve(sender) {
        this._listeners = [];
        this._sender = sender;
    }
    Object.defineProperty(EventObserve.prototype, "sender", {
        get: function () {
            return this._sender;
        },
        set: function (sender) {
            this._sender = sender;
        },
        enumerable: true,
        configurable: true
    });
    EventObserve.prototype.attach = function (listener) {
        this._listeners.push();
    };
    EventObserve.prototype.notify = function (args) {
        var _this = this;
        this._listeners.forEach(function (listener) {
            listener(_this.sender, args);
            alert(listener);
        });
    };
    return EventObserve;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFJRSxzQkFBWSxNQUFjO1FBRmxCLGVBQVUsR0FBd0MsRUFBRSxDQUFDO1FBRzNELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxzQkFBSSxnQ0FBTTthQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7YUFDRCxVQUFXLE1BQWE7WUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDeEIsQ0FBQzs7O09BSEE7SUFJRCw2QkFBTSxHQUFOLFVBQVEsUUFBbUI7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsNkJBQU0sR0FBTixVQUFRLElBQVE7UUFBaEIsaUJBS0M7UUFKQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7WUFDL0IsUUFBUSxDQUFDLEtBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDNUIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEV2ZW50T2JzZXJ2ZSB7XHJcbiAgcHJpdmF0ZSBfc2VuZGVyOiBvYmplY3Q7XHJcbiAgcHJpdmF0ZSBfbGlzdGVuZXJzOiB7ICh4Om9iamVjdCwgYXJnczphbnlbXSk6IHZvaWQ7IH1bXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihzZW5kZXI6IG9iamVjdCkge1xyXG4gICAgdGhpcy5fc2VuZGVyID0gc2VuZGVyO1xyXG4gIH1cclxuICBnZXQgc2VuZGVyKCk6IG9iamVjdCB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VuZGVyO1xyXG4gIH1cclxuICBzZXQgc2VuZGVyKHNlbmRlcjpvYmplY3QpIHtcclxuICAgIHRoaXMuX3NlbmRlciA9IHNlbmRlcjtcclxuICB9XHJcbiAgYXR0YWNoIChsaXN0ZW5lcjooKSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLl9saXN0ZW5lcnMucHVzaCgpO1xyXG4gIH1cclxuICBub3RpZnkgKGFyZ3M6YW55KSB7XHJcbiAgICB0aGlzLl9saXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcclxuICAgICAgbGlzdGVuZXIodGhpcy5zZW5kZXIsIGFyZ3MpO1xyXG4gICAgICBhbGVydChsaXN0ZW5lcik7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19