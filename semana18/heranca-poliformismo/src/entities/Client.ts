/* P O L I M O R F I S M O */
//4

export default class Client {
    protected name: string;
    protected registrationNumber: number;
    protected consumedEnergy: number;
    protected calculateBill(): number {return this.consumedEnergy * 0.75};

    constructor(
        name: string,
        registrationNumber: number,
        consumedEnergy: number
    ) {
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
    }
}