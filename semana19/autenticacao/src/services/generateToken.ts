import { config } from "dotenv";
import { sign } from "jsonwebtoken";
import { AuthenticationData } from '../types'

config()

const generateToken = (inputPayload: AuthenticationData): string => {
    const token = sign(
        { id: inputPayload.id },
        process.env.JWT_KEY as string,
        { expiresIn: "1h" }
    );
    return token;
}