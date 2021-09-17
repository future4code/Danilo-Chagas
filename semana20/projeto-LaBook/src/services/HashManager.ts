import * as bcrypt from "bcryptjs";
import CustomError from "../models/CustomError";

export class HashManager {

    async hash(plainText: string): Promise<string> {
        try {

            const cost = 10;
            const salt = await bcrypt.genSalt(cost);
            const cypherText = await bcrypt.hash(plainText, salt);

            return cypherText;

        } catch {

            throw new CustomError("Internal Error", 500, "Something went wrong on Hash Process")

        }
    }

    async compare(plainText: string, hash: string): Promise<boolean> {
        try {

            const hashCompare: boolean = await bcrypt.compare(plainText, hash);

            return hashCompare;

        } catch {

            throw new CustomError("Internal Error", 500, ["Something went wrong on Hash Validation",
            "Get in touch with technical support"])

        }
    }
}