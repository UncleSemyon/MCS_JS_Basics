console.log('You are at ' + window.location);

let haveEnough = (money, bread, milk, breadPrice, milkPrice) => {
    let breadSum = parseFloat(bread) * parseFloat(breadPrice);
    let milkSum = parseFloat(milk) * parseFloat(milkPrice);   
    if(breadSum + milkSum > parseFloat(money)){
        return "Вам не хватает денег";
    }else{
       return "Вам хватает денег на покупки";
    }
}

let result = haveEnough(prompt("Сколько у вас денег?"), prompt("Сколько буханок хлеба вы хотите купить?"), prompt("Сколько литров молока вы хотите купить?"), prompt("Сколько стоит буханка хлеба?"), prompt("Сколько стоит литр молока?"));
console.log(result);
document.body.innerHTML = result;