import app from "./app"
import createCharacter from "./endpoints/createCharacter"
import deleteCharacter from "./endpoints/deleteCharacter"
import getAllCharacters from "./endpoints/getAllCharacters"

app.get("/character", getAllCharacters)
app.post("/character", createCharacter)
app.delete("/character/:id", deleteCharacter)

//1) a b c 
import UserAccount from './entities/UserAccount'
const userAccount = new UserAccount("12345678901","Fulano",27)

//2)
import Transaction from "./entities/Transaction"
const transaction = new Transaction("2021/08/30",5000,"something")
const transaction2 = new Transaction("2021/08/31",7500,"another something")
userAccount.setTransactions(transaction)
userAccount.setTransactions(transaction2)
console.log(userAccount)

//3)
import Bank from './entities/Bank'

const userAccount1 = new UserAccount("12345678902","Beltrano",18)

const userAccount2 = new UserAccount("12345678903","Ciclana",31)

const danilosCorporation = new Bank([userAccount,userAccount1,userAccount2])

console.table(danilosCorporation.getUserAccount("Fulano"),["name","age","cpf"]) // user account
console.table(danilosCorporation.getUserTransactions("Fulano")) //user transactions