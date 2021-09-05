export default function validationCreateProduct(actionType: "new" | "edit", body: any) {
    const expectedObject: Array<string> = ["name", "description", "price", "travelFrom", "travelTo"]
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
        isValidProductName: (input: any): boolean => {
            if (!input.trim().length || input.length > 255) {
                errorTips.push("'name' is empty or longer than 255 characters")
                return false
            } else {
                return true
            }
        },
        isValidString: (input: any, keyName: any): boolean => {
            if (!input.trim().length || input.length > 255) {
                errorTips.push(`'${keyName}' is empty or longer than 255 characters`)
                return false
            } else {
                return true
            }
        },
        isValidProductPrice: (input: any): boolean => {
            if (!String(input).trim().length || String(input).trim().length > 9) {
                errorTips.push("'price' is empty or longer than 9 characters including dot")
                return false
            } else if (!Number(input)) {
                errorTips.push(`Invalid 'price'. Only numbers in '00.00' format is acceptable`)
                return false
            } else {
                return true
            }
        }
    }

    const expectedValues: any = {
        name: (input: any) => checkers.isValidProductName(input),
        description: (input: any) => checkers.isValidString(input, "description"),
        price: (input: any) => checkers.isValidProductPrice(input),
        travelFrom: (input: any) => checkers.isValidString(input, "travelFrom"),
        travelTo: (input: any) => checkers.isValidString(input, "travelTo")
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