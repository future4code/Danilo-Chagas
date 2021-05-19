console.log("Bem vindo ao jogo de Blackjack!")

let cartasUser = [comprarCarta(), comprarCarta()]
let cartasPc = [comprarCarta(), comprarCarta()]

function compraCarta(informaPlayer) {
   return informaPlayer.push(comprarCarta())
}

function verificaInicio() {
   while (22 <= (cartasUser[0].valor + cartasUser[1].valor)) {
      cartasUser = []
      compraCarta(cartasUser)
      compraCarta(cartasUser)
   }
   while (22 <= (cartasPc[0].valor + cartasPc[1].valor)) {
      cartasPc = []
      compraCarta(cartasPc)
      compraCarta(cartasPc)
   }
   return true
}

function gameReset() {
   cartasUser = []
   compraCarta(cartasUser)
   compraCarta(cartasUser)

   cartasPc = []
   compraCarta(cartasPc)
   compraCarta(cartasPc)
}

const perguntaMaisCarta = () => {
   let segueJogando = confirm(`Suas cartas são ${cartasUser.map((item) => { return item.texto })}.
A carta revelada do computador é ${cartasPc[0].texto}.
Deseja comprar mais uma carta?`)
   return segueJogando
}

const fimDeJogo = () => {
   let scoreUser = somaCartas(cartasUser)
   let scorePc = somaCartas(cartasPc)
   let placar
   if (scoreUser === scorePc) {
      placar = 'Empate!'
   } else if (((scorePc < scoreUser) && (scoreUser <= 21)) || (scorePc > 21)) {
      placar = 'O usuário ganhou!'
   } else {
      placar = 'O computador ganhou!'
   }
   return `Suas cartas são ${cartasUser.map((item) => { return item.texto })}. Sua pontuação é ${scoreUser}.
As cartas do computador são ${cartasPc.map((item) => { return item.texto })}. A pontuação do computador é ${scorePc}.
${placar}`
}

const somaCartas = (informaPlayer) => {
   let soma = 0
   for (let item of informaPlayer) {
      soma = soma + item.valor
   }
   return soma
}

const rodada = () => {
   if (somaCartas(cartasUser) === 21) {
      fimDeJogo()
   } else {
      while (somaCartas(cartasUser) <= 21 && perguntaMaisCarta()) {
         compraCarta(cartasUser)
      }
   }
   if (somaCartas(cartasUser) <= 21) {
      while ((somaCartas(cartasPc) <= somaCartas(cartasUser)) && (somaCartas(cartasPc) <= 21)) {
         compraCarta(cartasPc)
      }
   }
   return console.log(fimDeJogo())
}

let iniciaJogo = confirm("Quer iniciar uma nova rodada?")

while ((iniciaJogo === true) && (verificaInicio() === true)) {
   rodada()
   alert(fimDeJogo())
   iniciaJogo = confirm("Quer iniciar uma nova rodada?")
   if (iniciaJogo) {
      gameReset()
   }
}
console.log("Atualize a página para jogar!")
alert("Atualize a página para jogar!")
