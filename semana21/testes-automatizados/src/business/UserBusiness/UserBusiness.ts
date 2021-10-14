import CustomError from "../../models/CustomError";
import { User } from "../../models/User";
import { Authenticator } from "../../services/Authenticator";
import { HashManager } from "../../services/HashManager";
import { IdGenerator } from "../../services/IdGenerator";
import UserRepository from "./UserRepository";

export interface signUpDTO {
    name: string,
    email: string,
    password: string
}

export interface loginDTO {
    email: string,
    password: string
}

export default class UserBusiness {

    private hashManager: HashManager
    private authenticator: Authenticator
    private userDatabase: UserRepository

    constructor(userDatabase: UserRepository) {
        this.userDatabase = userDatabase
        this.hashManager = new HashManager()
        this.authenticator = new Authenticator()
    }


    async signUp(signUpDTO: signUpDTO): Promise<object | CustomError> {

        const generetedId = new IdGenerator().generateId()

        const hashedPassword = await this.hashManager.hash(signUpDTO.password)

        const user = await this.userDatabase.findByEmail(signUpDTO.email)

        if (user) {
            throw new CustomError(
                "Denied register",
                406,
                `An user already registered with email '${signUpDTO.email}'`
            )
        } else {
            const userModel: User = {
                id: generetedId,
                email: signUpDTO.email,
                name: signUpDTO.name,
                hashedPassword: hashedPassword
            }

            await this.userDatabase.saveToDatabase(userModel)

            const token = this.authenticator.generateToken({ id: userModel.id })

            return {
                token: token
            }
        }
    }


    async login(loginDTO: loginDTO): Promise<any> {

        const { email, password } = loginDTO

        try {

            const credential: User | any = await this.userDatabase.findCredential(loginDTO)

            if (!credential) {
                throw new CustomError(
                    "Invalid credential",
                    401,
                    "Invalid 'e-mail' or 'password'"
                )
            }

            const isValidPassword = await this.hashManager.compare(password, credential.hashedPassword)

            if (!isValidPassword) {
                throw new CustomError(
                    "Invalid credential",
                    401,
                    "Invalid 'e-mail' or 'password'"
                )
            }

            const token = this.authenticator.generateToken({ id: credential.id })

            return {
                token: token
            }

        } catch (err) {
            throw err
        }

    }
}