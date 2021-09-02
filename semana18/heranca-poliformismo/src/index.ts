import User from './entities/User'
import Customer from './entities/Customer'
import { Client } from './types'

/* H E R A N Ç A */
//1
/*
const user = new User("1","f@email.com","Fulana","1234")

console.table({id: user.getId(),name: user.getName(),email: user.getEmail()})

//2
const customer = new Customer("2","b@email.com","Beltrana","1234","0".repeat(16))
console.table({id: customer.getId(),name: customer.getName(),email: customer.getEmail(), cCard: customer.getCreditCard()})

//3
console.table(customer) // é possível imprimir todas informações, incluive password

//4 e 5
console.log(customer.introduceYourself())
*/

/* P O L I M O R F I S M O */
//1a
const billing: Client = {
    name: "Asdrubal",
    registrationNumber: 123456789,
    consumedEnergy: 169000,
    calculateBill: ():number => {return 2} 
}

console.table(billing)
console.log(billing.calculateBill())

//2a
import Place from './entities/Place'

// const gettingTypeScriptError = new Place()

//2b
import GettingAbstractClass from './entities/GettingAbstractClass'

const usingPlaceClass = new GettingAbstractClass("321")
console.log(usingPlaceClass.getCep())

//3
import Industry from './entities/Industry'
import Residence from './entities/Residence'
import Commerce from './entities/Commerce'

const industryInstance = new Industry(2,'123456')
const residenceInstance = new Residence(3,'123455')
const commerceInstance = new Commerce(0,"123466")

console.table([{
    name: "Industry",
    cep: industryInstance.getCep()
},{
    name: "Residence",
    cep: residenceInstance.getCep()
},{
    name: "Commerce",
    cep: commerceInstance.getCep()
}])

//4
import ResidentialClient from './entities/ResidentialClient'
const instanceOfResidentialClients = new ResidentialClient("Pafuncia", 234,160,12345678901,2,"654321")
console.table(instanceOfResidentialClients)
console.log("getCPF: ",instanceOfResidentialClients.getCPF())
console.log("Bill: ",instanceOfResidentialClients.calculateBill())

//5
import CommercialClient from './entities/CommercialClient'
const instanceOfCommercialClients = new CommercialClient("Bagalu",235,1800,5,"12345678","12.345.678/0001-23")
console.table(instanceOfCommercialClients)
console.log("getCNPJ: ",instanceOfCommercialClients.getCnpj())
console.log("Bill: ",instanceOfCommercialClients.calculateBill())

//6
import IndustrialClient from './entities/IndustrialClient'
const instanceOfIndustrialClient = new IndustrialClient("Vital SA",237,9750,500,"12345677",9876543210)
console.table(instanceOfIndustrialClient)
console.log("getIndustrialRegistry: ",instanceOfIndustrialClient.getIndustrialRegistry())
console.log("Bill: ",instanceOfIndustrialClient.calculateBill())