import UserAccount from "./UserAccount";
import Transaction from "./Transaction";

export default class Bank {
    private accounts: UserAccount[]

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts
    }

    getUserAccount(name: string): UserAccount | any {
        const result = this.accounts.filter((item): any => {
            return item.getName() === name && item
        })
        return result
    }


    getUserTransactions(name: string): Transaction {
        const result = this.getUserAccount(name).map((item: any) => {
            return item.transactions.map((item: any) => item)

        })
        return result[0]
    }
}