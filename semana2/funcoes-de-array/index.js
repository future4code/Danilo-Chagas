/*Exercícios de interpretação de código

1.a)
    Vai imprimir o objeto, a posição do index do objeto, e repetir o array inteiro para cada elemento do array. Fará isso sequenciamente até terminar o array referenciado. Sendo: //retirei do console:
    { nome: 'Amanda Rangel', apelido: 'Mandi' } 0 [ { nome: 'Amanda Rangel', apelido: 'Mandi' },
    { nome: 'Laís Petra', apelido: 'Laura' },
    { nome: 'Letícia Chijo', apelido: 'Chijo' } ]
    { nome: 'Laís Petra', apelido: 'Laura' } 1 [ { nome: 'Amanda Rangel', apelido: 'Mandi' },
    { nome: 'Laís Petra', apelido: 'Laura' },
    { nome: 'Letícia Chijo', apelido: 'Chijo' } ]
    { nome: 'Letícia Chijo', apelido: 'Chijo' } 2 [ { nome: 'Amanda Rangel', apelido: 'Mandi' },
    { nome: 'Laís Petra', apelido: 'Laura' },
    { nome: 'Letícia Chijo', apelido: 'Chijo' } ]

2.a)
    Vai imprimir
    [Amanda Rangel, Laís Petra, Letícia Chijo]

3.a)
    Imprimirá todos os objetos/elementos que contiverem o valor diferente de Chijo. Pegará o objeto inteiro.
    [{ nome: "Amanda Rangel", apelido: "Mandi" },{ nome: 'Laís Petra', apelido: 'Laura' } ]
]
*/


//Exercícios de escrita de código

//1)
const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]


//1.a)
const somenteNomesPets = pets.map((item) => {
    return item.nome
})
console.log(somenteNomesPets)


//1.b)
const somenteRacaSalsicha = pets.filter((item) => {
    return item.raca === "Salsicha"
})

console.log(somenteRacaSalsicha)


//1.c)
const msgDescPoodles = pets.filter((item) => {
    return item.raca === "Poodle"
}).map((item) => {
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`)
})


//2)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]


//2.a)
const somenteNomesProdutos = produtos.map((item) => {
    return item.nome
})

console.log(somenteNomesProdutos)

//2.b)
const arrayNomeDesc5 = produtos.map((item) => {
    const novoArray = [item.nome, (item.preco * 0.95).toFixed(2)]
    return novoArray
})

console.log(arrayNomeDesc5)

//2.c)
const arrayCatBebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
})

console.log(arrayCatBebidas)

//2.d)
const arrayContemYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
})

console.log(arrayContemYpe)

//2.e)
const arrayCompreYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
}).map((item) => {
    return `Compre ${item.nome} por R$${item.preco}`
})

console.log(arrayCompreYpe)


//DESAFIOS


//1)