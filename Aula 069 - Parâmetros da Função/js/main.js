//A função definida com a palavra FUNCTION tem uma variável especial denominada ARGUMENTS que sustenta todos os argumentos enviados:

function funcao(){
  let total = 0;
  for (let argumento of arguments){
    total += argumento;
  }
  console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7);

//
function funcao1 (a, b, c, d, e, f){
  console.log(a, b, c, d, e, f);
}
funcao1(1, 2, 3);

//Assumindo valores padrão para o parâmetro quando o valor do argumento não for passado - undefined
function funcao2 (a, b = 3){
  console.log(a + b);
}
funcao2(2, 3);

//
function funcao3 ({nome, sobrenome, idade}){
  console.log (nome, sobrenome, idade);
}
let obj = { nome: 'Ioly', sobrenome: 'Oliveira', idade: 34};
funcao3(obj);

// rest operator ... = receber todo o resto dos argumentos no parametro com rest e por isso precisa ser o último parametro
function conta (operador, acumulador, ...numeros){
  for (let numero of numeros){
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
  }
  console.log (acumulador);
}
conta('+', 1, 20, 30, 40, 50);