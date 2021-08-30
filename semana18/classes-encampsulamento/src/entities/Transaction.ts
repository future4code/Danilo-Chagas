export default class Transaction {
    private date: string;
    private value: number;
    private description: string;

    constructor(date: string, value: number, description: string) {
        this.date = date;
        this.value = value;
        this.description = description
    }

    getDate(){return this.date}

    getValue(){return this.value}

    getDescription(){return this.description}
}