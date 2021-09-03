import { TravelInfo } from "../type"
import Product from "./Product"

export default class Ticket extends Product implements TravelInfo {
    constructor(
        protected id: string,
        protected name: string,
        protected description: string,
        protected price: number,
        public travel_from: string,
        public travel_to: string,
    ) {
        super(id, name, description, price)
    }
    getId() { return this.id }
    setTravel(
        name: string,
        description: string,
        price: number,
        travel_from: string,
        travel_to: string
    ): Ticket | void {
        this.id = String(Number(new Date()))
        this.name = name
        this.description = description
        this.price = price
        this.travel_from = travel_from
        this.travel_to = travel_to
    }
}