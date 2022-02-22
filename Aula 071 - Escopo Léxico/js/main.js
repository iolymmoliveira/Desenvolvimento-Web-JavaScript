//O escopo léxido permite que uma função tenha acesso as variáveis criadas fora dele, em sua "vizinhança";

const nome = 'Ioly';

function falaNome () {
  console.log (nome);
}

function usaFalaNome () {
  const nome = 'Oliveira';
  falaNome();
}
usaFalaNome();