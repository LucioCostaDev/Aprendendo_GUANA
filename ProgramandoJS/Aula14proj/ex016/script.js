function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.leght == 0 || passo.value.leght == 0) {
        res.innerHTML = 'Impossivel contar!'
        // window.alert('[ERRO] faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        // conversão para numero
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0 ) {
            window.alert('Passo inválido! Considerando o PASSO como 1')
            p = 1
        }
        if(i < f) {
            // contagem crescente
        for(let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F3C3}`
        }
    } else {
            //contagem regressiva
        for(let c = i; c >= f; c -= p) {
            res.innerHTML += ` ${c} \u{1F3C3}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
 }
}

