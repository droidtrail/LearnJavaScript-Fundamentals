//block of code
function add(a,b){
    return a+b
}
console.log(add(3,2))

//ou
let soma = add(10,11)
console.log(soma)

//do not have name => Anyonymus function--Function expressions
let sumOfInteger = function(c,d){
    return c+d
}
//ou
let sumOfNumbers=(c,d)=> c+d
console.log(sumOfNumbers(23,22))