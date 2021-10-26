import xlsx from 'xlsx'
import { BaseDatabase } from '../BaseDatabase'

export class Migration extends BaseDatabase {

    constructor(
        public tableName: string,
        public filePath: string
    ) {
        super()
        this.createFromXlsx()
    }

    public async createFromXlsx(): Promise<boolean | void> {

        const xlsxWorkbook = xlsx.readFile(this.filePath)
        const sheetNameList = xlsxWorkbook.SheetNames;
        const data = xlsx.utils.sheet_to_json(xlsxWorkbook.Sheets[sheetNameList[0]])

        try {

            const createTable = await this.getConnection()
                .schema.hasTable(this.tableName)
                .then((exist) => {
                    if (!exist) {
                        return this.getConnection().schema.createTable(this.tableName, (newColumn) => {
                            newColumn.increments("id").primary();
                            newColumn.integer("Row").notNullable();
                            newColumn.string("Name", 64).notNullable();
                            newColumn.integer("Pokedex Number").notNullable();
                            newColumn.string("Img name", 34).notNullable();
                            newColumn.integer("Generation").notNullable();
                            newColumn.string("Evolution Stage", 34).nullable();
                            newColumn.integer("Evolved");
                            newColumn.integer("FamilyID").nullable();
                            newColumn.integer("Cross Gen");
                            newColumn.string("Type 1", 34).notNullable();
                            newColumn.string("Type 2").nullable();
                            newColumn.string("Weather 1").notNullable();
                            newColumn.string("Weather 2").nullable();
                            newColumn.integer("STAT TOTAL").notNullable();
                            newColumn.integer("ATK").notNullable();
                            newColumn.integer("DEF").notNullable();
                            newColumn.integer("STA").notNullable();
                            newColumn.integer("Legendary").notNullable();
                            newColumn.integer("Aquireable").notNullable();
                            newColumn.integer("Spawns").notNullable();
                            newColumn.integer("Regional").notNullable();
                            newColumn.integer("Raidable").notNullable();
                            newColumn.integer("Hatchable").notNullable();
                            newColumn.integer("Shiny").notNullable();
                            newColumn.integer("Nest").notNullable();
                            newColumn.integer("New").notNullable();
                            newColumn.integer("Not-Gettable").notNullable();
                            newColumn.integer("Future Evolve").notNullable();
                            newColumn.integer("100% CP @ 40").notNullable();
                            newColumn.integer("100% CP @ 39").notNullable();
                        })
                            .then(() => {
                                return this.getConnection()
                                    .into(this.tableName)
                                    .insert(data)
                            })
                            .catch((err) => {
                                throw new Error(err)
                            })
                    }
                })
                .then(() => {
                    return this.getConnection()
                        .into(this.tableName)
                        .insert(data)
                })
                .catch((err) => {
                    throw new Error(err)
                })

            await BaseDatabase.detroyConnection()


        } catch (err: any) {
            console.log("Failed Migration", err?.message)
            return false
        }

    }
}

const filePath = `${__dirname}/Pokemon Go.xlsx`
const migration = new Migration("s23_PokemonList", filePath)

if (migration) {
    console.log("Success Migration")
} else {
    console.error("Failed Migration. Verify connections and access.")
}