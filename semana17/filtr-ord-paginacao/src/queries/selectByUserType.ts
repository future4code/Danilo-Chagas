import { connection } from "../data/connection"

//E1b)
export default async function selectByUserType(input: any):Promise<any> {
    const result = await connection("aula48_exercicio")
    .select("*")
    .where("type","=",input)
 
    return result
 }