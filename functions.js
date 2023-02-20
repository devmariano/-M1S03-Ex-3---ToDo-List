let tarefas_diarias = ["Acordar", "Escovar os dentes", "Comer", "Dormir"];

function buscarTarefa(tarefa) {
    return tarefas_diarias.includes(tarefa);
}

function alterarTarefa(tarefa) {
    const novaTarefa = prompt("Digite a nova tarefa:");
    if (novaTarefa !== null && novaTarefa !== "" && novaTarefa !== tarefa) {
        const indice = tarefas_diarias.indexOf(tarefa);
        if (indice >= 0) {
            tarefas_diarias[indice] = novaTarefa;
            atualizarLista();
        }
    }
}

function deletarTarefa(tarefa) {
    const indice = tarefas_diarias.indexOf(tarefa);
    if (indice >= 0) {
        tarefas_diarias.splice(indice, 1);
        atualizarLista();
    }
}

function adicionarTarefa() {
    const input = document.getElementById("tarefa");
    const tarefa = input.value;
    if (tarefa !== "") {
        tarefas_diarias.push(tarefa);
        input.value = "";
        atualizarLista();
    }
}

function atualizarLista() {
    const lista = document.getElementById("tarefas");
    lista.innerHTML = "";

    tarefas_diarias.forEach(tarefa => {
        const li = document.createElement("li");
        li.textContent = tarefa;

        const botaoDeletar = document.createElement("button");
        botaoDeletar.textContent = "Deletar";
        botaoDeletar.addEventListener("click", () => deletarTarefa(tarefa));
        li.appendChild(botaoDeletar);

        const botaoAtualizar = document.createElement("button");
        botaoAtualizar.textContent = "Atualizar";
        botaoAtualizar.addEventListener("click", () => alterarTarefa(tarefa));
        li.appendChild(botaoAtualizar);

        lista.appendChild(li);
    });
}
atualizarLista()