export enum GENDER {
   MALE = "MALE",
   FEMALE = "FEMALE",
   OTHER = "OTHER"
}

export type character = {
   name: string,
   gender: GENDER,
   id?: number,
   description?: string
}

export type Transaction = {
   description: string,
   value: number,
   date: string
 }