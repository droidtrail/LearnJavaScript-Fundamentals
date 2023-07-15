let m1 = Array(6)
var m2 = new Array(20, 40, 35, 12, 37, 100)
var m3 = [20, 40, 35, 12, 37, 100]
var subMarks = m3.slice(2, 5)
console.log('Cria um sub array a partir do vetor principal utilizando a posição incial e final do vetor principal: ' + subMarks)
console.log('Index na posição 2: ' + m3[2]);
m3[3] = 14
console.log('Valores de m3: ' + m3);
console.log('Tamanho do vetor:' + m3.length);
m3.push(65);
console.log('Valores de m3: ' + m3);
m3.pop();
console.log('Valores de m3: ' + m3);
m3.unshift(12);
console.log('Valores de m3: ' + m3);
console.log('Posição do valor 100 no vetor: ' + m3.indexOf(100));
console.log('Verificar se o número 120 exite no vetor: ' + m3.includes(120));

//Reduce
//Imprimir todos os itens de um array.Soma dos itens dentro do array
var sum = 0;
for (let i = 0; i < m3.length; i++) {
    console.log('Resultado: ' + i);
    sum = sum + m3[i];//12+20+40+35+14+37+100
}
console.log('Soma de todos os valores do array m3: ' + sum)

let total = m3.reduce((sum, m3) => sum + m3, 0)
console.log('REDUCE: ' + total)

//Filter
// var scores = [12, 13, 14, 16]
// var evenScores = []
// for (let i = 0; i < scores.length; i++) {
//     if(scores[i] %2 == 0){//Create new array with even numbers os scores array [12,14,16]
//         evenScores.push(scores[i])
//     }
// }
// console.log(evenScores)
var scores = [12, 13, 14, 16]
let newArrayFilter = scores.filter(filtraArray=>filtraArray%2==0)//Create new array with even numbers os scores array [12,14,16]
console.log('Filter: ' + newArrayFilter)

//Map
let newArrayMap = newArrayFilter.map(multiplicaArray=>multiplicaArray*3)//Cria um novo array multiplicando os valores 12,14,16 por 3. [36,52,48]
console.log('Map: ' + newArrayMap)
//Soma os valore criados pelo Map [36,42,48]
let valorTotalSomadoComReduce = newArrayMap.reduce((somaValores,newArrayMap)=>somaValores + newArrayMap,0)
console.log('Valor total somado com reduce: ' + valorTotalSomadoComReduce)

//Encadeando o filter, map e reduce
var scores1 = [12, 13, 14, 16]
let filterMapReduce = scores1.filter(filtraArray=>filtraArray%2==0).map(multiplicaArray=>multiplicaArray*3).reduce((somaValores,newArrayMap)=>somaValores + newArrayMap,0)
console.log('Filter Map e Reduce: ' +filterMapReduce)



