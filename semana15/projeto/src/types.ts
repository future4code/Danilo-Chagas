export type User = {
    name: string,
    cpf: number | string,
    birthday: string,
    id:number,
}

export type AccountInfos = {
id: number,
currentBalance: number,
transactionsHistory: transactions[],
scheduledTransactions: Array<any>
}

export enum OPERATION {
    CASHIN = "Cash in",
    TRANSFERIN = "Transfer in",
    TRANSFEROUT = "Transfer out",
    PAYMENT = "Payment",
    NODATA = ""
}   

export type transactions = {
    date: string,
    typeOperation: OPERATION,
    value: number,
    details: string,
}