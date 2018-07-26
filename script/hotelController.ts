import { HotelModel } from './hotelModel';
import { HotelView } from './HotelView';

export class HotelController {
  private hotelModel: HotelModel;
  private hotelView: HotelView;
  constructor(model: HotelModel, view: HotelView) {
    this.hotelModel = model;
    this.hotelView = view;
  }
}
