export default interface DeleteRepository {
    isExistentPokemon(name: string): Promise<any | null>
    deletePokemon(name: string): Promise<any | void>
}