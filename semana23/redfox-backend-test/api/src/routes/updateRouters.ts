import express from 'express'
import updateController from '../Controller/UpdateController/UpdateController';


export const updateRouter = express.Router()

updateRouter.put("/:name", updateController.updatePokemon);