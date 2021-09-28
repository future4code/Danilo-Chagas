/* E3*/

//Entrada
export enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
}

export enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
}

export interface Customer {
    name: string;
    age: number;
    nacionality: NACIONALITY;
}

export interface Casino {
    name: string;
    location: LOCATION;
}

// Saída
export interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
}

export interface ResultItem {
    allowed: string[];
    unallowed: string[];
}


export function verifyAge(casino: Casino, customers: Customer[]): Result {

    const brazilians: ResultItem = {
        allowed: [],
        unallowed: []
    }

    const americans: ResultItem = {
        allowed: [],
        unallowed: []
    }

    if (casino.location === "EUA") {
        customers.forEach((user: Customer) => {
            user.age >= 21 ?
                (user.nacionality === "AMERICAN" && americans.allowed.push(user.name))
                || (user.nacionality === "BRAZILIAN" && brazilians.allowed.push(user.name))
                : (user.nacionality === "AMERICAN" && americans.unallowed.push(user.name))
                || (user.nacionality === "BRAZILIAN" && brazilians.unallowed.push(user.name))
        })
    }

    if (casino.location === "BRAZIL") {
        customers.forEach((user: Customer) => {
            user.age >= 18 ?
                (user.nacionality === "AMERICAN" && americans.allowed.push(user.name))
                || (user.nacionality === "BRAZILIAN" && brazilians.allowed.push(user.name))
                : (user.nacionality === "AMERICAN" && americans.unallowed.push(user.name))
                || (user.nacionality === "BRAZILIAN" && brazilians.unallowed.push(user.name))
        })
    }

    return { brazilians, americans }

}