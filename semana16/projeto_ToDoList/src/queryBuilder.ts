import connection from "./connection";
import { idGenerator, errorMsg } from "./functions"

export const createUser = async (name: any, nickname: any, email: any): Promise<any> => {
   const newId = await idGenerator()
   const newUser = {
      id: newId,
      name: name,
      nickname: nickname,
      email: email
   }
   try {
      await connection("TodoListUser")
         .insert(newUser)
      return newUser
   } catch (err) {
      return errorMsg(err)
   }
}

export const getUserById = async (id: any) => {
   try {
      const result = await connection("TodoListUser")
         .select("id", "nickname")
         .where({ id: id })

      if (result[0]) {
         return result[0]
      } else {
         throw new Object({code: "NOT_FOUND"})
      }
   } catch (err) {
      return errorMsg(err)
   }
}