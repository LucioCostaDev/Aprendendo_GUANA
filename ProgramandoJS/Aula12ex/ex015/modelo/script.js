function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.leght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!') 
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 1) {
                //Bebe
                img.setAttribute('src', 'bebe.png')
            } else if (idade < 10) {
                // Criança
                img.setAttribute('src', 'criancamasc.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemmasc.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adultomasc.png')
            } else {
                // Idoso
                img.setAttribute('src', 'senhor.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 1) {
                //Bebe
                img.setAttribute('src', 'bebe.png')
            } else if (idade < 10) {
                // Criança
                img.setAttribute('src', 'criancafemi.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemfemi.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adultafemi.png')
            } else {
                // Idoso
                img.setAttribute('src', 'senhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
        res.appendChild(img)
    }
}