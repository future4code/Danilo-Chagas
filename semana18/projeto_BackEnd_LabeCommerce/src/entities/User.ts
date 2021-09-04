export default class User {
    public name: string
    public email: string
    public age: number
    protected id?: string

    constructor(
        name: string,
        email: string,
        age: number,
        id?: string
    ) {
        this.name = name
        this.email = email
        this.age = age
        this.id && (this.id = id)
    }
    getId(): string | undefined { return this.id }

    setUser(): User | void {
        this.id = String(Number(new Date()))
    }

        
}