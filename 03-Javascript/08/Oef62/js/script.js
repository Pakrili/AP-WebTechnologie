let operator = prompt("Welke bewedrking wil je uitvoeren? (geef +, -, * of / in)");
let number1 = parseInt(prompt("Geef het eerste getal in"));
let number2 = parseInt(prompt("Geef het tweede getal in"));
let returnValue = 0;

switch(operator){
    case "+":
        returnValue = number1 + number2;
        break;
    case "-":
        returnValue = number1 - number2;
        break;
    case "*":
        returnValue = number1 * number2;
        break;
    case "/":
        returnValue = number1 / number2;
        break;
    default:
        returnValue = "Foutieve keuze";
        break;
}

let result = document.getElementById("result");
result.textContent = returnValue;
