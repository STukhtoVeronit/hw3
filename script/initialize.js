"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hotelModel_1 = require("./hotelModel");
var devaltReserveList = '[{"id":1,"room":{"id":1,"number":101,' +
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
window.onload = function () {
    // let hotelcontroller = new HotelController(1, 2);
    // hotelcontroller = new HotelController(1, 12);
    var hotelModel = new hotelModel_1.HotelModel(devaltReserveList);
    var spanEl = document.createElement('div');
    spanEl.innerHTML = JSON.stringify(hotelModel.reserveList);
    document.body.appendChild(spanEl);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbGl6ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluaXRpYWxpemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyQ0FBMEM7QUFFMUMsSUFBTSxpQkFBaUIsR0FBVyx1Q0FBdUM7SUFDckUsNEJBQTRCO0lBQzVCLDBGQUEwRjtJQUMxRixtRkFBbUY7SUFDbkYsNEJBQTRCO0lBQzVCLHdGQUF3RjtJQUN4RixtRkFBbUY7SUFDbkYsZ0NBQWdDO0lBQ2hDLHdGQUF3RjtJQUN4RixtRkFBbUY7SUFDbkYsd0ZBQXdGO0lBQ3hGLGtDQUFrQztJQUNsQyxtRkFBbUY7SUFDbkYsd0ZBQXdGO0lBQ3hGLCtFQUErRSxDQUFDO0FBRXBGLE1BQU0sQ0FBQyxNQUFNLEdBQUc7SUFDZCxtREFBbUQ7SUFDbkQsZ0RBQWdEO0lBQ2hELElBQU0sVUFBVSxHQUFHLElBQUksdUJBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3JELElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUVwQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIb3RlbENvbnRyb2xsZXIgfSBmcm9tICcuL2hvdGVsQ29udHJvbGxlcic7XG5pbXBvcnQgeyBIb3RlbE1vZGVsIH0gZnJvbSAnLi9ob3RlbE1vZGVsJztcblxuY29uc3QgZGV2YWx0UmVzZXJ2ZUxpc3Q6IHN0cmluZyA9ICdbe1wiaWRcIjoxLFwicm9vbVwiOntcImlkXCI6MSxcIm51bWJlclwiOjEwMSwnICtcbiAgICAnXCJ0eXBlXCI6XCJsdXhcIixcInByaWNlXCI6MTgwfSwnICtcbiAgICAnXCJjbGllbnRcIjp7XCJpZFwiOjEsXCJuYW1lXCI6XCJBbGV4XCIsXCJwaG9uZVwiOlwiKzM3NTI5MTEyMjE0NVwifSxcImRhdGUtb2YtYXJyaXZhbFwiOjE1MzI0MjE1NzEwMDAsJyArXG4gICAgJ1wiZGF0ZS1vZi1kZXBhcnR1cmVcIjoxNTMyNTIxNTcxMDAwLFwicHJpY2VcIjowfSx7XCJpZFwiOjIsXCJyb29tXCI6e1wiaWRcIjoyLFwibnVtYmVyXCI6MTAyLCcgK1xuICAgICdcInR5cGVcIjpcImx1eFwiLFwicHJpY2VcIjoxNTB9LCcgK1xuICAgICdcImNsaWVudFwiOntcImlkXCI6MixcIm5hbWVcIjpcIlRvbVwiLFwicGhvbmVcIjpcIiszNzUyOTIyMjIyMlwifSxcImRhdGUtb2YtYXJyaXZhbFwiOjE1MzI0MjE1NzEwMDAsJyArXG4gICAgJ1wiZGF0ZS1vZi1kZXBhcnR1cmVcIjoxNTMyNTIxNTcxMDAwLFwicHJpY2VcIjowfSx7XCJpZFwiOjMsXCJyb29tXCI6e1wiaWRcIjozLFwibnVtYmVyXCI6MTAzLCcgK1xuICAgICdcInR5cGVcIjpcInN0YW5kYXJ0XCIsXCJwcmljZVwiOjgwfSwnICtcbiAgICAnXCJjbGllbnRcIjp7XCJpZFwiOjMsXCJuYW1lXCI6XCJKb25cIixcInBob25lXCI6XCIrMzc1MjkzMzMzMzNcIn0sXCJkYXRlLW9mLWFycml2YWxcIjoxNTMyNDIxNTcxMDAwLCcgK1xuICAgICdcImRhdGUtb2YtZGVwYXJ0dXJlXCI6MTUzMjUyMTU3MTAwMCxcInByaWNlXCI6MH0se1wiaWRcIjo0LFwicm9vbVwiOntcImlkXCI6NCxcIm51bWJlclwiOjEwNCwnICtcbiAgICAnXCJ0eXBlXCI6XCJzdGFuZGFydFwiLFwicHJpY2VcIjo3MH0sXCJjbGllbnRcIjp7XCJpZFwiOjQsXCJuYW1lXCI6XCJDYXNpZVwiLFwicGhvbmVcIjpcIiszNzUyOTQ0NDQ0NFwifSwnICtcbiAgICAnXCJkYXRlLW9mLWFycml2YWxcIjoxNTMyNDIxNTcxMDAwLCcgK1xuICAgICdcImRhdGUtb2YtZGVwYXJ0dXJlXCI6MTUzMjUyMTU3MTAwMCxcInByaWNlXCI6MH0se1wiaWRcIjo1LFwicm9vbVwiOntcImlkXCI6NSxcIm51bWJlclwiOjEwNSwnICtcbiAgICAnXCJ0eXBlXCI6XCJzdGFuZGFydFwiLFwicHJpY2VcIjo3MH0sXCJjbGllbnRcIjp7XCJpZFwiOjUsXCJuYW1lXCI6XCJBbGV4XCIsXCJwaG9uZVwiOlwiKzM3NTI5MTEyMjE0NVwifSwnICtcbiAgICAnXCJkYXRlLW9mLWFycml2YWxcIjoxNTMyNDIxNTcxMDAwLFwiZGF0ZS1vZi1kZXBhcnR1cmVcIjoxNTMyNTIxNTcxMDAwLFwicHJpY2VcIjowfV0nO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAvLyBsZXQgaG90ZWxjb250cm9sbGVyID0gbmV3IEhvdGVsQ29udHJvbGxlcigxLCAyKTtcbiAgLy8gaG90ZWxjb250cm9sbGVyID0gbmV3IEhvdGVsQ29udHJvbGxlcigxLCAxMik7XG4gIGNvbnN0IGhvdGVsTW9kZWwgPSBuZXcgSG90ZWxNb2RlbChkZXZhbHRSZXNlcnZlTGlzdCk7XG4gIGNvbnN0IHNwYW5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzcGFuRWwuaW5uZXJIVE1MID0gSlNPTi5zdHJpbmdpZnkoaG90ZWxNb2RlbC5yZXNlcnZlTGlzdCk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3BhbkVsKTtcblxufVxuIl19