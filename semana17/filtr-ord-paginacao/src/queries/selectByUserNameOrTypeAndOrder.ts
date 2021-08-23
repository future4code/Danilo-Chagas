import { connection } from "../data/connection"

//E2)
export default async function selectByUserNameOrTypeAndOrder(inputWhere: any, inputOrder: any):Promise<any> {
    const result = await connection("aula48_exercicio")
    // .select("*")
    .where(inputWhere)
    .orderBy(inputOrder,"asc")
 
    return result
 }