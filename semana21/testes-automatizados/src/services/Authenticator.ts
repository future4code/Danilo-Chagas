import * as jwt from "jsonwebtoken";
import CustomError from "../models/CustomError";

interface AuthenticationData {
  id: string;
}

export class Authenticator {
  
  generateToken(info: AuthenticationData): string {
    const token = jwt.sign(
      { id: info.id },
      process.env.JWT_KEY as string,
      { expiresIn: "24h" }
    );
    return token;
  }


  decodeTokenData(token: string): AuthenticationData {

    try {
      const payload = jwt.verify(token, process.env.JWT_KEY as string)
      return payload as AuthenticationData;

    } catch (err) {

      throw new CustomError(
        "Token Error",
        406,
        "Token is expired"
      )
    }
  }

}