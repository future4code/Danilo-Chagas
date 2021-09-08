// import { Request, Response } from 'express'
// import Purchase from '../entities/Purchase'
// import insertNewProduct from '../service/insertNewProduct'
// import validationCreatePurchase from './validation/validationCreatePurchase'

// const setNewPurchase = (input: Purchase): Purchase | any => {
//     const newProduct = new Purchase(
//         String(input.user_id).trim(),
//         String(input.product_id).trim(),
//         Number(input.quantity))
//     newProduct.setPurchase()
//     return newProduct
// }

// export default async function createPurchase(req: Request, res: Response): Promise<any> {
//     try {
//         if (validationCreatePurchase("new", req.body)) {
//             const newPurchase = setNewPurchase(req.body)
//             await insertNewPurchase(newPurchase)
//             res.status(200)
//                 .send({
//                     message: "Success to create new purchase",
//                     purchase: newPurchase
//                 })
//                 .end()
//         }
//     } catch (err: any) {
//         res.status(err.code || 500)
//             .send({
//                 message: err.message || "Something went wrong",
//                 error: err.tips || "Internal Error"
//             })
//     }
// }