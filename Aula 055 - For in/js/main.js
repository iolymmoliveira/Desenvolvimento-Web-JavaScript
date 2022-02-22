//For in -> Lê os índices ou chaves do objeto
const frutas = ['Pera', 'Uva', 'Maçã', 'Abacaxi'];

for (let i in frutas) {
  console.log(frutas[i]);
}

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
}

for (let info in pessoa) {
  console.log (info, pessoa[info]);
}