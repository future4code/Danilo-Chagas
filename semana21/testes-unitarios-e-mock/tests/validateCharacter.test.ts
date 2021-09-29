import { Character } from "../src/models/types"
import validateCharacter from "../src/validateCharacter"

describe("'validateCharacter' Testes", () => {
    test(`Verifica o comportamento da função com um personagem com o nome vazio, isto é, ""`, () => {

        const characterMock: Character = {
            name: "",
            stamina: 1500,
            strength: 100,
            defense: 100
        }

        const result = validateCharacter(characterMock)

        expect(result).not.toBe(true)
    })

    test("Verifica o comportamento da função com um personagem com a vida igual a zero", () => {
        const characterMock: Character = {
            name: "John Doe",
            stamina: 0,
            strength: 100,
            defense: 100
        }

        const result = validateCharacter(characterMock)

        expect(result).not.toBe(true)
    })

    test("Verifica o comportamento da função com um personagem com a força igual a zero", () => {
        const characterMock: Character = {
            name: "John Doe",
            stamina: 1500,
            strength: 0,
            defense: 100
        }

        const result = validateCharacter(characterMock)

        expect(result).not.toBe(true)
    })

    test("Verifica o comportamento da função com um personagem com a defesa igual a zero", () => {
        const characterMock: Character = {
            name: "John Doe",
            stamina: 1500,
            strength: 100,
            defense: 0
        }

        const result = validateCharacter(characterMock)

        expect(result).not.toBe(true)
    })

    test("Verifica o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo", () => {
        const characterMock1: Character = {
            name: "John Doe",
            stamina: -1500,
            strength: 100,
            defense: 1
        }

        const result = validateCharacter(characterMock1)

        expect(result).not.toBe(true)
    })

    test("Verifica o comportamento da função com um personagem com as informações validas", () => {
        const characterMock1: Character = {
            name: "John Doe",
            stamina: 1500,
            strength: 100,
            defense: 200
        }

        const result = validateCharacter(characterMock1)

        expect(result).not.toBe(false)
    })
})