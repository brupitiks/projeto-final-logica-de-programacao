const button = document.querySelector(".button-task")
const input = document.querySelector(".input-task")
const listaCompleta = document.querySelector('.list-task')

let minhaListaDeItens = []

function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas() {
  let novaLi = ""

  minhaListaDeItens.forEach((item, index) => {
    novaLi = novaLi + `

        <li class="task ${item.concluida && "done"}">
            <img src="./img/checked.png" alt="Imagem de check" onclick="concluirTarefa(${index})"/>
             <p>${item.tarefa}</p>
            <img src="./img/trash.png" alt="Imagem de lexeira" onclick="deletarItem(${index})"/>
      </li>

        `
  })

  listaCompleta.innerHTML = novaLi

}

function concluirTarefa(index){
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida

    mostrarTarefas()

}

function deletarItem(index){
    minhaListaDeItens.splice(index, 1)

    mostrarTarefas()
   console.log(index)
}

function listarTarefas() {
    minhaListaDeItens.forEach((item, index) => {
        console.log(`ID: ${index}, Tarefa: ${item.tarefa}, Concluída: ${item.concluida ? 'Sim' : 'Não'}`);
    });
}

function obterTarefaPorId(id) {
    const tarefa = minhaListaDeItens[id];
    
    if (tarefa) {
        console.log(`ID: ${id}, Tarefa: ${tarefa.tarefa}, Concluída: ${tarefa.concluida ? 'Sim' : 'Não'}`);
    } else {
        console.log(`Tarefa com ID ${id} não encontrada.`);
    }
}

listarTarefas();
obterTarefaPorId(0);

button.addEventListener("click", adicionarNovaTarefa);
