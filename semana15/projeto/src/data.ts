import {user, OPERATION} from './types'

export const users: user[] = [
    {
        name: "Fulano",
        CPF: 12345678901,
        currentBalance: 1,
        transactionsHistory: [
            {
                date: "2021-08-13T03:00:00.000Z",
                typeOperation: OPERATION.CASHIN,
                value: 1,
                details: ""
            }
        ],
        scheduledTransactions: []
    },

    {
        name: "Beltrano",
        CPF: 12345678902,
        currentBalance: 3,
        transactionsHistory: [
            {
                date: "2021-08-12T03:00:00.000Z",
                typeOperation: OPERATION.CASHIN,
                value: 3,
                details: ""
            }
        ],
        scheduledTransactions: []
    }
]