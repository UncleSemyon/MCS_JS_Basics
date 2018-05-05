console.log('You are at ' + window.location);

const Colored = document.querySelector(".colored");
console.log(Colored);

console.log(Colored.style);

//Colored.style.backgroundColor = "blue";

let quest = prompt("Какой ты хочешь цвет");

Colored.style['background-color'] = quest;
