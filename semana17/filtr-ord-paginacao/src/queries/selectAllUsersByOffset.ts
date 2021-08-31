import { connection } from "../data/connection"

//E3)
export default async function selectAllUsersByOffset(inputLimit: number, inputOffset: number):Promise<any> {
    const result = await connection("aula48_exercicio")
    // .select("*")
    .limit(inputLimit)
    .offset(inputOffset)
 
    return result
 }