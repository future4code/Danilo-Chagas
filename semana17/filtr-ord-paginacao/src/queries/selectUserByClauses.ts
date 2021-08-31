import { connection } from "../data/connection"

//E3)
export default async function selectUserByClauses(whereClause: any,
    orderClause: any,
    inputLimit: number,
    inputOffset: number): Promise<any> {
    const result = await connection("aula48_exercicio")
        // .select("*")
        .where(whereClause)
        .orderBy(orderClause,"desc")
        .limit(inputLimit)
        .offset(inputOffset)

    return result
}