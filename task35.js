/*
Get cars that have never been ordered.
Objects: cars, orders
 */

import { orders, cars } from "./objects.js";

const carsNotSold = cars.filter(car => {
  return !orders.some(order => order.carId === car.id) ;
});

console.log(carsNotSold);