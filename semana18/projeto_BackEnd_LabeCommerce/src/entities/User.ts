export default class Users {
    constructor(
        protected id: string,
        protected name: string,
        protected email: string,
        protected age: number
    ){

    }
    getId():string {return this.id}

    setUser(
        name: string,
        email: string,
        age: number
    ): Users|void {
        this.id = String(Number(new Date()))
        this.name = name
        this.email = email
        this.age = age
    }
}