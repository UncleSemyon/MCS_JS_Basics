const APIKey = "099715979800997fed902c8c415868c1";
var city = "Москва";
var url;


const resultBlock = document.querySelector("#weather-result");
const form = document.querySelector("form");


form.onsubmit = function(e){
    e.preventDefault();
    resultBlock.innerHTML = "Ждите...";
    let inputC = this.elements.city;
    if(inputC.value.length > 0){
        city = inputC.value;
    }else{
        inputC.value = city;
    }
    
    url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+APIKey;

    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    
    xhr.send();
    
    xhr.onreadystatechange = function(){
        if (xhr.readyState != 4) return;
        if(xhr.status != 200){
            resultBlock.innerHTML = xhr.status + " " + xhr.statusText;
        }else{
            let DATA = JSON.parse(xhr.responseText);
            resultBlock.innerHTML = "Температура, С: " + (DATA.main.temp - 273) + "<br>Скорость ветра, м/с: " + DATA.wind.speed;
        }
    }

}



