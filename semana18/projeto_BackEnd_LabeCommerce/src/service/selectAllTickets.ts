import connection from "../data/connection";
import CustomError from "../entities/CustomError";

export default async function selectAllTickets(): Promise<any> {

    try {
        return await connection("s18_tickets").select()

    } catch (err: any) {
        throw new CustomError(err.message,
            err.code || 500,
            err.tips || "Internal Error")
    }
}