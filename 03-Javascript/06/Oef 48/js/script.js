const letterPrice = 5;
let name = "Patrick";

let namePrice = name.length * letterPrice;

let totalPrice = document.getElementById("totalPrice");

totalPrice.textContent = "De totaalprijs is € " + namePrice;