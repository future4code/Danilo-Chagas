import { Request, Response } from 'express'
import Product from '../entities/Product'
import insertNewProduct from '../service/insertNewProduct'
import validationCreateProduct from './validation/validationCreateProduct'

const setNewProduct = (input: Product): Product | any => {
    const newProduct = new Product(input.name.trim(), input.description.trim(), Number(input.price))
    newProduct.setProduct()
    return newProduct
}

export default async function createProduct(req: Request, res: Response): Promise<any> {
    try {
        if (validationCreateProduct("new", req.body)) {
            const newProduct = setNewProduct(req.body)
            await insertNewProduct(newProduct)
            res.status(200)
                .send({
                    message: "Success to create new product",
                    product: newProduct
                })
                .end()
        }
    } catch (err: any) {
        res.status(err.code || 500)
            .send({
                message: err.message || "Something went wrong",
                error: err.tips || "Internal Error"
            })
    }
}