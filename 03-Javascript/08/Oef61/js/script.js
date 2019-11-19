let masterPassword = "Wireframe";
let userPassword = prompt("Geef je paswoord in.");
let message = "Toegang "


if(masterPassword == userPassword){
    message += "toegestaan";
}
else{
    message += "geweigerd";
}

let access =  document.getElementById("access");
access.textContent = message;