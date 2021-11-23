import DeleteRepository from "../../Business/DeleteBusiness/DeleteRepository";
import { businessModelReference, DB_COLUMN, TABLE } from "../../Model/SQLDatabaseModel";
import { SQLBaseDatabase } from "../SQLBaseDatabase";

export default class DeleteDatabaseSQL extends SQLBaseDatabase implements DeleteRepository {


    public async isExistentPokemon(
        name: string
    ): Promise<any | null | void> {

        try {

            const queryResult = await this.getConnection()
                .table(TABLE.POKEMON)
                .select()
                .where(DB_COLUMN.NAME, "=", name)

            if (queryResult.length) {
                return queryResult
            } else {
                return null
            }

        } catch (error) {
            throw error
        }

    };


    public async deletePokemon(
        name: string
    ): Promise<any | null | void> {

        try {


            const queryResult = await this.getConnection()
                .into(TABLE.POKEMON)
                .where(DB_COLUMN.NAME, "=", name)
                .delete()
            console.log(queryResult)
            return queryResult

        } catch (error: any) {
            console.log(error)
            throw error;
        }

    };

};