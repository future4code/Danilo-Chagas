import CreateRepository from "../../Business/CreateBusiness/CreateRepository";
import { newPokemonDTO } from "../../Model/Pokemon";
import { businessModelReference, DB_COLUMN, TABLE } from "../../Model/SQLDatabaseModel";
import { SQLBaseDatabase } from "../SQLBaseDatabase";

export default class CreateDatabaseSQL extends SQLBaseDatabase implements CreateRepository {


    public async isExistentPokemon(
        name: string
    ): Promise<any | null | void> {

        try {

            const queryResult = await this.getConnection()
                .table(TABLE.POKEMON)
                .select()
                .where(DB_COLUMN.NAME, "=", name)

            return queryResult

        } catch (error) {
            throw error
        }

    };


    public async postNewPokemon(
        dto: newPokemonDTO
    ): Promise<any | null | void> {

        try {

            const rows = await this.toDatabaseModel(dto as any)
            rows[DB_COLUMN.ROW] = 0 //to-do: autoincrement

            const queryResult = await this.getConnection()
                .into(TABLE.POKEMON)
                .insert(rows)

            console.log(queryResult)
            return queryResult


        } catch (error: any) {
            console.log(error)
            throw error;
        }

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