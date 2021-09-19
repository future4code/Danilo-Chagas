import { postDTO } from "./PostBusiness";

export default interface PostRespository {
    createPost(postDTO: postDTO): Promise<postDTO["postId"]>
    getPostById(postId: string): Promise<any>
}