type pokemon = {
	name: string,
        types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//4a) atraves do terminal, no local do arquivo, aplicaria o comando 'tsc exercicio-4.js'


//4b) aplicaria o comando com o caminho do arquivo 'tsc ./src/exercicio-4.js'

//4c) no terminal aplicar somente 'tsc' no diretório o qual contem todos os arquivos .ts para transpilar todos
