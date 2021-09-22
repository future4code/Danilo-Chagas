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

        expect(characterMock).not.toBe(false)
    })

    test("Verifica o comportamento da função com um personagem com a vida igual a zero", () => {
        const characterMock: Character = {
            name: "John Doe",
            stamina: 0,
            strength: 100,
            defense: 100
        }

        const result = validateCharacter(characterMock)

        expect(characterMock).not.toBe(false)
    })
})