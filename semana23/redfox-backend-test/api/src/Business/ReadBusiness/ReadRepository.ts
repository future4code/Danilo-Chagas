import { databaseQueryRequestDTO } from "../../Model/Pokemon";

export default interface ReadRepository {
    getAllDetails(dbRequestDTO: databaseQueryRequestDTO ): Promise<any>
    getMainDetails(): Promise<any>
    getCustomDetails(): Promise<any>
}