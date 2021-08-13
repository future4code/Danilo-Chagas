export type User = {
    name: string,
    CPF: number,
    birthday: string,
    currentBalance: number,
    transactionsHistory: transactions[],
    scheduledTransactions: Array<any>
}

export enum OPERATION {
    CASHIN = "Cash in",
    TRANSFERIN = "Transfer in",
    TRANSFEROUT = "Transfer out",
    PAYMENT = "Payment"
}   

export type transactions = {
    date: string,
    typeOperation: OPERATION,
    value: number,
    details: string,
}