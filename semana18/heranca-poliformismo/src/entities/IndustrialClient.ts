/* P O L I M O R F I S M O */
//6

import { Client } from "../types"
import Industry from "./Industry"

export default class IndustrialClient extends Industry implements Client {

    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        protected machinesQuantity: number,
        public cep: string,
        private industrialRegistry: number
    ) {
        super(machinesQuantity, cep)
    }

    calculateBill(): number { return this.consumedEnergy * 0.45 + this.machinesQuantity * 100};
    getIndustrialRegistry(): number {return this.industrialRegistry}
}