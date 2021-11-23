import express from 'express'
import deleteController from '../Controller/DeleteController/DeleteController';


export const deleteRouter = express.Router()

deleteRouter.delete("/:name", deleteController.deletePokemon);