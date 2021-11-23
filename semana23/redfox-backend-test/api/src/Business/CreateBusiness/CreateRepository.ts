import { databaseResult, newPokemonDTO, responseResult } from "../../Model/Pokemon";

export default interface CreateRepository {
    isExistentPokemon(name: string): Promise<any | null>
    postNewPokemon(newPokemonDTO: newPokemonDTO): Promise<any | void>
}