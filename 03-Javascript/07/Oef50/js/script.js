function helloWorld(){
    let hello = "Hello function world!";
    let welcome = document.getElementById("welcomeText");
    welcome.textContent = hello;
}
window.onload = function(){helloWorld()};
