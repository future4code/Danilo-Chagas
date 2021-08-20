import { OPERATION } from './types'


export const accountIndoData = [
    {
        id: 1628902028710,
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
        id: 1628902047125,
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

export const newAccountInfo = {
    currentBalance: 0,
    transactionsHistory: [
        {
            date: "",
            typeOperation: OPERATION,
            value: 0,
            details: ""
        }
    ],
    scheduledTransactions: []
}