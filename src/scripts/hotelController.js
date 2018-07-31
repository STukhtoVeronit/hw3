// @flow
import { HotelModel } from './hotelModel';
import { HotelView } from './hotelView';

export class HotelController {
  private hotelModel: HotelModel;
  private hotelView: HotelView;
  constructor(model: HotelModel, view: HotelView) {
    this.hotelModel = model;
    this.hotelView = view;
  }
}
