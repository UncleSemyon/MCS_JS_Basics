console.log('You are at ' + window.location);

const Image = document.querySelector(".imageBlock");
let answer = prompt("How old are you?");
answer = parseInt(answer);

(answer >= 18) ? Image.style.backgroundImage = "url(img/pub.jpg)" : Image.style.backgroundImage = "url(img/school.gif)";
