//Exercício 1

function inverteArray(array) {
  // implemente sua lógica aqui
   //const array = [0, 8, 23, 16, 10, 15, 41, 12, 13]
   let novoArray = []
   let i = array.length-1
   while (novoArray.length < array.length) {
      novoArray.push(array[i])
      i--      
   } return novoArray
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   // implemente sua lógica aqui
   let novoArray = []
   let i = 0
   for (cadaItem of array) {
      if(array[i]%2 === 0) {
         novoArray.push(array[i]**2)
      }
      i++      
   } return novoArray
}

//Exercício 3

function retornaNumerosPares (array) {
   // implemente sua lógica aqui
   let novoArray = []
   let i = 0
   for (cadaItem of array) {
      if(array[i]%2 === 0) {
         novoArray.push(array[i])
      }
      i++      
   } return novoArray
}

//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
   let maiorNumero = 0
   let i = 0
      for (item of array) {
         if (item > maiorNumero) {
            maiorNumero = item
         }
      }
   return maiorNumero
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   // implemente sua lógica aqui
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2 
   const booleano4 = !booleano3 

   const item1 =  booleano1 && booleano2 && !booleano4
   const item2 = (booleano1 && booleano2) || !booleano3
   const item3 = (booleano2 || booleano3) && (booleano4 || booleano1)
   const item4 = !(booleano2 && booleano3) || !(booleano1 && booleano3)
   const item5 = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

   let array = []
   array.push(item1,item2,item3,item4,item5)

   return array
}

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
   let i = 0
   let array = []
   while (array.length<n) {
      if (i%2 === 0) {
         array.push(i)
      }
      i++
   }
   return array
}

// Exercício 8

function checaTriangulo(a, b, c) {
   // implemente sua lógica aqui
   const ladosTriang = [a, b, c]
   let array = [a]
   let tipo
   for (numero of ladosTriang) {
      if (numero > ladosTriang[0]) {
         array.push(numero)
      }
   } 
   if (array.length === 3) {
      tipo = 'Escaleno'
   } else if (array.length === 2) {
      tipo = 'Isósceles'
   } else {
      tipo = 'Equilátero'
   }
   return tipo
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
   let maiorNumero
   let menorNumero
   if (num1<num2) {
      maiorNumero = num2
      menorNumero = num1
   } else {
      maiorNumero = num1
      menorNumero = num2
   }
   const maiorDivisivelporMenor = maiorNumero%menorNumero === 0
   const diferenca = maiorNumero-menorNumero
   const objeto = {
      'maiorNumero': maiorNumero,
      'maiorDivisivelporMenor': maiorDivisivelporMenor,
      'diferenca': diferenca
   }
   return objeto
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
   
   // let novoArray
   // novoArray = array.sort((a,b)=>{return a-b})
   // novoArray = [novoArray[novoArray.length-2],novoArray[1]] //ou

   let novoArray = [...array]
   novoArray.splice(novoArray.indexOf(Math.max(...array)), 1)
   novoArray.splice(novoArray.indexOf(Math.min(...array)), 1)
   novoArray = [novoArray[novoArray.indexOf(Math.max(...novoArray))], novoArray[novoArray.indexOf(Math.min(...novoArray))]]

   return novoArray
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
   // let novoArray
   // novoArray = array.sort((a,b)=>{return a-b})  //ou

   let arrayRecebido = [...array]
   let novoArray = []
   let i = 0
   while (i <= array.length - 1) {
      novoArray.push(Math.min(...arrayRecebido))
      arrayRecebido.splice(arrayRecebido.indexOf(novoArray[i]), 1)
      i++
   }

   return novoArray
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
   const objeto = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci'],
   }
   return objeto
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
   const objeto = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci'],
   }
   return `Venha assistir ao filme ${objeto.nome}, de ${objeto.ano}, dirigido por ${objeto.diretor} e estrelado por ${objeto.atores[0]}, ${objeto.atores[1]}, ${objeto.atores[2]}, ${objeto.atores[3]}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui

   const calcLargura = lado1
   const calcAltura = lado2
   const calcPerimetro = 2*(lado1+lado2)
   const calcArea = lado1*lado2

   const objeto = {
      largura: calcLargura,
      altura: calcAltura,
      perimetro: calcPerimetro,
      area: calcArea
   }
   return objeto
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui

   const anonimiza = {
      nome: "ANÔNIMO",
	   idade: pessoa.idade,
	   email: pessoa.email,
	   endereco: pessoa.endereco
   }
   return anonimiza
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   novoArray = arrayDePessoas.filter((item) => {
      return item.idade >= 20
   })

   return novoArray
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   novoArray = arrayDePessoas.filter((item) => {
      return item.idade < 20
   })

   return novoArray
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
   let novoArray = []
   for (cadaItem of array) {
      novoArray.push(cadaItem * 2)
   }
   return novoArray
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   // implemente sua lógica aqui
   let novoArray = []
   for (cadaItem of array) {
      novoArray.push((cadaItem * 2).toString())
   }
   return novoArray
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
   let novoArray = []
   for (cadaItem of array) {
      if (cadaItem%2===0) {
       novoArray.push(`${cadaItem} é par`)
      } else {
       novoArray.push(`${cadaItem} é ímpar`)
      }
   }
   return novoArray
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
   let novoArray = pessoas.filter((item)=>{
      return  14<item.idade && item.idade<60 && item.altura>=1.5
   })
      return novoArray
}

// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
   let novoArray = pessoas.filter((item)=>{
      return  item.idade>60 || item.idade<14 || item.altura<1.5
   })
      return novoArray
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
  
 }
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
 
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}