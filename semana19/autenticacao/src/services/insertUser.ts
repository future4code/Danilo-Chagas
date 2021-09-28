import { connection } from "../data/connection";
import { user } from "../types";

export default async function insertUser(inputNewUser: user): Promise<any> {
    try {
        await connection("s19a55_users")
        .insert(inputNewUser)
    } catch (err) {
        throw err
    }
}