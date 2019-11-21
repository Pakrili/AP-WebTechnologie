let number = prompt("Geef een nummer van 1 tot 10 in");
let faculty = 1;
let output = "";
if(number >= 1 && number <=10 ){
    for(let i = 1; i<= number; i++){
        faculty *= i;     
    }    
    output ="De faculteit van " + number + " is " + faculty;
}
else{ output = number + " is een ongeldige waarde!"}

let result = document.getElementById("result");
result.textContent = output;