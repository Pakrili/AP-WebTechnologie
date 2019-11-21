let number = 7;

let guess = prompt("Raad een getal tussen 1 en 10");
while(number!=guess) {
    if(guess != number){
        guess = prompt(guess + " is fout!. Raad opnieuw");
    }
}

let message = document.getElementById("message");
message.textContent = "Proficiat je hebt het juiste getal geraden.";