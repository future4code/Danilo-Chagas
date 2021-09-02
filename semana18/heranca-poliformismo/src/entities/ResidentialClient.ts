/* P O L I M O R F I S M O */
//4

// import Client from "./Client";
import { Client } from "../types";
import Residence from "./Residence";

export default class ResidentialClient extends Residence implements Client {

    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private CPF: number,
        public residentsQuantity: number,
        public cep: string,
    ) {
        super(residentsQuantity, cep)
    }

    calculateBill(): number { return this.consumedEnergy * 0.75 };
    getCPF(){
        return this.CPF
    }
}