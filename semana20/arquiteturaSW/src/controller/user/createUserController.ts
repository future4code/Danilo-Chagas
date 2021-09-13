import { Request, Response } from "express";

export const signupController = async (
    req: Request,
    res: Response
) => {
    try {
        const { name, nickname, email, password, role } = req.body

        const token = await signupBusiness({ name, nickname, email, password, role })


        res.status(201)
            .send({
                message: "Usuário criado!",
                token
            })

    } catch (error: any) {
        res.status(400).send(error.message)
    }
}