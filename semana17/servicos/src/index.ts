import app from "./app"
import createAddress from './endpoints/createAddress'
import {getAddress} from './services/getAddress'

app.post('/address/new', createAddress)

// getAddress("a09371110").then(console.log)
