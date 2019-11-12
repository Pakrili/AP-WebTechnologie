function helloWorld(hello){
    let welcome = document.getElementById("welcomeText");
    welcome.textContent = hello;
}
window.onload = function(){helloWorld("Function with parameter!")};
