~~~javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
    let novoArray = []
    
    for (let cadaItem of arrayDeNumeros) {
      if(cadaItem === numeroEscolhido) {
        novoArray.push(cadaItem)
      }
    }
  
    if (novoArray.length===0) {
    return `Número não encontrado`
  } else {
    return `O número ${numeroEscolhido} aparece ${novoArray.length}x`
    }
  }
~~~