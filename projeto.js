const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListadeItens = []

function adicionarNovatarefa() {
    minhaListadeItens.push({
        tarefa: input.value,
        concluida: false
    })

    if (input.value.trim() === '') {
        alert('Por favor, insira uma tarefa.')
        return
    }



    mostrarTarefas()

    input.value = ''
}

function mostrarTarefas() {

    let novaLi = ''

    minhaListadeItens.forEach((item, index) => {
        novaLi = novaLi + `

            <li class="task ${item.concluida && "done"}">
                <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${index})">
                <p>${item.tarefa}</p>
                <img src="./img/trash.png" onclick="deletarItem(${index})">
            </li>
        
        `
    })

    listaCompleta.innerHTML = novaLi
    localStorage.setItem("lista", JSON.stringify(minhaListadeItens))

}
function concluirTarefa(index) {
    minhaListadeItens[index].concluida = !minhaListadeItens[index].concluida
    mostrarTarefas()
}

function deletarItem(index) {
    minhaListadeItens.splice(index, 1)
    mostrarTarefas()
}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    if (tarefasDoLocalStorage) {
        minhaListadeItens = JSON.parse(tarefasDoLocalStorage)
        mostrarTarefas()
    }
}
recarregarTarefas()

button.addEventListener('click', adicionarNovatarefa)