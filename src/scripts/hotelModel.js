import Data from '../../hotel-base';
/* exported HotelModel */
export default class HotelModel {
  constructor() {
    this.reserveList = Data;
  }

  get reserveList() {
    return this.reserveList;
  }
}
