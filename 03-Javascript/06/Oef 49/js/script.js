const letterPrice = 5;
let name = "Patrick";

let namePrice = name.length * letterPrice;

let totalPrice = document.getElementById("totalPrice");

// totalPrice.textContent = "Dag " + name +" je naamplaatje zal " + namePrice + "euro kosten.";

let begroeting = "Dag "
totalPrice.textContent = begroeting.concat(name," je naamplaatje zal ",namePrice," euro kosten.");