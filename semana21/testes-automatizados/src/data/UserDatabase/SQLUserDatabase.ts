import { loginDTO } from "../../business/UserBusiness/UserBusiness";
import UserRepository from "../../business/UserBusiness/UserRepository";
import CustomError from "../../models/CustomError";
import { User } from "../../models/User";
import connection from "../connection";

export default class SQLUserDatabase implements UserRepository {

    private userDatabase: string = "s20_labook_test_users"
    private passwordDatabase: string = "s20_labook_test_passwords"

    // constructor() {
    //     this.userDatabase = "s20_labook_users"
    //     this.passwordDatabase = "s20_labook_passwords"
    // }


    async saveToDatabase(user: User): Promise<User> {

        try {

            const dataToPasswordDatabase = { user_id: user.id, user_password: user.hashedPassword }

            delete user.hashedPassword
            const res: User = await connection(this.userDatabase)
                .insert(user)

            await connection(this.passwordDatabase).insert(dataToPasswordDatabase)

            return user

        } catch (err: any) {
            throw new CustomError("Internal Error", 500, err.message)

        }
    }


    async findByEmail(email: string): Promise<User | null> {

        try {
            const res: any = await connection(this.userDatabase)
                .select("*")
                .where({ "email": email })

            return res[0] ? res[0] : null

        } catch (err: any) {
            throw new CustomError("Internal Error", 500, err.message)
        }
    }


    async findCredential(loginDTO: loginDTO): Promise<User | null> {

        try {
            const user: any = await this.findByEmail(loginDTO.email)

            if (!user) {
                return null
            }

            const password: string | any = await connection(this.passwordDatabase)
                .select("user_password")
                .where({ "user_id": user.id })

            if (!password[0]) {
                throw new CustomError("Internal Error", 500, [
                    "Something went wrong on server",
                    "Get in touch with technical support"])
            }

            user.hashedPassword = password[0].user_password

            return user

        } catch (err: any) {
            throw new CustomError("Internal Error", 500, err.message)
        }
    }

}