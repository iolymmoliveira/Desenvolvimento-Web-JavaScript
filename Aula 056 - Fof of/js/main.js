const nome = ['Luiz', 'Otávio', 'Henrique'];

//FOR CLÁSSICO - Geralmente com iteráveis (array ou strings)
for (let i=0; i<nome.length; i++){
  console.log(nome[i]);
}
console.log('');

//FOR IN - Retorna o índice ou chave (string, array, objetos)
for (let i in nome) {
  console.log(nome[i]);
}
console.log('');

//FOR OF - Retorna o valor em si (iteráveis, arrays ou strinsgs)
for (let valor of nome) {
  console.log(valor);
}
console.log('');

//FOR EACH
nome.forEach(function(valor, indice) {
  console.log(valor, indice);
});
console.log('');