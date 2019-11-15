let bus= new Object();
bus.nummerplaat = '1-RVN-837';
bus.bestemming = 'Kapellen';
bus.zitplaatsen= 52;
bus.gereserveerd= 43;
bus.vrijePlaatsen= function(){
    let vrijePlaatsen = this.zitplaatsen - this.gereserveerd;
    return "Er zijn nog " + vrijePlaatsen + " zetels vrij.";
}

let showMessage = function(id, message){
    let element = document.getElementById(id);
    element.textContent = message;    
}

window.onload = function(){
    showMessage("header", bus.vrijePlaatsen())
};
