function hotelView(model, elements) {
    this._model = model;
    this._elements = elements;

    let tableNode = document.getElementById("reservationTable");
    let tr = document.createElement('tr');
    let cuurentMonth = (new Date).getMonth();
    let cuurentYear = (new Date).getFullYear();
    let dayInMonth = hotelView.getAmountDaysInMonth(cuurentMonth, cuurentYear);
    console.log(tableNode.appendChild());
}

hotelView.prototype = {
    show: function () {
        this.refreshTable();
    },

    refreshTable: function () {
        var list, items, key;
    }
}


hotelView.prototype = function getAmountDaysInMonth (month, year){
    return new Date(year, month, 0).getDate();
}