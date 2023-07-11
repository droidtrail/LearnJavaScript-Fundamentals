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
//Imprimir todos os itens de um array
//Soma dos itens dentro do array
var sum = 0;
for (let i = 0; i < m3.length; i++) {
    console.log('Resultado: '+ i);
    sum = sum + m3[i];//12+20+40+35+14+37+100
}
console.log('Soma de todos os valores do array m3: ' + sum)

