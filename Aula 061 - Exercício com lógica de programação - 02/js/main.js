//Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number). Retorne true se a imagem estiver no modo paisagem.

function posicao (largura, altura){
  return largura > altura ? true : false ;
}
console.log (posicao(1080, 1920));
console.log ();

//Escrevendo com Arrow Function
const ePaisagem = (largura, altura) => largura > altura ? true : false;
console.log (ePaisagem(1920,1080));
