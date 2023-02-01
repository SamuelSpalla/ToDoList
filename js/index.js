let buttonNovoEvento = document.querySelector('.MostrarNovoEvento'),
buttonCancel = document.querySelector('.cancel'),
novoE = document.querySelector('.form'),
inputName = document.querySelector('#nomeEvento'),
inputDate = document.querySelector('#dateEvento'),
tabela = document.querySelector('.tabela')


let listaEventos = []

function atualizarEventos(){    
    if(listaEventos.length == 0){
        tabela.innerHTML = '<tr><td>Nenhum evento</td></tr>'
        return
    }
    tabela.innerHTML = ''
    for(var i = 0; i < listaEventos.length; i++){
        let evento = listaEventos[i]
        let linha = document.createElement('tr')
        linha.classList.add('linha')
        let TDNome = document.createElement('td')
        let TDDate = document.createElement('td')
        let op = document.createElement('td')
        let btnExcluir = document.createElement('button')
        btnExcluir.setAttribute('data-evento', i)
        btnExcluir.classList.add('btn-remover')
        btnExcluir.addEventListener('click', removerEvento)

        linha.appendChild(TDNome)
        linha.appendChild(TDDate)
        op.appendChild(btnExcluir)
        linha.appendChild(op)
        tabela.appendChild(linha)

        TDNome.innerHTML = evento.nome
        TDDate.innerHTML = evento.date
        btnExcluir.innerHTML = 'Remover'
    }

}

function removerEvento(e){
    let position = e.target.getAttribute('data-evento')
    listaEventos.splice(position, 1)
    atualizarEventos()
}

function limparNovoEvento(){
    nomeEvento.value = ''
    dateEvento.value = ''
}

function novoEvento(){
    novoE.classList.remove('none')
}
function ocultarNovoEvento(){
    novoE.classList.add('none')
    limparNovoEvento()
}

function salvarEvento(e){
    e.preventDefault()
    let nomeEvento = inputName.value
    let dateEvento = new Date(inputDate.value)
    console.log(nomeEvento, dateEvento)

    listaEventos.push({
        nome: nomeEvento,
        date: new Date(dateEvento)
    })
    atualizarEventos()
    ocultarNovoEvento()
}

buttonNovoEvento.addEventListener('click', novoEvento)
buttonCancel.addEventListener('click', ocultarNovoEvento)
novoE.addEventListener('submit', salvarEvento)
window.addEventListener('load', atualizarEventos)


