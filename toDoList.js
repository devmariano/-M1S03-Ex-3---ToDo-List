//Versão apenas javascript

let tarefas_diarias = ["Acordar", "Escovar os dentes", "Comer", "Dormir"];

// Função para buscar se uma tarefa existe na lista
function buscarTarefa(tarefa) {
  return tarefas_diarias.includes(tarefa);
}

// Função para alterar uma tarefa na lista
function alterarTarefa(indice, novaTarefa) {
  if (indice >= 0 && indice < tarefas_diarias.length) {
    tarefas_diarias[indice] = novaTarefa;
    return true;
  } else {
    return false;
  }
}

// Função para deletar uma tarefa da lista
function deletarTarefa(tarefa) {
  const indice = tarefas_diarias.indexOf(tarefa);
  if (indice >= 0) {
    tarefas_diarias.splice(indice, 1);
    return true;
  } else {
    return false;
  }
}

// Função para adicionar uma tarefa na lista
function adicionarTarefa(tarefa) {
  tarefas_diarias.push(tarefa);
  return true;
}

console.log(buscarTarefa("Acordar")); 
console.log(buscarTarefa("Ler")); // false

console.log(alterarTarefa(2, "Comer")); 
console.log(tarefas_diarias); 

console.log(deletarTarefa("Dormir")); 
console.log(tarefas_diarias); 

console.log(adicionarTarefa("Ler livro")); 
console.log(tarefas_diarias); 