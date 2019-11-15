let showMessage = function(id, message){
        let element = document.getElementById(id);
        element.textContent = message;    
}

window.onload = function(){
    showMessage("header","Universal function");
    showMessage("message","To put text on the screen")};
