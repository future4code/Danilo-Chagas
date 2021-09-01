import User from './entities/User'
import Customer from './entities/Customer'
//1

const user = new User("1","f@email.com","Fulana","1234")

console.table({id: user.getId(),name: user.getName(),email: user.getEmail()})

//2
const customer = new Customer("2","b@email.com","Beltrana","1234","0".repeat(16))
console.table({id: customer.getId(),name: customer.getName(),email: customer.getEmail(), cCard: customer.getCreditCard()})

//3
console.table(customer) // é possível imprimir todas informações, incluive password

//4 e 5
console.log(customer.introduceYourself())