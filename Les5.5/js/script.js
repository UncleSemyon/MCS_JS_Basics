console.log('You are at ' + window.location);

const form = document.forms[0];
const result = document.querySelector(".result");
form.onsubmit = function(e){
    e.preventDefault();
    result.innerHTML = Math.sin(form.elements.digit.value*Math.PI/180);  // предполагаем, что введеное число - это именно градусы, а не радианы. Так как Math.sin расчитывает значение именно от радиан, то переводим введеное число сначала в радианы и только потом вычисляем разультат
}
