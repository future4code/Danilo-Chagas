import CustomError from "../../models/CustomError";
import { Authenticator } from "../../services/Authenticator";
import { IdGenerator } from "../../services/IdGenerator";
import PostRespository from "./PostRepository";

export interface postDTO {
    userId: string
    description: string,
    imageLink: string,
    postType: POST_TYPE
    createdAt: number,
    postId?: string
}

export enum POST_TYPE {
    NORMAL = "normal",
    EVENTO = "evento"
}

export default class PostBusiness {

    private postDatabase: PostRespository

    constructor(postDatabase: PostRespository) {
        this.postDatabase = postDatabase
    }

    async createPost(postDTO: postDTO): Promise<postDTO['postId']> {

        try {

            postDTO.postId = new IdGenerator().generateId()

            const postId = await this.postDatabase.createPost(postDTO)

            return postId

        } catch (err: any) {

            throw new CustomError(
                "Internal Error",
                500,
                [
                    "Something went wrong on create post",
                    err.message
                ]
            )
        }

    }

    async getPostById(postId: string): Promise<any> {

        try {

            const post = await this.postDatabase.getPostById(postId)

            if (!post) {
                throw new CustomError("Not Found", 404, "Post Not Found")
            }

            post[0].createdAt = new Date(post[0].createdAt).toISOString()

            return post[0]

        } catch (err: any) {

            throw new CustomError(
                "Internal Error",
                500,
                [
                    "Something went wrong on get post",
                    err.message
                ]
            )
        }
    }
}