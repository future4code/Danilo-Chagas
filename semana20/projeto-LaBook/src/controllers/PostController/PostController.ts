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

            const token: any = new Authenticator().decodeTokenData(req.headers.authorization as string)

            const postDTO: postDTO = {
                userId: token.id,
                description: req.body.description,
                imageLink: req.body.imageLink,
                postType: req.body.postType,
                createdAt: Number(new Date())
            }

            const getPostId = await this.postBusiness.createPost(postDTO)

            return res
                .status(200)
                .send({ postId: getPostId })
                .end()

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

    async getPostbyId(req: Request, res: Response): Promise<any> {

        /* req validation goes here before request Business*/

        if (!req.params.postId) { throw new CustomError("Invalid or missing value", 400, "'postId' is needed to 'get' request") }

        try {

            const post = await this.postBusiness.getPostById(req.params.postId)

            return res.status(200).send(post).end()

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