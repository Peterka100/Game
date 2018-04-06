// Funkce na zobrazení Hello world
function displayHello() {
    var msg;
    msg = document.getElementById("message");
    msg.outerHTML = "<h1>Hello world </h1>";
}




// Function for displaying windows info

function displayWindowInfo() {
    var msg1;
    msg1 = document.getElementById("location-info");
    msg1.innerHTML =
       "URL této stránky je:" + window.location.href + "<br>" +
       "Protocal této stránky je:" + window.location.protocol;

    var msg2;
    msg2 = document.getElementById("browser-info");
    msg2.innerHTML = "Browser name: " + window.navigator.userAgent;

    var msg3;
    msg3 = document.getElementById("screen-info");
    msg3.innerHTML = "Screen info: " + window.screen.availWidth + " pixels" ;
}


function NightGame() {
    if (confirm("can you handle the excitement?")) {
    window.location.assign("http://www.park.edu");
}}

function PromtGame() {
    var name;
    name = prompt("What s your name","");
    if (name != null) {
        alert("The new reservation will be made. Print it " + name);
    }
}

function Porovnej() {
    var slovo1;
    var slovo2;
    var tb1;
    var tb2;
    var msg;
    tb1 = window.document.getElementById("prvniSlovo");
    tb2 = window.document.getElementById("druheSlovo");
    slovo1 = tb1.value();
    slovo2 = tb2.value();
    
}

function showme() {
    var getUserSync = require ('.getUserSync');
    var msg = document.getElementById("nodeJS");

    user1 = getUserSync('123');
    user1.innerHTML = 'user1 je' + msg ;
}
