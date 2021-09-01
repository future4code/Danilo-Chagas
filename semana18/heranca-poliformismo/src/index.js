"use strict";
exports.__esModule = true;
var User_1 = require("./entities/User");
var Customer_1 = require("./entities/Customer");
//1
var user = new User_1["default"]("1", "f@email.com", "Fulana", "1234");
console.table({ id: user.getId(), name: user.getName(), email: user.getEmail() });
//2
var customer = new Customer_1["default"]("2", "b@email.com", "Beltrana", "1234", "0".repeat(16));
console.table({ id: customer.getId(), name: customer.getName(), email: customer.getEmail(), cCard: customer.getCreditCard() });
//3
console.table(customer); // é possível imprimir todas informações, incluive password
//4
console.log(customer.introduceYourself());
