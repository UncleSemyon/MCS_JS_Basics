console.log('You are at ' + window.location);

let haveEnough = (money, bread, apple, breadPrice, applePrice) => {
    let breadSum = parseFloat(bread) * parseFloat(breadPrice);
    let appleSum = parseFloat(apple) * parseFloat(applePrice);   
    if(breadSum + appleSum > parseFloat(money)){
        return "Вам не хватает денег";
    }else{
       return "Вам хватает денег на покупки";
    }
}

let result = haveEnough(prompt("Сколько у вас денег?"), prompt("Сколько буханок хлеба вы хотите купить?"), prompt("Сколько яблок вы хотите купить?"), prompt("Сколько стоит буханка хлеба?"), prompt("Сколько стоит яблоко?"));
console.log(result);
document.body.innerHTML = result;