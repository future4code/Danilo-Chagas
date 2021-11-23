import { Request, Response } from "express";
import DeleteBusiness from "../../Business/DeleteBusiness/DeleteBusiness";
import DeleteDatabaseSQL from "../../Data/DeleteDatabase/DeleteDatabaseSQL";
import CustomError from "../../Model/Error/CustomError";
import { POKEMON_KEY } from "../../Model/Pokemon";

export class DeleteController {

    constructor(updateBusiness: DeleteBusiness) { };

    public async deletePokemon(req: Request, res: Response): Promise<any | void> {

        try {

            const result = await deleteBusiness.deletePokemon(req.params[POKEMON_KEY.NAME])

            return res
                .status(200)
                .send(result)
                .end()

        } catch (error: any) {

            const resultError = new CustomError(error.code, error.message, error.data).mountErrorWithData();

            return res
                .status(resultError.code || 500)
                .send(resultError.message || 'Internal Error')
                .end()
        };
    };
};


const deleteDatabase = new DeleteDatabaseSQL()
const deleteBusiness = new DeleteBusiness(deleteDatabase)
const deleteController = new DeleteController(deleteBusiness)

export default deleteController