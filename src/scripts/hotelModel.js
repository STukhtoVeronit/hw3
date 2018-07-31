// @flow
import Data from '../../hotel-base';
export class HotelModel {
  _reserveList;

  constructor(reserveList: string) {
    if (!localStorage['hotelReserveList']) {
      this._reserveList = Data;
    } else {
      this._reserveList = JSON.parse(localStorage['hotelReserveList']);
    }
  }
  get reserveList() {
    return this._reserveList;
  }
}
