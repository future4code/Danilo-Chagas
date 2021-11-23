import { Request, Response } from "express";
import ReadBusiness from "../../Business/ReadBusiness/ReadBusiness";
import ReadDatabaseSQL from "../../Data/ReadDatabase/ReadDatabaseSQL";
import CustomError, { ERROR_MESSAGES } from "../../Model/Error/CustomError";
import { REQ_DETAILS_DTO, reqDetailsDTO, pokemonFullDetail, responseResult } from "../../Model/Pokemon";



export class ReadController {

    constructor(businessRead: ReadBusiness) { };


    private mountDTO(req: Request): reqDetailsDTO {

        const queries: any = {}
        let details: any[] = []
        let page: any = 1

        try {
            if (Object.keys(req.query).length) {
                for (let [key, value] of (Object.entries(req.query) as any))
                    /^\[|\]$/.test(value as any) ?
                        queries[key] = (value as any).replace(/^\[|\]$/g, "").split(",") :
                        queries[key] = value
            }

            if (Object.keys(req.body).length) {
                for (let [key, value] of (Object.entries(req.body) as any))
                    key === REQ_DETAILS_DTO.DETAILS && Array.isArray(value as any) && value.length ?
                        details = details.concat(value) :
                        key === REQ_DETAILS_DTO.DETAILS && value.length && details.push(value)
            }

            queries[REQ_DETAILS_DTO.PAGE] && (
                page = queries[REQ_DETAILS_DTO.PAGE],
                delete queries[REQ_DETAILS_DTO.PAGE])

            return { page: page, queries: queries, details: details } as any

        } catch (err) {
            throw err
        }

    };



    public async getAllDetails(req: Request, res: Response): Promise<responseResult | void> {

        try {

            const dto: reqDetailsDTO = await this.mountDTO(req as Request);

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



    public async getMainDetails(req: Request, res: Response): Promise<responseResult | void> {

        try {

            const dto: reqDetailsDTO = await this.mountDTO(req as Request);

            const result = await readBusiness.getMainDetails(dto)

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



    public async getCustomDetails(req: Request, res: Response): Promise<responseResult | void> {

        try {

            if (!req.body) {

                throw new CustomError(406, ERROR_MESSAGES.EMPTY_REQUEST, `is expect a JSON body request`)
            }

            if (!req.body[REQ_DETAILS_DTO.DETAILS] || !req.body[REQ_DETAILS_DTO.DETAILS].length) {
                throw new CustomError(406, ERROR_MESSAGES.INVALID_OPERATION, `'details' key is missing or empty`)
            }

            const dto: reqDetailsDTO = this.mountDTO(req as Request);

            const result = await readBusiness.getCustomDetails(dto);

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
        }
    };



    public async getAvailableDetails(req: Request, res: Response): Promise<responseResult | void> {
        try {

            return res
                .status(200)
                .send(readBusiness.getAvailableDetails())
                .end()

        } catch (error: any) {

            const resultError = new CustomError(error.code, error.message, error.data).mountErrorWithData();

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