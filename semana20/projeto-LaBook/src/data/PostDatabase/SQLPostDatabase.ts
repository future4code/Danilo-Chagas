import { postDTO } from "../../business/PostBusiness/PostBusiness";
import PostRespository from "../../business/PostBusiness/PostRepository";
import CustomError from "../../models/CustomError";
import connection from "../connection";

export default class SQLPostDatabase implements PostRespository {

    private userDatabase: string = "s20_labook_posts"


    async createPost(postDTO: postDTO): Promise<postDTO["postId"]> {

        try {
            const post = {
                id: postDTO.postId,
                user_id: postDTO.userId,
                description: postDTO.description,
                create_date: postDTO.createAt,
                img_link: postDTO.imageLink,
                postType: postDTO.postType
            }
            console.log(post)

            await connection(this.userDatabase)
                .insert(post)

            return postDTO.postId

        } catch (err: any) {
            console.error(err)
            throw new CustomError(
                "Server service error",
                500,
                err.sqlMessage || "Something went wrong on create post"
            )
        
        }
    }
}