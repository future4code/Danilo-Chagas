//2a)
//2a) R.: Entrada: numeros; Saída: estatisticas
//2b) R.: numerosOrdenados, soma

type resultEstatisticas = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros: number[]): resultEstatisticas {

    const numerosOrdenados: Array<number> = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: resultEstatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
//2c)
type amostra = {
    numeros: Array<number>
    obterEstatisticas: (numeros: number[]) => resultEstatisticas
}

const testeDeAmostragem: amostra = {
    numeros: [33,27,18],
    obterEstatisticas,
}