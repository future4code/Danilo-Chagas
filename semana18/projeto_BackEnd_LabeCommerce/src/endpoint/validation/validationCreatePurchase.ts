export default function validationCreatePurchase(actionType: "new" | "edit", body: any) {
    const expectedObject: Array<string> = ["userId", "productId", "quantity"]
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
        isValidId: (input: any, keyName: any): boolean => {
            if (!input.trim().length || input.length > 255) {
                errorTips.push(`'${keyName}' is empty or longer than 255 characters`)
                return false
            } else {
                return true
            }
        },
        isValidQuantity: (input: any): boolean => {
            if (!String(input).trim().length || String(input).trim().length > 255) {
                errorTips.push("'quantity' is empty or longer than 255 characters including dot")
                return false
            } else if (!Number.isInteger(input)) {
                errorTips.push(`Invalid 'quantity'. Only integer number is acceptable`)
                return false
            } else {
                return true
            }
        }
    }

    const expectedValues: any = {
        userId: (input: any) => checkers.isValidId(input, "userId"),
        productId: (input: any) => checkers.isValidId(input, "productId"),
        quantity: (input: any) => checkers.isValidQuantity(input)
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