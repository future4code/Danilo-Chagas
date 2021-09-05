import connection from "../data/connection";
import CustomError from "../entities/CustomError";
import User from "../entities/User";

export default async function selectAllUsers(): Promise<any> {

    try {
        return await connection("s18_users").select()

    } catch (err: any) {
        throw new CustomError(err.message,
            err.code || 500,
            err.tips || "Internal Error")
    }
}