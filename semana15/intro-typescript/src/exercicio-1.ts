//1a)
const minhaString: string = "string"

//1a)R.: ao tentar atribuir um numero, o VSCode indica erro na declaração da constante

//1b)
const meuNumero: number = 3

//1b)R.: ao tentar atribuir uma string, o VSCode indica erro na declaração da constante

//1d)
enum CORES {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta",
}

//1c)
type pessoa = {
    nome: string,
    idade: number,
    corFavorita: CORES
}

const pessoa1: pessoa = {
    nome: 'Fulano',
    idade: 33,
    corFavorita: CORES.AMARELO
}

const pessoa2: pessoa = {
    nome: 'Beltrano',
    idade: 23,
    corFavorita: CORES.AZUL
}

const pessoa3: pessoa = {
    nome: 'Ciclano',
    idade: 18,
    corFavorita: CORES.VERMELHO
}