
export default class Product {
    constructor(
        protected id: string,
        protected name: string,
        protected description: string,
        protected price: number
        ){

        }
        getId(){return this.id}
        setProduct(
            name: string,
            description: string,
            price: number
        ): Product|void {
            this.id = String(Number(new Date()))
            this.name = name
            this.description = description
            this.price = price
        }
}