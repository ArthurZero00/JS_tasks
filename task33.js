/*
 Get orders with payment information.
 Objects: orders, cars, customers, payments
 */

 import {cars, orders, customers, payments} from "./objects.js"


  const orderWithPaymentDetails = orders.map(order => {
    const car = cars.find(elem => elem.id === order.carId);
    const customer = customers.find(elem => elem.id === order.customerId);
    const payment = payments.find(pay => pay.id === order.id);
    return {
        ...order,
        car,
        customer,
        payment
    }
    
  })
  console.log(orderWithPaymentDetails)