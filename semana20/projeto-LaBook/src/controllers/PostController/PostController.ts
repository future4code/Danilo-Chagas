import { Request, Response } from "express";
import PostBusiness, { postDTO } from "../../business/PostBusiness/PostBusiness";
import SQLPostDatabase from "../../data/PostDatabase/SQLPostDatabase";
import CustomError from "../../models/CustomError";
import { Authenticator } from '../../services/Authenticator'

export default class PostController {
    private postBusiness: PostBusiness

    constructor() {
        this.postBusiness = new PostBusiness(new SQLPostDatabase)
    }


    async createPost(req: Request, res: Response): Promise<any> {

        try {

            /* ## request body validation goes here before mount postDTO ## */


            const decodedToken: any = new Authenticator().decodeTokenData(req.headers.authorization as string)

            const UTCMileseconds: string = '000'
            const tokenExpirationDate: any = Number(`${decodedToken.exp}${UTCMileseconds}`)

            if (new Number(new Date()) > tokenExpirationDate) {
                throw new CustomError(
                    "Invalid Token",
                    406,
                    "Expired Token"
                )
            }

            const postDTO: postDTO = {
                userId: decodedToken.id,
                description: req.body.description,
                imageLink: req.body.imageLink,
                postType: req.body.postType,
                createAt: Number(new Date())
            }

            const getPostId = await this.postBusiness.createPost(postDTO)

            return res
                .status(200)
                .send({ postId: getPostId })
                .end()

        } catch (err: any) {
            
            console.log(err)
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