import { TravelInfo } from "../type"
import Product from "./Product"

export default class Ticket extends Product implements TravelInfo {
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public travel_from: string,
        public travel_to: string,
        public id?: string
    ) {
        super(name, description,price, id)
        this.travel_from = travel_from
        this.travel_to = travel_to
    }
    getId() { return this.id }
    setTicket(): Ticket | void {
        this.id = String(Number(new Date()))
    }
}