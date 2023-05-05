var idade = 67 
console.log(`Insira sua idade para avaliar se pode votar`)
if (idade < 16) {
    console.log(`Sua idade é ${idade} não vota`)
} else if (idade < 18 || idade > 65){
    console.log(`Sua idade é ${idade} voto opcional`)
} else {
    console.log(`Sua idade é ${idade} voto Obrigatorio`)
}