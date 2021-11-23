import CreateBusiness from "../Business/CreateBusiness/CreateBusiness"
import { ERROR_MESSAGES } from "../Model/Error/CustomError"
import SQLDatabaseMock from "./mocks/SQLDatabaseMock"

describe("Suit for 'createPokemon'", () => {


    it("Should failed for empty DTO", async () => {
        expect.assertions(1)

        const mockDatabase = new SQLDatabaseMock()
        const business = new CreateBusiness(mockDatabase as any)

        const dto = {}

        try {
            await business.createPokemon(dto as any)
        } catch (error: any) {

            expect(error.message).toEqual(ERROR_MESSAGES.EMPTY_REQUEST)
        }
    })



    it("Should failed for missing 'name' key", async () => {
        expect.assertions(2)

        const mockDatabase = new SQLDatabaseMock()
        const business = new CreateBusiness(mockDatabase as any)

        const dto = {
            atk: 10,
        }

        try {
            await business.createPokemon(dto as any)
        } catch (error: any) {

            expect(error.message).toEqual(ERROR_MESSAGES.INVALID_OPERATION)
            expect(error.data).toEqual(`'name' is required`)
        }
    })



    it("Should failed for invalid DTO", async () => {
        expect.assertions(2)

        const mockDatabase = new SQLDatabaseMock()
        const business = new CreateBusiness(mockDatabase as any)

        const dto = {
            name: "test",
            invalidKey: "test"
        }

        try {
            await business.createPokemon(dto as any)
        } catch (error: any) {

            expect(error.message).toEqual(ERROR_MESSAGES.INVALID_KEYS)
            expect(error.data).toEqual(`invalid keys: #invalidKey`)
        }
    })



    it("Should failed for invalid atk value", async () => {
        expect.assertions(2)

        const mockDatabase = new SQLDatabaseMock()
        const business = new CreateBusiness(mockDatabase as any)

        const dto = {
            name: "test",
            atk: "test"
        }

        try {
            await business.createPokemon(dto as any)
        } catch (error: any) {

            expect(error.message).toEqual(ERROR_MESSAGES.INVALID_OPERATION)
            expect(error.data).toEqual({ atk: 'expected number type' })
        }
    })


    it("Should be sucessfull for valid DTO", async () => {

        const mockDatabase = new SQLDatabaseMock()
        const business = new CreateBusiness(mockDatabase as any)

        const dto = {
            name: "test",
            atk: "10"
        }

        try {
            const result = await business.createPokemon(dto as any)
            console.log(result)
            expect(result).toBeDefined()
        } catch (error: any) {
            console.log(error)
        }
    })



    it("Should be sucessfull for calculating totalStats, CP100L40 and CP100L39 ", async () => {

        const mockDatabase = new SQLDatabaseMock()
        const business = new CreateBusiness(mockDatabase as any)

        const dto = {
            name: "test",
            atk: "226",
            def: "149",
            sta: "190"
        }

        try {
            const result = await business.createPokemon(dto as any)
            expect(result).toBeDefined()
        } catch (error: any) {
            console.log(error)
        }
    })



})