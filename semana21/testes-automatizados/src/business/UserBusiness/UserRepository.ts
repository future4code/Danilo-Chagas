import { User } from "../../models/User";
import { loginDTO } from "./UserBusiness";

export default interface UserRepository {

    saveToDatabase(user: User): Promise<User>

    findByEmail(email: string): Promise<User | any>

    findCredential(loginDTO: loginDTO): Promise<User | null>

}