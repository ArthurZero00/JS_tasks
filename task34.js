/*
Get customers with their total spending.
Objects: customers, orders, cars
 */

 import {orders, customers} from "./objects.js"


  const customerTotalSpent = customers.map(customer => {
    const total = orders.filter(order => order.customerId === customer.id).reduce((acc, order) => {
        return acc + order.totalPrice;
    },0)
return {
    ...customer,
    total
}  

})

  
  console.log(customerTotalSpent)