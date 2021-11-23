import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import cors from 'cors'
import { AddressInfo } from 'net';
import { readRouter } from './routes/readRouters';
import { createRouter } from './routes/createRouters';
import { updateRouter } from './routes/updateRouters';

dotenv.config();

const app = express();

app.use(express.json(), cors())

export const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server running at ${address.port}`);
    } else {
        console.error(`Fail to runnning server`);
    }
})

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Hello World")
})

app.use("/api/v0/pokemon", readRouter)
app.use("/api/v0/pokemon/create", createRouter)
app.use("/api/v0/pokemon/update", updateRouter)