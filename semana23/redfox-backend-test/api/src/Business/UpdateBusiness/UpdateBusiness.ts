import CustomError, { ERROR_MESSAGES } from "../../Model/Error/CustomError";
import { newPokemonDTO, POKEMON_KEY, POKEMON_KEY_TYPEOFF, responseResult } from "../../Model/Pokemon";
import UpdateRepository from "./UpdateRepository";

export default class UpdateBusiness {

    constructor(private updateDatabase: UpdateRepository) { }



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



        const dtoQueryKeys = Object.keys(dto)
        const dtoQueryModel = Object.values(POKEMON_KEY)

        if (!this.isValidyKey(dtoQueryKeys, dtoQueryModel)) {
            const invalidKeys: string[] = this.invalidKeysToArray(dtoQueryKeys, dtoQueryModel)
            const errorData = `invalid keys: ${invalidKeys
                .map(item => `#${item}`)}`

            throw new CustomError(400, ERROR_MESSAGES.INVALID_KEYS, errorData)
        }


        const newPokemonDTO: any = {}
        const errors: any = {}

        for (let [indexModel, keyModel] of (Object.entries(POKEMON_KEY) as any)) {

            const expectedType = Object.getOwnPropertyDescriptor(POKEMON_KEY_TYPEOFF, indexModel)?.value

            Object.entries(dto).forEach(([keyDTO, valueDTO]) => {


                return keyModel !== keyDTO ?
                    false :
                    (expectedType === 'number' ?
                        isNaN(Number(valueDTO)) :
                        !isNaN(valueDTO as any)) ?
                        (errors[keyDTO] = `expected ${expectedType} type`) :
                        (newPokemonDTO[keyModel] = valueDTO ?
                            (expectedType === 'number' ? Number(valueDTO) : valueDTO) :
                            (expectedType === "string" ? 'to be defined' : 0))
            })

        };

        newPokemonDTO[POKEMON_KEY.STAT_TOTAL] = newPokemonDTO[POKEMON_KEY.ATK] +
            newPokemonDTO[POKEMON_KEY.DEF] + newPokemonDTO[POKEMON_KEY.STA];

        newPokemonDTO[POKEMON_KEY.STAT_TOTAL] &&
            (newPokemonDTO[POKEMON_KEY.CP100_L40] = Math.floor(
                (newPokemonDTO[POKEMON_KEY.ATK] + 15) *
                (Math.pow(newPokemonDTO[POKEMON_KEY.DEF] + 15, 0.5) *
                    Math.pow(newPokemonDTO[POKEMON_KEY.STA] + 15, 0.5) *
                    Math.pow(0.7903001, 2)) / 10),
                newPokemonDTO[POKEMON_KEY.CP100_L39] = Math.floor((
                    (newPokemonDTO[POKEMON_KEY.ATK] + 15) *
                    (Math.pow(newPokemonDTO[POKEMON_KEY.DEF] + 15, 0.5) *
                        Math.pow(newPokemonDTO[POKEMON_KEY.STA] + 15, 0.5) *
                        Math.pow(0.784637, 2)) / 10)
                ));


        if (Object.keys(errors).length) {
            throw new CustomError(406, ERROR_MESSAGES.INVALID_OPERATION, errors)
        };

        return newPokemonDTO as newPokemonDTO;
    };



    public async updatePokemon(
        dto: newPokemonDTO,
        name: string
    ): Promise<any> {

        try {

            if (!dto || !Object.keys(dto).length) {
                throw new CustomError(400, ERROR_MESSAGES.EMPTY_REQUEST, null);
            };

            if (!name) {
                throw new CustomError(400, ERROR_MESSAGES.INVALID_OPERATION, `'name' is required`);
            };

            const isRegisteredName = await this.updateDatabase.isExistentPokemon(name);

            if (!isRegisteredName || !isRegisteredName.length) {
                throw new CustomError(406, ERROR_MESSAGES.INVALID_OPERATION, `'name' not found`);
            };


            dto[POKEMON_KEY.ATK] = dto[POKEMON_KEY.ATK] ?? isRegisteredName[0][POKEMON_KEY.ATK]

            dto[POKEMON_KEY.DEF] = dto[POKEMON_KEY.DEF] ?? isRegisteredName[0][POKEMON_KEY.DEF]

            dto[POKEMON_KEY.STA] = dto[POKEMON_KEY.STA] ?? isRegisteredName[0][POKEMON_KEY.STA]

            const pokemonDTO: newPokemonDTO = this.mountDTO(dto)

            const updatePokemon = await this.updateDatabase.updatePokemon(pokemonDTO, name)

            if (!updatePokemon) {
                throw new CustomError(500, ERROR_MESSAGES.INVALID_OPERATION, null)
            }

            const newData = await this.updateDatabase.isExistentPokemon(pokemonDTO[POKEMON_KEY.NAME] || name)

            return responseResult.toResponseOutputModel('Successful to Update Pokemon', newData);

        } catch (error: any) {

            const errCode = error.sqlMessage ? 500 : error.code ?? error.message.includes("is not permitted") ? 406 : 500
            const errMessage = error.sqlMessage ? 'Internal Error' : error.message
            const resultError = new CustomError(errCode, errMessage, error.data ?? null)

            throw resultError
        }
    }


}