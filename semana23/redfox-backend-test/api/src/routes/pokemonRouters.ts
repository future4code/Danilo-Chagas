import express from 'express'
import readController from '../Controller/ReadConrtoller/ReadController'

export const pokemonRouter = express.Router()

pokemonRouter.get("/", readController.getAllDetails.bind(readController));
pokemonRouter.get("/mainDetails", readController.getMainDetails.bind(readController))