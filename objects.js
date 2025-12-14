const cars = [
    { id: 1, name: "Model S", brand: "Tesla", price: 80000, stock: 5 },
    { id: 2, name: "Corolla", brand: "Toyota", price: 20000, stock: 12 },
    { id: 3, name: "Civic", brand: "Honda", price: 22000, stock: 8 },
    { id: 4, name: "Mustang", brand: "Ford", price: 35000, stock: 3 }
  ];

  const customers = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
    { id: 4, name: "Diana Prince", email: "diana@example.com" }
  ];

  const orders = [
    { id: 1, carId: 1, customerId: 2, quantity: 1, totalPrice: 80000, date: "2025-09-19" },
    { id: 2, carId: 2, customerId: 1, quantity: 2, totalPrice: 40000, date: "2025-09-20" },
    { id: 3, carId: 4, customerId: 4, quantity: 1, totalPrice: 35000, date: "2025-09-21" },
    { id: 4, carId: 3, customerId: 3, quantity: 3, totalPrice: 66000, date: "2025-09-21" }
  ];

  const payments = [
    { id: 1, orderId: 1, amount: 80000, paymentMethod: "credit_card", paymentDate: "2025-09-19" },
    { id: 2, orderId: 2, amount: 40000, paymentMethod: "cash", paymentDate: "2025-09-20" },
    { id: 3, orderId: 3, amount: 35000, paymentMethod: "paypal", paymentDate: "2025-09-21" },
    { id: 4, orderId: 4, amount: 66000, paymentMethod: "credit_card", paymentDate: "2025-09-21" }
  ];

  export  {
        cars,
        customers,
        orders,
        payments
  }