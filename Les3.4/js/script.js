var money = parseFloat(prompt("Сколько у Вас с собой есть денег?"));
var apple = prompt("Сколько Вы купили яблок?");
var bread = prompt("Сколько Вы купили батонов хлеба?");
var appleSum = parseInt(apple) * parseFloat(prompt("Сколько стоит одно яблоко?"));
var breadSum = parseInt(bread) * parseFloat(prompt("Сколько стоит один батон хлеба?"));
if(appleSum + breadSum > money){
    document.body.innerHTML = false;
}else{
    document.body.innerHTML = true;
}
