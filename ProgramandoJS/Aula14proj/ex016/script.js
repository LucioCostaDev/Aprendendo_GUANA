function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')

    if (ini.value.length == 0 || fim.value.leght == 0 || passo.value.leght == 0) {
        window.alert('[ERRO] faltam dados!')
    } else {
        alert('tudo OK!')
    }
}