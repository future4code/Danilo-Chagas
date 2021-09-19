import { postDTO } from "../../business/PostBusiness/PostBusiness";
import PostRespository from "../../business/PostBusiness/PostRepository";
import CustomError from "../../models/CustomError";
import connection from "../connection";

export default class SQLPostDatabase implements PostRespository {

    private postDatabase: string = "s20_labook_posts"
    private userDatabase: string = "s20_labook_users"


    async createPost(postDTO: postDTO): Promise<postDTO["postId"]> {

        try {
            const post = {
                id: postDTO.postId,
                user_id: postDTO.userId,
                description: postDTO.description,
                create_date: postDTO.createdAt,
                img_link: postDTO.imageLink,
                postType: postDTO.postType
            }
             
            await connection(this.postDatabase)
                .insert(post)

            return postDTO.postId

        } catch (err: any) {
             
            throw new CustomError(
                "Server service error",
                500,
                err.sqlMessage || "Something went wrong on create post"
            )

        }
    }


    async getPostById(postId: string): Promise<any> {

        try {

            const post = await connection(this.postDatabase)
                .select(
                    {
                        postId: `${this.postDatabase}.id`,
                        userId: 'user_id',
                        userName: `${this.userDatabase}.name`,
                        description: 'description',
                        createdAt: 'create_date',
                        imageLink: 'img_link',
                        postType: 'postType'
                    }
                )
                .join(this.userDatabase,
                    `${this.postDatabase}.user_id`,
                    `${this.userDatabase}.id`
                )
                .where({ [`${this.postDatabase}.id`]: postId })

            return post

        } catch (err: any) {

            throw new CustomError(
                "Server service error",
                500,
                err.sqlMessage || "Something went wrong on create post"
            )
        }
    }

}