/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem vindo ao jogo de Blackjack!")

const cartaUser1 = comprarCarta()
const cartaUser2 = comprarCarta()
const cartaPc1 = comprarCarta()
const cartaPc2 = comprarCarta()

const rodada = () => {
   const usuario = `Usuário - cartas: ${cartaUser1.texto} ${cartaUser2.texto} - pontuação ${cartaUser1.valor + cartaUser2.valor} `
   const computador = `Computador - cartas: ${cartaPc1.texto} ${cartaPc2.texto} - pontuação ${cartaPc1.valor + cartaPc2.valor}`
   return console.log(`${usuario}
${computador}`)
}

const resultado = () => {
   const resultUser = cartaUser1.valor + cartaUser2.valor
   const resultPc = cartaPc1.valor + cartaPc2.valor

   if (resultUser > resultPc) {
      return console.log("O usuário ganhou!")
   } else if (resultUser < resultPc) {
      return console.log("O computador ganhou!")
   } else {
      return console.log("Empate!")
   }
}



// inicia rodada
if (confirm("Quer iniciar uma nova rodada?")) {
   rodada()
   resultado()
} else {
   console.log("O jogo acabou")
}


