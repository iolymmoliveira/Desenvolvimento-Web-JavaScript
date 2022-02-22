//Escreva uma função que recebe 2 números e retorne o maior deles

function recebeNumero (x, y){
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
console.log (recebeNumero(10, 2));
console.log ();

//Escrevendo com Arrow Function
const recebeNum = (x, y) => x>y ? x : y;
console.log (recebeNum(25,29));
