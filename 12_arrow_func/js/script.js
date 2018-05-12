console.log('You are at ' + window.location);

let myText = (elem, t) => {
    elem.innerHTML = t;
}

myText(document.body, "test");
