import { postDTO, POST_TYPE } from "../src/business/PostBusiness/PostBusiness"
import { closeConnection, createTables } from "../src/data/migration"
import SQLPostDatabase from "../src/data/PostDatabase/SQLPostDatabase"
import { HashManager } from "../src/services/HashManager"
import { IdGenerator } from "../src/services/IdGenerator"
import { User } from "../src/models/User"
import SQLUserDatabase from "../src/data/UserDatabase/SQLUserDatabase"
import connection from "../src/data/connection"

describe("Teste com async", () => {

    beforeAll(async () => {
        try {
            await createTables()
        } catch (err) {
            console.error(err)
        }
    })

    test("Cria um post no banco de dados e verifique se ele foi criado (fazendo uma query pelo id)", async () => {

        expect.assertions(1)

        try {

            const user: User = {
                id: new IdGenerator().generateId(),
                name: "Fulano de Tal",
                email: "fdt@email.com"
            }

            user.hashedPassword = await new HashManager().hash(user.id)
            
            const createUser = await new SQLUserDatabase().saveToDatabase(user)
            
            expect(createUser)

            const post: postDTO = {
                postId: new IdGenerator().generateId(),
                userId: user.id,
                description: "um teste com Jest",
                createdAt: Number(new Date()),
                imageLink: "https://github.com/facebook/jest/raw/06d2c2c54b11db054a2abb4faec9b7ff3ab52aa0/website/static/img/jest-readme-headline.png",
                postType: POST_TYPE.NORMAL
            }
            
            const postId: any = await new SQLPostDatabase().createPost(post)
            
            const getPostById = await new SQLPostDatabase().getPostById(postId)

            expect(getPostById[0]).toEqual({
                ...post,
                userName: user.name
            })

        } catch (err: any) {
            console.error(err)
            expect(err)
        }

    })

    afterAll(async () => {
        await connection.destroy()
    })

})