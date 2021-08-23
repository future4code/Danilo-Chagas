import connection from "./connection";
import { idGenerator, taskIdGenerator, convertDate, errorMsg } from "./functions"

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

export const createTask = async (title: any, description: any, limitDate: any, creatorUserId: any): Promise<any> => {
   const newId = await taskIdGenerator()
   const newTask = {
      id: newId,
      title: title,
      description: description,
      limit_date: convertDate(limitDate),
      creatorUserId: creatorUserId,
   }
   try {
      await connection("TodoListTask")
         .insert(newTask)
      return newTask
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
         throw new Object({ code: "NOT_FOUND_ID" })
      }
   } catch (err) {
      return errorMsg(err)
   }
}

export const editUser = async (id: number, name: any, nickname: any): Promise<any> => {
   const newUserInfo = {
      name: name,
      nickname: nickname,
   }
   try {
      await connection("TodoListUser")
         .where({ id: id })
         .update(newUserInfo)
      return newUserInfo
   } catch (err) {
      return errorMsg(err)
   }
}