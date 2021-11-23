import CustomError, { ERROR_MESSAGES } from "../../Model/Error/CustomError";
import { newPokemonDTO, POKEMON_KEY, POKEMON_KEY_TYPEOFF, responseResult } from "../../Model/Pokemon";
import DeleteRepository from "./DeleteRepository";

export default class DeleteBusiness {

    constructor(private deleteDatabase: DeleteRepository) { }

    public async deletePokemon(
        name: string
    ): Promise<any> {

        try {

            if (!name) {
                throw new CustomError(400, ERROR_MESSAGES.INVALID_OPERATION, `'name' is required`);
            };

            const isRegisteredName = await this.deleteDatabase.isExistentPokemon(name);

            if (!isRegisteredName || !isRegisteredName.length) {
                throw new CustomError(400, ERROR_MESSAGES.INVALID_OPERATION, `'name' not found`);
            };

            await this.deleteDatabase.deletePokemon(name)

            return responseResult.toResponseOutputModel('Successful to Delete Pokemon', name);

        } catch (error: any) {

            const errCode = error.sqlMessage ? 500 : error.code ?? error.message.includes("is not permitted") ? 406 : 500
            const errMessage = error.sqlMessage ? 'Internal Error' : error.message
            const resultError = new CustomError(errCode, errMessage, error.data ?? null)

            throw resultError
        }
    }


}