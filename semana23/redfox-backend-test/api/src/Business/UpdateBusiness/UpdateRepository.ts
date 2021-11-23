import { databaseResult, newPokemonDTO, responseResult } from "../../Model/Pokemon";

export default interface UpdateRepository {
    isExistentPokemon(name: string): Promise<any | null>
    updatePokemon(newPokemonDTO: newPokemonDTO, name: string): Promise<any | void>
}