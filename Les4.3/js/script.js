console.log('You are at ' + window.location);

let dig = prompt("Введите число");
dig = parseFloat(dig);
(dig >= 0) ? console.log(dig) : console.log(Math.abs(dig));
