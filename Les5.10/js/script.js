console.log('You are at ' + window.location);

let cryptoDiv = document.querySelector('.crypto-block');
let crypto = [
    {
        name : "Bitcoin",
        price: 1388.37
    },
    {
        name : "Ethereum",
        price: 716
    },
    {
        name : "Litecoin",
        price: 140
    }
];

crypto.forEach(function(item){
    cryptoDiv.innerHTML += "<div class='"+item.name+"'><h2>"+item.name+"</h2><p>"+item.price+"</p><div class='price-line' style='width: "+item.price+"px'></div></div>"; 
});

