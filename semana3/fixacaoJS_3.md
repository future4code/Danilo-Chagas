~~~javascript
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let media = (ex*1 + p1*2 + p2*3)/(1+2+3)
  if(media<6) {
    return 'D'
  } else if (6<=media&&media<7.5) {
    return 'C'
  } else if (7.5<=media&&media<9) {
    return 'B'
  } else {
    return 'A'
  }
}
~~~