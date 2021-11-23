import { databaseQueryRequestDTO, databaseResult, reqDetailsDTO, POKEMON_KEY } from "../../Model/Pokemon";

export default interface ReadRepository {
    getAllDetails(dbRequestDTO: databaseQueryRequestDTO): Promise<databaseResult | null>
    getCustomDetails(dbRequestDTO: databaseQueryRequestDTO, columns: POKEMON_KEY[]): Promise<databaseResult | null>
}