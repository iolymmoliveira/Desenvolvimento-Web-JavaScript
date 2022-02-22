const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
  const li = document.createElement('li');
  return li;
}

inputTarefa.addEventListener('keypress', function(e){
  if (e.keyCode === 13){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
}

function criaBotaoRemover(li){
  li.innerText += ' ';
  const botaoRemover = document.createElement('button');
  botaoRemover.innerText = 'Remover';
  //botaoRemover.classList.add('remover');
  botaoRemover.setAttribute('class', 'remover');
  botaoRemover.setAttribute('title', 'Remover esta Tarefa');
  li.appendChild(botaoRemover);
}

function criaTarefa(textoInput){
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoRemover(li);
  salvarTarefas();
}

btnTarefa.addEventListener('click', function(){
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
})

document.addEventListener('click', function(e){
  const elemento = e.target;
  if(elemento.classList.contains('remover')){
    elemento.parentElement.remove();
    salvarTarefas();
  }
})

function salvarTarefas (){
  const liTarefas = tarefas.querySelector('li');
  const listaDeTarefas = [];

  for (let tarefa of liTarefas){
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Remover','').trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);

  for(let tarefa of listaDeTarefas){
    criaTarefa(tarefa);
  }
}
adicionaTarefasSalvas();