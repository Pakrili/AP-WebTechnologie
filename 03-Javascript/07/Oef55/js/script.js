function Bus(nummerplaat,bestemming,zitplaatsen,gereserveerd){
    this.nummerplaat = nummerplaat;
    this.bestemming = bestemming;
    this.zitplaatsen= zitplaatsen;
    this.gereserveerd= gereserveerd;
    this.info= function(){
        let vrijePlaatsen = this.zitplaatsen - this.gereserveerd;
        return "Bestemming: " + this.bestemming + ", Vrije plaatsen: " + vrijePlaatsen + ", Nummerplaat: " + this.nummerplaat;
    }
}

let bus1 = new Bus('1-RVN-837','Kapellen',54,41);
let bus2 = new Bus('1-HSK-619','Barcelona',54,50);


let showMessage = function(id, message){
    let element = document.getElementById(id);
    element.textContent = message;    
}

window.onload = function(){
    showMessage("header1", bus1.info());
    showMessage("header2", bus2.info());
};
