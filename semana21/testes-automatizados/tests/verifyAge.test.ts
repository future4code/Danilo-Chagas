import { Customer, LOCATION, NACIONALITY, Result, verifyAge } from "../src";

describe("Teste unitário da função 'verifyAge'", () => {

    test("Recebe um usuário brasileiro que possa entrar em um estabelecimento no Brasil", () => {
        const casino = { name: "GranRoyale", location: LOCATION.BRAZIL }
        const customers: Customer[] = [{
            name: "Fulano Silva",
            age: 18,
            nacionality: NACIONALITY.BRAZILIAN
        }]
        const reportList: Result = {
            brazilians: {
                allowed: ["Fulano Silva"],
                unallowed: []
            },
            americans: {
                allowed: [],
                unallowed: []
            }
        }
        const result = verifyAge(casino, customers)

        expect(result).toEqual(reportList)
    })

    test("Recebe um usuário americano que possa entrar em um estabelecimento no Brasil", () => {
        const casino = { name: "GranRoyale", location: LOCATION.BRAZIL }
        const customers: Customer[] = [{
            name: "John Doe",
            age: 18,
            nacionality: NACIONALITY.AMERICAN
        }]
        const reportList: Result = {
            brazilians: {
                allowed: [],
                unallowed: []
            },
            americans: {
                allowed: ["John Doe"],
                unallowed: []
            }
        }
        const result = verifyAge(casino, customers)

        expect(result).toEqual(reportList)
    })

    test("Recebe dois usuários brasileiros e dois americanos. Todos devem ter a idade de 19 anos e quererem entrar em um estabelecimento nos Estados Unidos", () => {
        const casino = { name: "GranRoyale", location: LOCATION.EUA }
        const customers: Customer[] = [{
            name: "John Doe",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }, {
            name: "Dick Contoso",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }, {
            name: "Fulano Silva",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }, {
            name: "Beltrano Souza",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }]
        const reportList: Result = {
            brazilians: {
                allowed: [],
                unallowed: ["Fulano Silva", "Beltrano Souza"]
            },
            americans: {
                allowed: [],
                unallowed: ["John Doe", "Dick Contoso"]
            }
        }
        const result = verifyAge(casino, customers)
 
        expect(result).toEqual(reportList)
    })

    test("Recebe dois usuários brasileiros e dois americanos. Os brasileiros devem ter 19 anos e os americanos 21 anos. Eles querem estrar em um estabelecimento nos Estados Unidos", () => {
        const casino = { name: "GranRoyale", location: LOCATION.EUA }
        const customers: Customer[] = [{
            name: "John Doe",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }, {
            name: "Dick Contoso",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }, {
            name: "Fulano Silva",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }, {
            name: "Beltrano Souza",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }]
        const reportList: Result = {
            brazilians: {
                allowed: [],
                unallowed: ["Fulano Silva", "Beltrano Souza"]
            },
            americans: {
                allowed: ["John Doe", "Dick Contoso"],
                unallowed: []
            }
        }
        const result = verifyAge(casino, customers)
 
        expect(result).toEqual(reportList)
    })
})