import * as admin from 'firebase-admin'
import xlsx from 'xlsx'
import { pokemonFullDetail } from '../../Model/Pokemon';

/*Before run this migration, be certified that:
1) firebase-admin is installed as node module on project
2) gcloud sdk enviroment installed and had initialized via bash with 'gcloud init' on project folder 
3) your credentials was exported as global variable and has set as default login with
'gcloud auth application-default login' via bash*/


export class FirestoreMigration {

    constructor(
        public tableName: string,
        public filePath: string
    ) {
        admin.initializeApp({
            credential: admin.credential.applicationDefault(),
            databaseURL: 'https://s23-labenu-backend-test.firebaseio.com'
        });
        this.createFromXlsx();
    };

    async createFromXlsx(): Promise<boolean> {
        try {

            const xlsxWorkbook = xlsx.readFile(this.filePath);
            const sheetNameList = xlsxWorkbook.SheetNames;
            const data: Array<pokemonFullDetail> = xlsx.utils.sheet_to_json(xlsxWorkbook.Sheets[sheetNameList[0]]);

            await Promise.all(data.map((item: pokemonFullDetail) => admin.firestore()
                .collection('pokemonList')
                .add(item)));

            return true;

        } catch (error) {

            console.log(error);

            return false;
        };
    };
}


const filePath = `${__dirname}/Pokemon Go.xlsx`
const migration = new FirestoreMigration("s23_PokemonList", filePath)

if (!!migration) {
    console.log("Success Migration")
} else {
    console.error("Failed Migration. Verify connections and access.")
}