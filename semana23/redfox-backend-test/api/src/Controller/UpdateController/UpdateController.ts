import { Request, Response } from "express";
import UpdateBusiness from "../../Business/UpdateBusiness/UpdateBusiness";
import UpdateDatabaseSQL from "../../Data/UpdateDatabase/UpdateDatabaseSQL";
import CustomError from "../../Model/Error/CustomError";
import { POKEMON_KEY } from "../../Model/Pokemon";

export class UpdateController {

    constructor(updateBusiness: UpdateBusiness) { };

    public async updatePokemon(req: Request, res: Response): Promise<any | void> {

        try {

            const result = await updateBusiness.updatePokemon(req.body, req.params[POKEMON_KEY.NAME])

            return res
                .status(201)
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


const updateDatabase = new UpdateDatabaseSQL()
const updateBusiness = new UpdateBusiness(updateDatabase)
const updateController = new UpdateController(updateBusiness)

export default updateController