//Factory Functions -> São funções que retornam objetos

//Quando uma função está dentro de um objeto ela é denominada MÉTODO.

function criaPessoa (nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    fala: function(assunto) {
      return `${this.nome} está falando ${assunto}.`;
    },
    altura: a,
    peso: p,
    imc() {
      const indice = this.peso / (this.altura**2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa ('Ioly', 'Oliveira', 1.58, 67);
console.log(p1.imc());
const p2 = criaPessoa ('Renato', 'Tavares', 1.62, 72);
console.log(p2.imc());
console.log (p1.fala('falando sobre JS.'));