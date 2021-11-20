import ReadBusiness from "../Business/ReadBusiness/ReadBusiness";
import { ERROR_MESSAGES } from "../Model/Error/CustomError";
import { getAllDetailsDTO, POKEMON_KEY } from "../Model/Pokemon";
import SQLDatabaseMock from "./mocks/SQLDatabaseMock";

describe('Test Suit for "isValidQueryKey"', () => {

    it('Should be failed to empty dto', async () => {

        expect.assertions(1)

        const mockDatabase = new SQLDatabaseMock()
        const business = new ReadBusiness(mockDatabase)

        const dto = {} as getAllDetailsDTO

        try {
            const result = await business.getAllDetails(dto)
        } catch (error: any) {
            expect(error.message).toEqual(ERROR_MESSAGES.EMPTY_REQUEST)
        }

    });


    it('Should be failed to invalid dto keys ', async () => {

        expect.assertions(2)

        const mockDatabase = new SQLDatabaseMock()
        const business = new ReadBusiness(mockDatabase)

        const dto = { page: 1, invalidKey: {} }

        try {
            const result = await business.getAllDetails(dto as any)
        } catch (error: any) {

            expect(error.message).toEqual(ERROR_MESSAGES.INVALID_KEYS)
            expect(error.data).toEqual('needed keys: "invalidKey"')
        }

    });


    it('Should be failed to invalid queries keys ', async () => {

        expect.assertions(2)

        const mockDatabase = new SQLDatabaseMock()
        const business = new ReadBusiness(mockDatabase)

        const dto = { page: 1, queries: { invalidKey: '' } }

        try {
            const result = await business.getAllDetails(dto as any)
        } catch (error: any) {

            expect(error.message).toEqual(ERROR_MESSAGES.INVALID_KEYS)
            expect(error.data).toEqual('invalid keys: "invalidKey"')
        }

    });


});