//IIFE -> Immediately invoked function expression

/*
(function() {
  
})();
*/

(function(idade, peso, altura) {
  
  const sobrenome = 'Oliveira';
  function criaNome (nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome () {
    console.log(criaNome('Ioly'));
  }

  falaNome();
  console.log (idade, peso, altura);
})(34, 67, 1.58);
