// @flow
import { HotelModel } from './hotelModel';
import { HotelView } from './hotelView';

export class HotelController {
  hotelModel: HotelModel;
  hotelView: HotelView;
  constructor(model: HotelModel, view: HotelView) {
    this.hotelModel = model;
    this.hotelView = view;
  }
}
