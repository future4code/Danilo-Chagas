import { performPurchase } from '../src/index'

describe("Teste unitário da função 'performPurchase'", () => {
    test("Teste com um usuário com o saldo maior do que o valor de compra", () => {
        const result = performPurchase({name:"Fulano", balance: 500},400)
        expect(result).toEqual({name:"Fulano", balance: 100})
    })
    test("Teste com um usuário com o saldo igual ao valor de compra", () => {
        const result = performPurchase({name:"Fulano", balance: 500},500)
        expect(result).toEqual({name:"Fulano", balance: 0})
    })
    test("Teste com um usuário com o saldo menor do que o valor de compra", () => {
        const result = performPurchase({name:"Fulano", balance: 500},600)
        expect(result).toBe(undefined)
    })
})