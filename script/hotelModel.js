"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HotelModel = /** @class */ (function () {
    function HotelModel(reserveList) {
        this._reserveList = [];
        if (!localStorage['hotelReserveList']) {
            this._reserveList = JSON.parse(reserveList);
        }
        else {
            this._reserveList = JSON.parse(localStorage['hotelReserveList']);
        }
    }
    Object.defineProperty(HotelModel.prototype, "reserveList", {
        get: function () {
            return this.reserveList;
        },
        enumerable: true,
        configurable: true
    });
    return HotelModel;
}());
exports.HotelModel = HotelModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90ZWxNb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvdGVsTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUdFLG9CQUFZLFdBQW1CO1FBRnZCLGlCQUFZLEdBQWEsRUFBRSxDQUFDO1FBR2xDLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1NBQ2xFO0lBQ0gsQ0FBQztJQUNELHNCQUFJLG1DQUFXO2FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFDSCxpQkFBQztBQUFELENBQUMsQUFiRCxJQWFDO0FBYlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSG90ZWxNb2RlbCB7XHJcbiAgcHJpdmF0ZSBfcmVzZXJ2ZUxpc3Q6IG9iamVjdFtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHJlc2VydmVMaXN0OiBzdHJpbmcpIHtcclxuICAgIGlmICghbG9jYWxTdG9yYWdlWydob3RlbFJlc2VydmVMaXN0J10pIHtcclxuICAgICAgdGhpcy5fcmVzZXJ2ZUxpc3QgPSBKU09OLnBhcnNlKHJlc2VydmVMaXN0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3Jlc2VydmVMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbJ2hvdGVsUmVzZXJ2ZUxpc3QnXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldCByZXNlcnZlTGlzdCgpOiBvYmplY3RbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXNlcnZlTGlzdDtcclxuICB9XHJcbn1cclxuIl19