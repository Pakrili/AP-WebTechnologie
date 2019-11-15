let bus={
        nummerplaat : '1-RVN-837',
        bestemming : 'Kapellen',
        zitplaatsen: 52,
        gereserveerd: 43
}


let showMessage = function(id, message){
        let element = document.getElementById(id);
        element.textContent = message;    
}

function berekenVrijeZitplaatsen(aantalPlaatsen, gereserveerd){
        let vrijePlaatsen = aantalPlaatsen - gereserveerd;
        return "Er zijn nog " + vrijePlaatsen + " zetels vrij.";
}

window.onload = function(){
    showMessage("header", this.berekenVrijeZitplaatsen(bus.zitplaatsen, bus.gereserveerd))};
