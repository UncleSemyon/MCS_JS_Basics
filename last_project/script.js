window.onload = function(){
    const APIKey = "099715979800997fed902c8c415868c1";
    const city = "Москва";
    var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+APIKey;
    const pName = document.querySelector(".personName");
    const icon = document.querySelector(".icon"); 
    
    const form = document.querySelector("form");
    form.onsubmit = function(event){
        event.preventDefault();
        
        let name = this.elements.name.value;
        let cat = this.elements.cat.value;
        let rest = this.elements.rest.value;
        let money = this.elements.money.value;
        
        let pers = new Person(name);
        
        if(cat == "yes"){
            pers.hasCat();
        }
        
        if(rest == "yes"){
            pers.hasRest();
        }
        
        if(money == "yes"){
            pers.hasMoney();
        }
        
        pers.isSunny();
        
        console.log(pers.happiness);
        pName.innerHTML = pers.name;
        
        let resultFace = "";
        switch(pers.happiness){
            case 4:
                resultFace = ":-)";
                break;
            case 3:
                resultFace = ":-|";
                break;   
            case 2:
                resultFace = ":-|";
                break;
            default: 
                resultFace = ":-(";  
        }
                
        icon.innerHTML = resultFace;
        
    }

    class Person{
        constructor(name){
            this.name = name;
            this.happiness = 0;
        }
        
        hasCat(){
            this.happiness++;
        }
        
        hasRest(){
            this.happiness++;
        }
        
        hasMoney(){
            this.happiness++;
        }
        
        
        isSunny(){
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            xhr.send();
            if(xhr.status == 200){
                let DATA = JSON.parse(xhr.responseText);
                let temp = DATA.main.temp - 273;
                if(temp > 15){
                    this.happiness++;        
                }
                console.log(temp);
            }else{
                console.log(xhr.status + " " + xhr.statusText);
            }
            
        }
    }

}