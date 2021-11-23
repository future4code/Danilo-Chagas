import ReadDatabaseSQL from "../Data/ReadDatabase/ReadDatabaseSQL"

describe("Test Suit for 'getAllDetails'", () => {

    // it("Should be successfully for valid dto ", async () => {
    //     const realDatabase = new ReadDatabaseSQL()

    //     const dto = {
    //         limit: 10,
    //         offset: 0,
    //         queries: {
    //             name: 'Bulbasaur',
    //             type1: 'grass',
    //         }
    //     }

    //     try {
    //         const result = await realDatabase.getAllDetails(dto as any)
    //         expect(result.lentgh).toBeGreaterThan(1)
    //     } catch (error) {
    //         console.error
    //     }
    // })

    // it("Should be successfully for valid dto with conditional query key", async () => {
    //     const realDatabase = new ReadDatabaseSQL()

    //     const dto = {
    //         limit: 10,
    //         offset: 0,
    //         queries: {
    //             type1: 'grass',
    //             atk: ['>','100'],
    //             def: ['<',118]
    //         }
    //     }

    //     try {
    //         const result = await realDatabase.getAllDetails(dto as any)
    //         console.log(result)
    //         expect(result.data).toBeGreaterThan(1)
    //     } catch (error) {
    //         console.error
    //     }
    // })

    it("Should be successfully for valid dto with conditional query key II", async () => {
        const realDatabase = new ReadDatabaseSQL()

        const dto = {
            limit: 10,
            offset: 0,
            queries: {
                name: ["like","%bul%"]
            }
        }

        try {
            const result = await realDatabase.getAllDetails(dto as any)
            console.log(result)
            expect(result.result).toBeGreaterThan(1)
        } catch (error) {
            console.error
        }
    })

})