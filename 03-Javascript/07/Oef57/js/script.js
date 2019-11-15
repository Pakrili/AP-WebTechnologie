function Bus(nummerplaat,bestemming,zitplaatsen,gereserveerd){
        this.nummerplaat = nummerplaat;
        this.bestemming = bestemming;
        this.zitplaatsen= zitplaatsen;
        this.gereserveerd= gereserveerd;
        this.busInfo= function(){
            let vrijePlaatsen = this.zitplaatsen - this.gereserveerd;
            return "Bestemming: " + this.bestemming + ", Vrije plaatsen: " + vrijePlaatsen + ", Nummerplaat: " + this.nummerplaat;
        };
        this.pasagiers = [2];
    }

function Pasagier(naam, nationaliteit, leeftijd){
        this.naam = naam;
        this.nationaliteit = nationaliteit;
        this.leeftijd = leeftijd;
        this.info = function(){
                return "Naam: "+ this.naam + ", Nationaliteit: " + this.nationaliteit + ", Leeftijd: " + this.leeftijd
        }
}

let bus1 = new Bus('1-RVN-837','Amsterdam',54,41);

bus1.pasagiers[0] = new Pasagier('Daems Patrick', 'Belg', 52);
bus1.pasagiers[1] = new Pasagier('De Donder Kristel', 'Belg', 51);

    

let showMessage = function(id, message){
    let element = document.getElementById(id);
    element.textContent = message;    
}

window.onload = function(){
    showMessage("header", bus1.busInfo());
    showMessage("pasagier1",bus1.pasagiers[0].info());
    showMessage("pasagier2",bus1.pasagiers[1].info());
};
    