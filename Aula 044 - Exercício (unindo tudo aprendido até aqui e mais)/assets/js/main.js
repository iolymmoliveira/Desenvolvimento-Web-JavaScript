//Capturar evento de submit do Formulário
const formulario = document.querySelector('.formulario');

//Para evitar que o formulário envie os dados
formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();
  const inputPeso = evento.target.querySelector('#peso');
  const inputAltura = evento.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) { // Se o valor de peso for inválido - NaN - a função será parada, mas antes exibirá Peso inválido
    setResultado ('Peso inválido', false);
    return;
  }

  if (!altura) { 
    setResultado ('Altura inválida', false);
    return;
  }

  const imc = calcularImc (peso, altura);
  const grauImc = calcularGrauImc (imc);

  const mensagem = `Seu IMC é ${imc} (${grauImc}).`;

  setResultado(mensagem, true);
})

function calcularGrauImc (imc) {
  const grauImc = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];

  if (imc>39.9) return grauImc[5];
  if (imc>=35) return grauImc[4];
  if (imc>=30) return grauImc[3];
  if (imc>=25) return grauImc[2];
  if (imc>=18.5) return grauImc[1];
  if (imc<18.5) return grauImc[0]; 
}

function calcularImc (peso, altura){
  const imc = peso / Math.pow (altura, 2);
  return imc.toFixed(2);
}

//Função para criar um parágrafo dentro da div no HTML
function criarParagrafo () {
  const paragrafo = document.createElement('p');
  return paragrafo;
}

function setResultado (mensagem, validacao) {
  const resultado = document.querySelector ('.resultado');
  resultado.innerHTML = '';

  const paragrafo = criarParagrafo();

  if (validacao) {
    paragrafo.classList.add ('paragrafo_resultado'); 
  } else {
    paragrafo.classList.add ('paragrafo_ruim'); 
  }
  
  paragrafo.innerHTML = mensagem;
  resultado.appendChild(paragrafo);
}
