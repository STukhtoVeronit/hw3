function hotelView(model, elements) {
    this._model = model;
    this._elements = elements;
    var tableNode = document.getElementById("reservationTable");
    var tr = document.createElement('tr');
    var cuurentMonth = (new Date).getMonth();
    var cuurentYear = (new Date).getFullYear();
    var dayInMonth = hotelView.getAmountDaysInMonth(cuurentMonth, cuurentYear);
    console.log(tableNode.appendChild());
}
hotelView.prototype = {
    show: function () {
        this.refreshTable();
    },
    refreshTable: function () {
        var list, items, key;
    }
};
hotelView.prototype = function getAmountDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
};
