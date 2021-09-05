import connection from "../data/connection";
import CustomError from "../entities/CustomError";
import Ticket from "../entities/Ticket";

export default async function insertNewTicket(input: Ticket): Promise<any> {

    try {
        const isExistTicket = await connection("s18_tickets").count("* as res").where({
            name: input.name,
            description: input.description,
            price: input.price,
            travel_from: input.travel_from,
            travel_to: input.travel_to
        })

        if (isExistTicket[0].res >= 1) {
            throw new Object({
                status: 406,
                message: "Invalid or missing Body Property Value",
                tips: `A ticket with id '${input.getId()}' already exist with same caracteristics`
            })

        } else {

            try {
                const res = await connection("s18_tickets")
                    .insert(input)
            } catch (err: any) {
                throw new CustomError(err.message, 500, "Internal Error")
            }
        }

    } catch (err: any) {
        throw new CustomError(err.message,
            err.code || 500,
            err.tips || "Internal Error")
    }
}