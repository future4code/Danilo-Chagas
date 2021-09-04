import connection from "../data/connection";
import CustomError from "../entities/CustomError";
import User from "../entities/User";

export default async function insertNewUser(input: User): Promise<any> {
    try {
        const isExistUser = await connection("s18_users").count("* as res").where({ email: input.email })
        if (isExistUser[0].res >= 1) {
            throw new Object({
                status: 406,
                message: "Invalid or missing Body Property Value",
                tips: `An user under email'${input.email}' already exist`
            })
        } else {
            try {
                connection("s18_users")
                    .insert(input)
            } catch (err: any) {
                throw new CustomError(err.message, 500, "Internal Error")
            }
        }
    } catch (err: any) {
        throw new CustomError(err.message, 500, "Internal Error")
    }
}