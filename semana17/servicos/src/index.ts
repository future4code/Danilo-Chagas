import app from "./app"
import createAddress from './endpoints/createAddress'
import {getAddress} from './services/getAddress'
import sendMail from './endpoints/sendMail'

app.post('/users/:id', createAddress)
app.post('/email/new', sendMail)

// getAddress("a09371110").then(console.log)
