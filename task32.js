/*
Get all orders with car and customer details.
Objects: orders, cars, customers
 */

import {cars, orders, customers} from "./objects.js"


  const orderWithDetails = orders.map(order => {
    const car = cars.find(elem => elem.id === order.carId);
    const customer = customers.find(elem => elem.id === order.customerId);
    return {
        ...order,
        car: car,
        customer: customer
    }
    
  })

  console.log(orderWithDetails);