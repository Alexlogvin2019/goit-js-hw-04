"use strict";
// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     discount = value;
//   },
//   showOrders() {
//     return orders;
//   },
//   addOrder(cost, order) {
//     balance -= cost;
//     orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

const silikon = {
  name: "SILIKON",
  age: 34
};
const petya = {
  name: "Petya",
  showName(a,b) {
    console.log(this.name,a,b);
  }
};

petya.showName();
petya.showName.call(silikon, 1,2);
petya.showName.call({name:"HHHHHH"}, 8,8);
petya.showName.apply(silikon, [1,2]);

const dddd = petya.showName.bind({name:'SUPER_NAME'}, 7,8);

dddd();


