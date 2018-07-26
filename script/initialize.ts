import { HotelController } from './hotelController';
import { HotelModel } from './hotelModel';

const devaltReserveList: string = '[{"id":1,"room":{"id":1,"number":101,' +
    '"type":"lux","price":180},' +
    '"client":{"id":1,"name":"Alex","phone":"+375291122145"},"date-of-arrival":1532421571000,' +
    '"date-of-departure":1532521571000,"price":0},{"id":2,"room":{"id":2,"number":102,' +
    '"type":"lux","price":150},' +
    '"client":{"id":2,"name":"Tom","phone":"+37529222222"},"date-of-arrival":1532421571000,' +
    '"date-of-departure":1532521571000,"price":0},{"id":3,"room":{"id":3,"number":103,' +
    '"type":"standart","price":80},' +
    '"client":{"id":3,"name":"Jon","phone":"+37529333333"},"date-of-arrival":1532421571000,' +
    '"date-of-departure":1532521571000,"price":0},{"id":4,"room":{"id":4,"number":104,' +
    '"type":"standart","price":70},"client":{"id":4,"name":"Casie","phone":"+37529444444"},' +
    '"date-of-arrival":1532421571000,' +
    '"date-of-departure":1532521571000,"price":0},{"id":5,"room":{"id":5,"number":105,' +
    '"type":"standart","price":70},"client":{"id":5,"name":"Alex","phone":"+375291122145"},' +
    '"date-of-arrival":1532421571000,"date-of-departure":1532521571000,"price":0}]';

window.onload = () => {
  // let hotelcontroller = new HotelController(1, 2);
  // hotelcontroller = new HotelController(1, 12);
  const hotelModel = new HotelModel(devaltReserveList);
  const spanEl = document.createElement('div');
  spanEl.innerHTML = JSON.stringify(hotelModel.reserveList);
  document.body.appendChild(spanEl);

}
