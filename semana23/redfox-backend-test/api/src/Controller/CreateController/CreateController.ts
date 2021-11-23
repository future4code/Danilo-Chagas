import { Request, Response } from "express";
import CreateBusiness from "../../Business/CreateBusiness/CreateBusiness";
import CreateDatabaseSQL from "../../Data/CreateDatabase/CreateDatabaseSQL";
import CustomError from "../../Model/Error/CustomError";

export class CreateController {

    constructor(createBusiness: CreateBusiness) { };

    public async postNewPokemon(req: Request, res: Response): Promise<any | void> {

        try {

            const result = await createBusiness.createPokemon(req.body)

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


const createDatabase = new CreateDatabaseSQL()
const createBusiness = new CreateBusiness(createDatabase)
const createController = new CreateController(createBusiness)

export default createController