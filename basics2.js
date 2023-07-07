const flag = true;

if (!flag) {
    console.log("condition satisfied");
}
else {
    console.log("condition NOT satisfied");
}

let i = 0
while(i>10){
    i++
    console.log("I am inside loop: " + i)
}

do{
    i++
}while(i>10);
console.log(i)
