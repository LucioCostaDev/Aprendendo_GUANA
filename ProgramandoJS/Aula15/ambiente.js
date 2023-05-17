let num = [5,8,2,9,3]
//num.sort() sort metodo que organiza em ordem crescente 
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
// console.log(`O primeiro valor do vetor é ${num[1]}`)
// console.log(`O primeiro valor do vetor é ${num[2]}`)
// console.log(`O primeiro valor do vetor é ${num[3]}`)
// console.log(`O primeiro valor do vetor é ${num[4]}`)
// console.log(`O primeiro valor do vetor é ${num[5]}`)
// console.log(`O primeiro valor do vetor é ${num[6]}`)
// console.log(`O primeiro valor do vetor é ${num[7]}`)
