//Declaração de função (Function hoisting)
function falaOi(){
  console.log('Oie...');
}
falaOi();

//First-class objects (Objetos de Primeira Classe)
//Function Expression
const souUmDado = function () {
  console.log('Soum um Dado!');
}
souUmDado();

//Arrow function
const funcaoArrow = () => {
  console.log('Sou uma arrow function');
}
funcaoArrow();

//Dentro de um Objeto
const objeto = {
  falar() {
    console.log('Estou falando....');
  }
};
objeto.falar();