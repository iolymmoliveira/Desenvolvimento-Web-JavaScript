//Throw -> Lança o erro
//Catch -> Captura o erro / Usamos para decidir o que exibir

function soma (x, y) {
  if (typeof x!=='number' || typeof y!=='number') {
    throw new error('x e y precisam ser números.');
  } 
  return x + y;
}

try {
  console.log (soma(1, 5));
  console.log (soma ('1', 2));
} catch (error) {
  //console.log (error);
  console.log ('Ocorreu algum erro no código.');
}