document.body.style["background-color"] = prompt("Какой будет фон у страницы?"); 

document.querySelector(".page").style["color"] = prompt("Какой будет цвет текста на странице?");

document.querySelector("span.name").innerHTML = prompt("Как зовут человека, который вас вдохновляет?");

document.querySelector("img").setAttribute("src", prompt("Введите адрес картинки"));

const shortBio = document.querySelector(".shortBio");
shortBio.innerHTML = prompt("Введите текст страницы");
shortBio.className += " animated";
