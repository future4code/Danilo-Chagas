import connection from "./connection";

export function validateBody(actionType: "new" | "edit", body: any) {
   const expectedObject: Array<string> = ["name", "nickname", "email"]
   const errorTips: Array<any> = []
   const checkers: any = {
      isValidBodyLength: function (input: any) {
         return Object.keys(input).length === expectedObject.length
      },
      isValidBodyKeys: function (input: any) {
         return Object.getOwnPropertyNames(input)
            .map((item: any) => expectedObject
               .includes(item)).every(item => item === true)
      },
      isValidName: function (input: any) {
         if (input.trim().length > 0 && input.trim().length <= 255) {
            if (!isNaN(input) || input.split("").some((item: any) => Number(item))) {
               errorTips.push("Invalid name. Only letter is acceptable.")
               return false
            } else {
               return true
            }
         } else {
            errorTips.push("Name is empty or has more than 255 characters.")
            return false
         }
      },
      isValidNickName: function (input: any) {
         if (input.trim().length === 0 || input.trim().length > 255) {
            errorTips.push("Nickname is empty or it has more than 255 characters.")
            return false
         } else {
            return true
         }
      },
      isValidEmail: function (input: any) {
         if (!input.trim().length || input.trim().length > 255) {
            errorTips.push("Email is empty or it has more than 255 characters.")
            return false
         } else if (!input.includes("@") ? true
            : !input.split("@")[0] ? true
               : !input.split("@")[1].includes(".") ? true
                  : input.split("@")[1].split(".")[0].length > 0 &&
                     input.split("@")[1].split(".")[1].length > 0 ? false : true) {
            errorTips.push("Invalid email.")
            return false
         } else {
            return true
         }
      }
   }
   const expectedValues: any = {
      name: (input: any) => checkers.isValidName(input),
      nickname: (input: any) => checkers.isValidNickName(input),
      email: (input: any) => checkers.isValidEmail(input),
   }
   const validationType: any = {
      new: {
         keys: (input: any) => checkers.isValidBodyLength(input) && checkers.isValidBodyKeys(input),
         values: (input: any) => Object.getOwnPropertyNames(input)
            .map(item => { return expectedValues[item](input[item]) })
            .every(item => item === true)
      },
      edit: {
         keys: (input: any) => checkers.isValidBodyKeys(input),
         values: (input: any) => Object.getOwnPropertyNames(input)
            .map(item => { return expectedValues[item](body[item]) })
            .every(item => item === true)
      }
   }

   if (!body) {
      throw new Object({ status: 400, message: "Empty Body" })
   } else if (!validationType[actionType].keys(body)) {
      throw new Object({
         status: 406,
         message: "Invalid or missing Body Property Key",
         tips: `Expected properties keys: ${expectedObject}`
      })
   } else if (!validationType[actionType].values(body)) {
      throw new Object({
         status: 406,
         message: "Invalid or missing Body Property Value",
         tips: errorTips
      })
   } else {
      return true
   }
}

export const idGenerator = async () => {
   try {
      const lastNumber: number | any = await connection("TodoListUser")
         .max("id", { as: "res" })
      return lastNumber[0].res === null ? 1 : lastNumber[0].res + 1
   } catch {
      throw new Error()
   }
}

export function errorMsg(err: any) {
   switch (err.code) {
      case "ER_DUP_ENTRY":
         throw new Object({ status: 409, message: "Email or nickname already registred" })
      case "NOT_FOUND":
         throw new Object({ status: 404, message: "Invalid or not found ID" })
      default:
         throw new Object({ status: 500, message: "Unexpected error" })
   }
}