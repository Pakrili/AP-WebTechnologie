let number = 7;
let amountGuesses=1;
let output= "";
let guess = prompt("Raad een getal tussen 1 en 10");
while(number!=guess) {
    amountGuesses ++
    if(guess > number){
        guess = prompt(guess + " is te hoog, raad opnieuw (getal tussen 1 en 10)!");
    }
    else if(guess < number) {
        guess = prompt(guess + " is te laag, raad opnieuw (getal tussen 1 en 10)!");
    }
}

if(guess == number){
    output = "Proficiat je hebt het in " + amountGuesses + " keer geraden.";
}

let message = document.getElementById("message");
message.textContent = output;