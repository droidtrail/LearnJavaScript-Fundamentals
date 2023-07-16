
//var - global level/functional
// var greet = "Evening"
//let - global level/block level {}
// let greet = "Evening"
//const -
const greet = "Evening"
// greet = "night" >>> a variável greet não pode ser alterada pq é uma constante

if (1 == 1) {
    let greet = "Afternoom"
}

function add(a, b) {
    var greet = "Morning"
    return a + b
}
console.log(add(3, 2))

//ou
let soma = add(10, 11)
console.log(soma)

//do not have name => Anyonymus function--Function expressions
let sumOfInteger = function (c, d) {
    return c + d
}

//ou
let sumOfNumbers = (c, d) => c + d
console.log(sumOfNumbers(23, 22))
console.log('>>>> ' + greet)