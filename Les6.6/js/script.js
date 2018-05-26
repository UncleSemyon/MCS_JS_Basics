console.log('You are at ' + window.location);

class Custumer{
    constructor(name){
        this.name = name;
    }
    
    buy(){
        console.log("Куплено");
    }
}

class childCustumer extends Custumer{
    getPresent(){
        console.log("Шарик в подарок"); 
    }
}
