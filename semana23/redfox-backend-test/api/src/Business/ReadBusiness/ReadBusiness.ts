import CustomError, { ERROR_MESSAGES } from "../../Model/Error/CustomError";
import { REQ_DETAILS_DTO, databaseQueryRequestDTO, reqDetailsDTO, pokemonFullDetail, POKEMON_KEY, responseResult } from "../../Model/Pokemon";
import CRUDRepository from "./ReadRepository";




export default class ReadBusiness {

    constructor(private database: CRUDRepository) { }



    private pagination(
        pageNumber: number, limitPerView: number) {

        const offset = limitPerView * (!pageNumber || pageNumber < 2 ? 0 : pageNumber - 1)

        return { limit: limitPerView, offset: offset }

    }



    private isValidyKey(
        keysToCheck: string[], modelKeys: string[]): boolean {
        return keysToCheck.map((item: any) =>
            modelKeys.includes(item))
            .every(((item: any) => item))
    }



    private invalidKeysToArray(
        keysToCheck: string[], modelKeys: string[]) {
        return keysToCheck.filter((item: string) =>
            !modelKeys.includes(item))
    }



    private mountDTO(
        dto: any) {

        //to do: advanced validations (values)
        if (!Object.keys(dto).length) {
            throw new CustomError(400, ERROR_MESSAGES.EMPTY_REQUEST)
        }


        const dtoKeys = Object.keys(dto)
        const dtoKeysModel = Object.values(REQ_DETAILS_DTO)

        if (!this.isValidyKey(dtoKeys, dtoKeysModel)) {
            const invalidKeys: string[] = this.invalidKeysToArray(dtoKeys, dtoKeysModel)
            const errorData = `needed keys: ${invalidKeys
                .map(item => `#${item}`)}`

            throw new CustomError(400, ERROR_MESSAGES.INVALID_KEYS, errorData)
        }


        const dtoQueryKeys = Object.keys(dto[REQ_DETAILS_DTO.QUEIRES])
        const dtoQueryModel = Object.values(POKEMON_KEY)

        if (!this.isValidyKey(dtoQueryKeys, dtoQueryModel)) {
            const invalidKeys: string[] = this.invalidKeysToArray(dtoQueryKeys, dtoQueryModel)
            const errorData = `invalid keys: ${invalidKeys
                .map(item => `#${item}`)}`

            throw new CustomError(400, ERROR_MESSAGES.INVALID_KEYS, errorData)
        }

        const page = dto[REQ_DETAILS_DTO.PAGE] ?? 1
        const pagination = this.pagination(page, 10)

        const queryRequestDTO: databaseQueryRequestDTO = {
            ...pagination,
            queries: dto[REQ_DETAILS_DTO.QUEIRES]
        }

        return queryRequestDTO
    }



    public async getAllDetails(
        dto: reqDetailsDTO
    ): Promise<responseResult | void> {

        try {

            const queryRequestDTO: databaseQueryRequestDTO = this.mountDTO(dto)

            const databaseResult = await this.database.getAllDetails(queryRequestDTO)

            const result: responseResult = responseResult.toResponseOutputModel(
                `Successful request`,
                databaseResult
            )

            return result

        } catch (error: any) {

            const errCode = error.sqlMessage ? 500 : error.code ?? error.message.includes("is not permitted") ? 406 : 500
            const errMessage = error.sqlMessage ? 'Internal Error' : error.message
            const resultError = new CustomError(errCode, errMessage, error.data ?? null)

            throw resultError

        }


    }



    public async getMainDetails(
        dto: reqDetailsDTO
    ): Promise<responseResult | void> {

        try {

            const queryRequestDTO: databaseQueryRequestDTO = this.mountDTO(dto)

            const mainDetails: POKEMON_KEY[] = [
                POKEMON_KEY.NAME,
                POKEMON_KEY.POKEDEX_NUMBER,
                POKEMON_KEY.IMAGE_NAME,
                POKEMON_KEY.TYPE_1,
                POKEMON_KEY.TYPE_2,
                POKEMON_KEY.WEATHER_1,
                POKEMON_KEY.WEATHER_2,
                POKEMON_KEY.STAT_TOTAL,
                POKEMON_KEY.ATK,
                POKEMON_KEY.DEF,
                POKEMON_KEY.STA,
                POKEMON_KEY.CP100_L40
            ]

            const databaseResult = await this.database.getCustomDetails(queryRequestDTO, mainDetails)

            const result: responseResult = responseResult.toResponseOutputModel(
                `Successful request`,
                databaseResult
            )

            return result

        } catch (error: any) {

            const errCode = error.sqlMessage ? 500 : error.code ?? error.message.includes("is not permitted") ? 406 : 500
            const errMessage = error.sqlMessage ? 'Internal Error' : error.message
            const resultError = new CustomError(errCode, errMessage, error.data ?? null)

            throw resultError

        }
    }



    public async getCustomDetails(
        dto: reqDetailsDTO
    ): Promise<responseResult | void> {
        try {

            const queryRequestDTO: databaseQueryRequestDTO = this.mountDTO(dto)

            if (!Array.isArray(dto[REQ_DETAILS_DTO.DETAILS])) {
                throw new CustomError(406, ERROR_MESSAGES.INVALID_OPERATION, `'details' must be array`);
            } else if (!Array(dto[REQ_DETAILS_DTO.DETAILS]).length) {
                throw new CustomError(406, ERROR_MESSAGES.EMPTY_REQUEST, `'details' is missing or empty`);
            }

            const reqCustomColumns: POKEMON_KEY[] = dto[REQ_DETAILS_DTO.DETAILS] as any
            const columnsModel: POKEMON_KEY[] = Object.values(POKEMON_KEY)

            if (!this.isValidyKey(reqCustomColumns, columnsModel)) {
                const invalidKeys: string[] = this.invalidKeysToArray(reqCustomColumns, columnsModel)
                const errorData = `invalid selected details: ${invalidKeys
                    .map(item => `#${item}`)}`
                throw new CustomError(406, ERROR_MESSAGES.INVALID_KEYS, errorData)
            }

            const databaseResult = await this.database.getCustomDetails(queryRequestDTO, reqCustomColumns)

            const result: responseResult = responseResult.toResponseOutputModel(
                `Successful request`,
                databaseResult
            )

            return result

        } catch (error: any) {

            const errCode = error.sqlMessage ? 500 : error.code ?? error.message.includes("is not permitted") ? 406 : 500
            const errMessage = error.sqlMessage ? 'Internal Error' : error.message
            const resultError = new CustomError(errCode, errMessage, error.data ?? null)

            throw resultError

        }
    }



    public getAvailableDetails() {
        return responseResult.toResponseOutputModel(`Successful Request`, Object.values(POKEMON_KEY))
    }



}