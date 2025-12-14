/*
Get payments grouped by payment method.
Objects: payments, orders, customers, cars
*/

import { payments,orders,customers,cars } from "./objects.js";

const groupedPayments = payments.reduce((acc, item) => {
    if(!acc[item.paymentMethod]){
        acc[item.paymentMethod] =[]
        
    }
    acc[item.paymentMethod].push(item)
    return acc;
    }
    
, {})

console.log(groupedPayments)