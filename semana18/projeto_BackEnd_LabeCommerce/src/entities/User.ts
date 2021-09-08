export default class User {
    constructor(
        public name: string,
        public email: string,
        public age: number,
        protected id?: string
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