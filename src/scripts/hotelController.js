// @flow
export { default as HotelModel } from './hotelModel';
export { default as HotelView } from './hotelView';

class HotelController {
  hotelModel: HotelModel;

  hotelView: HotelView;

  constructor(model: HotelModel, view: HotelView) {
    this.hotelModel = model;
    this.hotelView = view;
  }
}
export { HotelController as default };

