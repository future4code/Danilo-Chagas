import ReadRepository from "../../Business/ReadBusiness/ReadRepository";
import { databaseQueryRequestDTO, DB_QUERY_REQUEST_DTO } from "../../Model/Pokemon";
import { businessModelReference, TABLE } from "../../Model/SQLDatabaseModel";
import { SQLBaseDatabase } from "../SQLBaseDatabase";

export default class ReadDatabaseSQL extends SQLBaseDatabase implements ReadRepository {

    public async getAllDetails(dto: databaseQueryRequestDTO): Promise<any> {

        try {

            const queries = await this.toDatabaseModel(dto[DB_QUERY_REQUEST_DTO.QUEIRES])

            const queryResult = await this.getConnection()
                .table(TABLE.POKEMON)
                .limit(dto[DB_QUERY_REQUEST_DTO.LIMIT])
                .offset(dto[DB_QUERY_REQUEST_DTO.OFFSET])
                .where((builder) => {
                    if (!queries) { return }
                    for (let [key, value] of Object.entries(queries)) {
                        Array.isArray(value) ?
                            builder.where(key, value[0], value[1]) :
                            builder.where(key, value as string)
                    }
                })

            const dbResult: any = {}
            dbResult.computedQueries = await this.toBusinessModel([queries])
            dbResult.data = await this.toBusinessModel(queryResult)

            return dbResult

        } catch (error) {
            console.log(error)
            throw error
        }
    }

    public async getCustomDetails() { }

    public async getMainDetails() { }

    private toBusinessModel(dbResult: any[]) {

        const businessModel: any = []

        for (let item of dbResult) {
            const tempObj: any = {};
            for (let key in item) {
                if (key in businessModelReference) {
                    const newKey = businessModelReference[key];
                    tempObj[newKey] = item[key];
                } else {
                    tempObj[key] = item[key];
                }
            }
            businessModel.push(tempObj);
        }

        return businessModel
    }

    //note: toDatabaseModel if a key not exist in dbModel, it will not be processed/returned
    private toDatabaseModel(businessRequest: any) {
        const tempObj: any = {};
        for (let key in businessRequest) {
            Object.entries(businessModelReference).forEach(([dbKey, businessKey]) => {
                if (businessKey === key) tempObj[dbKey] = businessRequest[key];
            });
        }
        return tempObj;
    }

}