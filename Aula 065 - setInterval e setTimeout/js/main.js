//setInverval -> Configurar um intervalo de tempo pra que alguma função seja executada em determinado momento

function executaHora () {
  let data = new Date();

  return data.toLocaleTimeString ('pt-BR', {
    hour12: false
  });
}

const timer = setInterval (function (){
  console.log(executaHora());
}, 1000);

setTimeout (function() {
  clearInterval(timer);
}, 3000);

setTimeout (function (){
  console.log ('Olá mundo!');
}, 5000);