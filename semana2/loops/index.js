/* Exercícios de interpretação de código

1)
    O código incrementa +1 na variavel 'valor' até que 'i' seja 4 e concomitante soma o proprio valor de i acumulado a cada ciclagem.
    1º ciclo | 0+0 = 0
    2º ciclo | 0+1 = 1
    3º ciclo | 1+2 = 3
    4º ciclo | 3+3 = 6
    5º ciclo | 6+4 = 10

    Será impresso:
    10  


2.a)
    19
    21
    23
    25
    27
    30


2.b)
    Sim, seria suficiente; Na condicional if, retirar '> 18', pois essa condição restringe a impressão somente para valores maiores de 18 do array 


3.c)
0
00
000
0000
*/


//Exercícios de escrita de código

//1)a
const inputQt = Number(prompt("Quantos pets você tem?"))
if (inputQt === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else {
    const arrayPet = []
    let i = 0

    while (i < inputQt) {
        const inserePet = prompt(`Qual o nome do seu ${i+1}º pet?`)
        arrayPet.push(inserePet)
        i++
    }
    console.log(arrayPet)
}
