export default function validationCreateUser(actionType: "new" | "edit", body: any) {
    const expectedObject: Array<string> = ["name", "email", "age"]
    const errorTips: Array<any> = []
    const checkers: any = {
        isValidBodyLength: (input: any): boolean => {
            return Object.keys(input).length === expectedObject.length
        },
        isValidBodyKeys: (input: any): boolean => {
            return Object.getOwnPropertyNames(input)
                .map((item: any) => expectedObject
                    .includes(item)).every((item: any) => item === true)
        },
        isValidName: (input: any): boolean => {
            if (input.trim().length > 0 && input.trim().length <= 255) {
                if (!isNaN(input) || input.split("").some((item: any) => Number(item))) {
                    errorTips.push("Invalid 'name'. Only letter is acceptable")
                    return false
                } else {
                    return true
                }
            } else {
                errorTips.push("'name' is empty or longer than 255 characters")
                return false
            }
        },
        isValidEmail: (input: any): boolean => {
            if (!input.trim().length || input.trim().length > 255) {
                errorTips.push("'email' is empty or longer than 255 characters")
                return false
            } else if (!input.includes("@") ? true
                : !input.split("@")[0] ? true
                    : !input.split("@")[1].includes(".") ? true
                        : input.split("@")[1].split(".")[0].length > 0 &&
                            input.split("@")[1].split(".")[1].length > 0 ? false : true) {
                errorTips.push("Invalid 'email'")
                return false
            } else {
                return true
            }
        },
        isValidAge: (input: any): boolean => {
            if (!String(input).trim().length || String(input).trim().length > 255) {
                errorTips.push("'age' is empty or longer than 255 characters")
                return false
            } else if (!Number(input)) {
                errorTips.push("Invalid 'age'. Only numbers is acceptable")
                return false
            } else if (Number(input) < 18) {
                errorTips.push("'age' must be higher than 18 years old")
                return false
            } else {
                return true
            }
        }
    }

    const expectedValues: any = {
        name: (input: any) => checkers.isValidName(input),
        email: (input: any) => checkers.isValidEmail(input),
        age: (input: any) => checkers.isValidAge(input)
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