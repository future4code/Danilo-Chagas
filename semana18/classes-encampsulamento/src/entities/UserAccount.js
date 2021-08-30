"use strict";
exports.__esModule = true;
//1b
var UserAccount = /** @class */ (function () {
    function UserAccount(cpf, name, age) {
        this.balance = 0;
        this.transactions = [];
        console.log("Chamando o construtor da classe UserAccount");
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
    return UserAccount;
}());
var userAccount = new UserAccount("12345678901", "Fulano", 27);
userAccount;
