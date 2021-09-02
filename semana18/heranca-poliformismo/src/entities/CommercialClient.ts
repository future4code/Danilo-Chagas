/* P O L I M O R F I S M O */
//5

import { Client } from "../types"
import Commerce from "./Commerce"

export default class CommercialClient extends Commerce implements Client {

    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        public floorsQuantity: number,
        public cep: string,
        private cnpj: string

    ) {
        super(floorsQuantity, cep)
    }

    calculateBill(): number { return this.consumedEnergy * 0.53 };
    getCnpj(): string {return this.cnpj}
}