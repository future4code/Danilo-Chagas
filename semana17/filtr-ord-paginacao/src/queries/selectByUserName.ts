import { connection } from "../data/connection"

//E1a)
export default async function selectByUserName(input: any):Promise<any> {
    const result = await connection("aula48_exercicio")
    .select("*")
    .where("name","=",input)
 
    return result[0]
 }