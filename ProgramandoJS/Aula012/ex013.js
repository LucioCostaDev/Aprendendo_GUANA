var agora = new Date()
var diaSem = agora.getDay()

/*
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sabádo
*/

console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log(`Hoje e ${diaSem} merecido descanso`)
        break
    case 1:
        console.log(`Hoje e ${diaSem} vamos iniciar semana`)
        break
    case 2:
        console.log(`Hoje e ${diaSem} alegria alegria`)
        break
    case 3:
        console.log(`Hoje e ${diaSem} opa quase lá`)
        break
    case 4:
        console.log(`Hoje e ${diaSem} falta um`)
        break
    case 5:
        console.log('SEXTOUUUUUU')
        break
    case 6:
        console.log(`Hoje e ${diaSem} vamos beber`)
        break
    default:
        console.log('[ERRO]')
}