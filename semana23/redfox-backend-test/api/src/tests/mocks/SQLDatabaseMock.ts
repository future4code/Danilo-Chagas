import ReadRepository from "../../Business/ReadBusiness/ReadRepository";
import { businessModelReference } from "../../Model/SQLDatabaseModel";

export default class SQLDatabaseMock  implements ReadRepository {

    public async getAllDetails() { }
    public async getCustomDetails() { }
    public async getMainDetails() { }

}