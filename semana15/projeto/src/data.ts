import {User, OPERATION} from './types'

export const users: User[] = [
    {
        name: "Fulano",
        cpf: 12345678901,
        birthday: "20/02/1988",
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
        cpf: 12345678902,
        birthday: "20/03/1987",
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