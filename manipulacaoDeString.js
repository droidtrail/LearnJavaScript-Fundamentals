let day = 'tuesday '
console.log(day.length)// 8 com o espaço
let subDay = day.slice(0,4) //tues
console.log(subDay)
console.log(day[1]) //u
//tue day
let splitDay = day.split("s") //criar um array separando a palavra tuesday em duas a partir do s
console.log('length: ' + splitDay[1].length)//0=tue - 1=day
console.log('length depois do trim: '+ splitDay[1].trim().length)

let date = '23' //string
let nextdate = '27' //string
let diff = parseInt(nextdate) - parseInt(date) //convertendo uma string para interger
console.log(diff)
diff.toString()//converte novamente para string

let newQuote = day + 'funday day'
console.log(newQuote)
let val = newQuote.indexOf("day",5)
console.log(val)
//tuesday funday
let count = 0
let value = newQuote.indexOf("day")
while(value!=-1){
    count++//2
    value=newQuote.indexOf("day",value+1)
}
console.log('Valor final: ' + count)

