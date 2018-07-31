// @flow
export class HotelModel {
  private _reserveList: object[] = [];

  constructor(reserveList: string) {
    if (!localStorage['hotelReserveList']) {
      this._reserveList = JSON.parse(reserveList);
    } else {
      this._reserveList = JSON.parse(localStorage['hotelReserveList']);
    }
  }
  get reserveList(): object[] {
    return this.reserveList;
  }
}
