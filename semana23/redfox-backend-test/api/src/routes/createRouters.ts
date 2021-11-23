import express from 'express'
import createController from '../Controller/CreateController/CreateController';


export const createRouter = express.Router()

createRouter.post("/", createController.postNewPokemon);