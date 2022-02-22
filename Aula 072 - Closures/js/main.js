// Closures é a habilidade da função em acessar o seu escopo léxico

function retornaFuncao(nome){
  return function(){
    return nome;
  };
}

const funcao = retornaFuncao('Ioly');
const funcao2 = retornaFuncao('Oliveira');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());