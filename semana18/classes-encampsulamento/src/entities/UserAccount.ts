// import { Transaction } from '../types'
import Transaction from "./Transaction";

//1b, 2)
export default class UserAccount {
   private cpf: string;
   private name: string;
   private age: number;
   private balance: number = 0;
   private transactions: Transaction[] = [];

   constructor(
      cpf: string,
      name: string,
      age: number,
   ) {
      console.log("Chamando o construtor da classe UserAccount")
      this.cpf = cpf;
      this.name = name;
      this.age = age;
   }

   getCpf(){return this.cpf}
   getName(){return this.name}
   getAge(){return this.age}
   getBalance(){return this.balance}
   getTransactions(){return this.transactions}
  
   //incompleto
   // setTransactions(
   //    date: string,
   //    value: number,
   //    description: string
   // ){
   //    new Transaction(date)}
}