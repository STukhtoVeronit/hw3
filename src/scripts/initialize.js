
 // import HotelController from './hotelController';
import HotelModel from './hotelModel';

window.onload = () => {
  // let hotelcontroller = new HotelController(1, 2);
  // hotelcontroller = new HotelController(1, 12);
  const hotelModel = new HotelModel();
  const spanEl = document.createElement('div');
  spanEl.innerHTML = JSON.stringify(hotelModel.reserveList);
  // console.dir(`${spanEl}by`);
  document.body.appendChild(spanEl);
};