import {HotelController} from "./hotelController";

window.onload = () => {
    alert("hiddd");
    let hotelcontroller = new HotelController(1, 2);
    hotelcontroller = new HotelController(1, 12);
    alert(hotelcontroller);

}
