import { insertTask } from "../../data/insertTask";
import { generateId } from "../../services/idGenerator";
import { task } from "../../types/task";


export async function createTaskBusiness({ title, description, deadline, authorId }: any): Promise<void> {
   if (
      !title ||
      !description ||
      !deadline ||
      !authorId
   ) {
      throw new Error('"title", "description", "deadline" e "authorId" são obrigatórios')
   }

   const id: string = generateId()

   await insertTask({
      id,
      title,
      description,
      deadline,
      authorId,
   })
}