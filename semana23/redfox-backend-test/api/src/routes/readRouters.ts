import express from 'express'
import readController from '../Controller/ReadConrtoller/ReadController'

export const readRouter = express.Router()

readRouter.get("/", readController.getAllDetails.bind(readController));
readRouter.get("/mainDetails", readController.getMainDetails.bind(readController));
readRouter.get("/customDetails", readController.getCustomDetails.bind(readController));
readRouter.get("/availableDetails", readController.getAvailableDetails.bind(readController))