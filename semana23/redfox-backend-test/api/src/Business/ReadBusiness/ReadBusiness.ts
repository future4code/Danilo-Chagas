import CustomError, { ERROR_MESSAGES } from "../../Model/Error/CustomError";
import { ALL_DETAILS_DTO, databaseQueryRequestDTO, getAllDetailsDTO, POKEMON_KEY, requestResult } from "../../Model/Pokemon";
import CRUDRepository from "./ReadRepository";

export default class ReadBusiness {

    constructor(private database: CRUDRepository) { }

    private pagination(pageNumber: number, limitPerView: number) {

        const offset = limitPerView * (!pageNumber || pageNumber < 2 ? 0 : pageNumber - 1)

        return { limit: limitPerView, offset: offset }

    }

    private isValidQueryKey(keysToCheck: string[], modelKeys: string[]): boolean {
        return keysToCheck.map((item: any) =>
            modelKeys.includes(item))
            .every(((item: any) => item))
    }

    private invalidKeysToArray(keysToCheck: string[], modelKeys: string[]) {
        return keysToCheck.filter((item: string) =>
            !modelKeys.includes(item))
    }

    private mountDTO(dto: any) {

        //to do: advanced validations (values)
        if (!Object.keys(dto).length) {
            throw new CustomError(400, ERROR_MESSAGES.EMPTY_REQUEST)
        }


        const dtoKeys = Object.keys(dto)
        const dtoKeysModel = Object.values(ALL_DETAILS_DTO)

        if (!this.isValidQueryKey(dtoKeys, dtoKeysModel)) {
            const invalidKeys: string[] = this.invalidKeysToArray(dtoKeys, dtoKeysModel)
            const errorData = `needed keys: ${invalidKeys
                .map(item => `#${item}`)}`

            throw new CustomError(400, ERROR_MESSAGES.INVALID_KEYS, errorData)
        }


        const dtoQueryKeys = Object.keys(dto[ALL_DETAILS_DTO.QUEIRES])
        const dtoQueryModel = Object.values(POKEMON_KEY)

        if (!this.isValidQueryKey(dtoQueryKeys, dtoQueryModel)) {
            const invalidKeys: string[] = this.invalidKeysToArray(dtoQueryKeys, dtoQueryModel)
            const errorData = `invalid keys: ${invalidKeys
                .map(item => `#${item}`)}`

            throw new CustomError(400, ERROR_MESSAGES.INVALID_KEYS, errorData)
        }

        const page = dto[ALL_DETAILS_DTO.PAGE] ?? 1
        const pagination = this.pagination(page, 10)

        const queryRequestDTO: databaseQueryRequestDTO = {
            ...pagination,
            queries: dto[ALL_DETAILS_DTO.QUEIRES]
        }

        return queryRequestDTO
    }



    public async getAllDetails(
        dto: getAllDetailsDTO
    ): Promise<requestResult | void> {

        try {

            const queryRequestDTO: databaseQueryRequestDTO = this.mountDTO(dto)

            const databaseResult = await this.database.getAllDetails(queryRequestDTO)

            const result: requestResult = requestResult.toResponseOutputModel(
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
        dto: getAllDetailsDTO
    ): Promise<requestResult | void> {

        try {

            const queryRequestDTO: databaseQueryRequestDTO = this.mountDTO(dto)

            const databaseResult = await this.database.getAllDetails(queryRequestDTO)

            const result: requestResult = requestResult.toResponseOutputModel(
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

    public async getCustomDetails() {
        //um pokemon ou todos paginados
        // retorna as principais colunas do bd ordem por pokemon
    }

}