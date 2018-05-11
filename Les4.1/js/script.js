console.log('You are at ' + window.location);

let dig = prompt("Введите число");
dig = parseFloat(dig);
if(dig >= 0){
    console.log(dig);
}else{
    console.log(Math.abs(dig));
}
