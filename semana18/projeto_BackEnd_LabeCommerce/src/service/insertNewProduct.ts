import connection from "../data/connection";
import CustomError from "../entities/CustomError";
import Product from "../entities/Product";

export default async function insertNewProduct(input: Product): Promise<any> {
    
    try {
        const isExistProduct = await connection("s18_products").count("* as res").where({
            name: input.name,
            description: input.description,
            price: input.price
        })

        if (isExistProduct[0].res >= 1) {
            throw new Object({
                status: 406,
                message: "Invalid or missing Body Property Value",
                tips: `An product with id '${input.getId()}' already exist with same caracteristics`
            })
    
        } else {
    
            try {
                const res = await connection("s18_products")
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