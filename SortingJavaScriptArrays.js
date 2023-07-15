//Sorting strings
let fruits = ["banana","mango","pomegrante","apple"]
fruits.sort()
fruits.reverse()//Imprime os valores na ordem original antes de aplicar o sort
console.log(fruits.sort())

//Sorting numbers
var scores = [12,0o3,13,19,16,14]
console.log(scores.sort((a,b)=>a-b))