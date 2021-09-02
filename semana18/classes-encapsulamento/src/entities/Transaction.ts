export default class Transaction {
    private date: string;
    private value: number;
    private description: string;

    constructor(date: string, value: number, description: string) {
        this.date = date;
        this.value = value;
        this.description = description
    }

    getDate(): string { return this.date }

    getValue(): number { return this.value }

    getDescription(): string { return this.description }

    getAll(): Object {
        const all = {
            date: this.date,
            values: this.value,
            description: this.description
        }
        return all
    }
}