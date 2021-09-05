import { Request, Response } from 'express'
import Product from '../entities/Product'
import selectAllProducts from '../service/selectAllProducts'

export default async function listAllProducts(req: Request, res: Response): Promise<any> {
    
    try {
        const result: Product[] = await selectAllProducts()
        result.length < 1 ?
            res.status(200).send("No products to list").end()
            : res.status(200).send(result).end()

    } catch (err: any) {
        res.status(err.code || 500)
            .send({
                message: err.message || "Something went wrong",
                error: err.tips || "Internal Error"
            })
            .end()
    }
}