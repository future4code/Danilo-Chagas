import UpdateRepository from "../../Business/UpdateBusiness/UpdateRepository";
import { newPokemonDTO } from "../../Model/Pokemon";
import { businessModelReference, DB_COLUMN, TABLE } from "../../Model/SQLDatabaseModel";
import { SQLBaseDatabase } from "../SQLBaseDatabase";

export default class UpdateDatabaseSQL extends SQLBaseDatabase implements UpdateRepository {


    public async isExistentPokemon(
        name: string
    ): Promise<any | null | void> {

        try {

            const queryResult = await this.getConnection()
                .table(TABLE.POKEMON)
                .select()
                .where(DB_COLUMN.NAME, "=", name)

            if (queryResult.length) {
                const result = await this.toBusinessModel(queryResult)
                return result
            } else {
                return null
            }

        } catch (error) {
            throw error
        }

    };


    public async updatePokemon(
        dto: newPokemonDTO,
        name: string
    ): Promise<any | null | void> {

        try {

            const rows = await this.toDatabaseModel(dto as any)
            rows[DB_COLUMN.ROW] = 0 //to-do: autoincrement

            const queryResult = await this.getConnection()
                .into(TABLE.POKEMON)
                .update(rows)
                .where(DB_COLUMN.NAME, "=", name)


            return queryResult


        } catch (error: any) {
            console.log(error)
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