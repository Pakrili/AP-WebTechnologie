let score = prompt("Geef je score in.");
let message = "";

if(score > 50) {
   message = "Geslaagd";
}
else{
    message = "Niet geslaagd";
}

let result = document.getElementById("result");
result.textContent = message;