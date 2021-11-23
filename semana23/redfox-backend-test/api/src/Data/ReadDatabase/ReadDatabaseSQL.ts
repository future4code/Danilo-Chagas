import ReadRepository from "../../Business/ReadBusiness/ReadRepository";
import { databaseQueryRequestDTO, databaseResult, DB_QUERY_REQUEST_DTO, POKEMON_KEY } from "../../Model/Pokemon";
import { businessModelReference, TABLE } from "../../Model/SQLDatabaseModel";
import { SQLBaseDatabase } from "../SQLBaseDatabase";




export default class ReadDatabaseSQL extends SQLBaseDatabase implements ReadRepository {

    public async getAllDetails(
        dto: databaseQueryRequestDTO): Promise<databaseResult | null> {

        try {

            const queries = await this.toDatabaseModel(dto[DB_QUERY_REQUEST_DTO.QUEIRES]);


            const queryTotalResults: any = await this.getConnection()
                .table(TABLE.POKEMON)
                .where((builder) => {
                    if (!queries) { return }
                    for (let [key, value] of Object.entries(queries)) {
                        Array.isArray(value) ?
                            builder.where(key, value[0], value[1]) :
                            builder.where(key, value as string)
                    }
                })
                .count('* as total');

            const dbResult: any = {};

            if (!queryTotalResults[0]?.total) {
                return dbResult.result = null;
            }

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
                });

            dbResult.totalResults = queryTotalResults[0]?.total;
            dbResult.currentPage = !queryTotalResults[0]?.total ? 0 : (dto[DB_QUERY_REQUEST_DTO.OFFSET] / dto[DB_QUERY_REQUEST_DTO.LIMIT]) + 1;
            dbResult.totalPages = Math.ceil(queryTotalResults[0]?.total / dto[DB_QUERY_REQUEST_DTO.LIMIT]) ?? 1;

            dbResult.result = await this.toBusinessModel(queryResult);

            return dbResult as databaseResult;

        } catch (error) {

            throw error;
        }
    };



    public async getCustomDetails(
        dto: databaseQueryRequestDTO,
        columns: POKEMON_KEY[]
    ): Promise<databaseResult | null> {

        try {

            const queries = await this.toDatabaseModel(dto[DB_QUERY_REQUEST_DTO.QUEIRES]);


            const queryTotalResults: any = await this.getConnection()
                .table(TABLE.POKEMON)
                .where((builder) => {
                    if (!queries) { return }
                    for (let [key, value] of Object.entries(queries)) {
                        Array.isArray(value) ?
                            builder.where(key, value[0], value[1]) :
                            builder.where(key, value as string)
                    }
                })
                .count('* as total');

            const dbResult: any = {};

            if (!queryTotalResults[0]?.total) {
                return dbResult.result = null;
            }

            const dbColumns = await this.toDatabaseModel(columns);

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
                .select(dbColumns);

            dbResult.totalResults = queryTotalResults[0]?.total;
            dbResult.currentPage = !queryTotalResults[0]?.total ? 0 : (dto[DB_QUERY_REQUEST_DTO.OFFSET] / dto[DB_QUERY_REQUEST_DTO.LIMIT]) + 1;
            dbResult.totalPages = Math.ceil(queryTotalResults[0]?.total / dto[DB_QUERY_REQUEST_DTO.LIMIT]) ?? 1;

            dbResult.result = queryResult;

            return dbResult;

        } catch (error) {
            throw error;
        }
    };



    private toBusinessModel(
        dbResult: any[]) {

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

        return businessModel;
    };



    //note: toDatabaseModel if a key not exist in dbModel, it won't be processed/returned
    private toDatabaseModel(
        businessRequest: any[]) {

        const tempObj: any = {};

        if (Array.isArray(businessRequest)) {

            for (let item of businessRequest) {
                Object.entries(businessModelReference).forEach(([dbKey, businessKey]) => {
                    if (businessKey === item) {
                        typeof businessKey === 'string' && (tempObj[businessKey] = dbKey)
                    };
                });
            }

            return tempObj;

        } else if (typeof businessRequest === 'object') {

            for (let key in (businessRequest as any)) {
                Object.entries(businessModelReference).forEach(([dbKey, businessKey]) => {
                    if (businessKey === key) tempObj[dbKey] = businessRequest[key];
                });
            }

            return tempObj;
        }


    };



};