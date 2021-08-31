export type user = {
   id: string
   name: string
   nickname: string
   email: string
   address: string
}

export type address = {
   cep: string,
   street_name: string,
   number: number,
   complement: string,
   district: string,
   city: string,
   state: string,
   user_id: string
}