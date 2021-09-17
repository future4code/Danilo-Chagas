import { Request, Response } from "express";
import UserBusiness, { loginDTO, signUpDTO } from "../../business/UserBusiness/UserBusiness";
import SQLUserDatabase from "../../data/UserDatabase/SQLUserDatabase";
import CustomError from "../../models/CustomError";

export default class UserController {

    private userBusiness: UserBusiness

    constructor() {
        this.userBusiness = new UserBusiness(new SQLUserDatabase())
    }


    async signup(req: Request, res: Response): Promise<any> {

        try {
            /* ## request body validation goes here before mount signupDTO ## */

            const signupDTO: signUpDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const getToken = await this.userBusiness.signUp(signupDTO)

            return res.status(201).send(getToken).end()

        } catch (err: any) {

            return res
                .status(err.code || 500)
                .send({
                    message: err.message || "Internal Error",
                    error: err.tips || "Somenthing went wrong"
                })
                .end()
        }

    }


    async login(req: Request, res: Response): Promise<any> {

        try {
            /* ## request body validation goes here before mount loginDTO ## */

            const loginDTO: loginDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const getToken = await this.userBusiness.login(loginDTO)

            return res.status(201).send(getToken).end()

        } catch (err: any) {

            return res
                .status(err.code || 500)
                .send({
                    message: err.message || "Internal Error",
                    error: err.tips || "Somenthing went wrong"
                })
                .end()
        }

    }
}