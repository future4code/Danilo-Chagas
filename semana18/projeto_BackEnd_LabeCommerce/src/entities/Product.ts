export default class Product {
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public id?: string
    ) {
        this.name = name
        this.description = description
        this.price = price
        this.id && (this.id = id)
    }

    getId() { return this.id }

    setProduct(): Product | void {
        this.id = String(Number(new Date()))
    }
    
}