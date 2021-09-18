import CustomError from "../../models/CustomError";
import { Authenticator } from "../../services/Authenticator";
import { IdGenerator } from "../../services/IdGenerator";
import PostRespository from "./PostRepository";

export interface postDTO {
    userId: string
    description: string,
    imageLink: string,
    postType: POST_TYPE
    createAt: number,
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
            console.error(err)
            throw new CustomError(
                "Server service error",
                500,
                "Something went wrong on create post"
            )
        }

    }
}