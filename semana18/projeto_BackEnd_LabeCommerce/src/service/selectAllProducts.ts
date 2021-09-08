import connection from "../data/connection";
import CustomError from "../entities/CustomError";

export default async function selectAllProducts(): Promise<any> {

    try {
        return await connection("s18_products").select()

    } catch (err: any) {
        throw new CustomError(err.message,
            err.code || 500,
            err.tips || "Internal Error")
    }
}