import { Request, Response } from "express";
import ReadBusiness from "../../Business/ReadBusiness/ReadBusiness";
import ReadDatabaseSQL from "../../Data/ReadDatabase/ReadDatabaseSQL";
import CustomError from "../../Model/Error/CustomError";
import { ALL_DETAILS_DTO, getAllDetailsDTO, pokemonFullDetail, requestResult } from "../../Model/Pokemon";

export class ReadController {
    constructor(
        businessRead: ReadBusiness
    ) { };


    private mountDTO(reqBody: Request) {

        const queries: any = {}
        let page: any = 1

        try {
            if (Object.keys(reqBody.query).length) {
                for (let [key, value] of Object.entries(reqBody.query))
                    /^\[|\]$/.test(value as any) ?
                        queries[key] = (value as any).replace(/^\[|\]$/g, "").split(",") :
                        queries[key] = value
            }
            queries[ALL_DETAILS_DTO.PAGE] && (
                page = queries[ALL_DETAILS_DTO.PAGE],
                delete queries[ALL_DETAILS_DTO.PAGE])

            return { page: page, queries: queries } as any

        } catch (err) {
            throw err
        }

    };


    public async getAllDetails(req: Request, res: Response): Promise<requestResult | void> {

        try {

            const dto: getAllDetailsDTO = await this.mountDTO(req as Request);

            const result = await readBusiness.getAllDetails(dto)

            return res
                .status(200)
                .send(result)
                .end()

        } catch (error: any) {

            const resultError = new CustomError(error.code, error.message, error.data).mountErrorWithData()

            return res
                .status(resultError.code || 500)
                .send(resultError.message || 'Internal Error')
                .end()
        }
    };



    public async getMainDetails(req: Request, res: Response): Promise<requestResult | void> {

        try {

            const dto: getAllDetailsDTO = await this.mountDTO(req as Request);

            const result = await readBusiness.getAllDetails(dto)

            return res
                .status(200)
                .send(result)
                .end()

        } catch (error: any) {

            const resultError = new CustomError(error.code, error.message, error.data).mountErrorWithData()

            return res
                .status(resultError.code || 500)
                .send(resultError.message || 'Internal Error')
                .end()
        }
    };


}

const readDatabase = new ReadDatabaseSQL()
const readBusiness = new ReadBusiness(readDatabase)
const readController = new ReadController(readBusiness)

export default readController