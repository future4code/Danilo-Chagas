import app from "./app"
import createCharacter from "./endpoints/createCharacter"
import deleteCharacter from "./endpoints/deleteCharacter"
import getAllCharacters from "./endpoints/getAllCharacters"

app.get("/character", getAllCharacters)
app.post("/character", createCharacter)
app.delete("/character/:id", deleteCharacter)

import UserAccount from './entities/UserAccount'
const userAccount = new UserAccount("12345678901","Fulano",27)
userAccount

import Transaction from "./entities/Transaction"
const transaction = new Transaction("2021/08/30",5000,"something")