
function Pasagier(naam, nationaliteit, leeftijd){
        this.naam = naam;
        this.nationaliteit = nationaliteit;
        this.leeftijd = leeftijd;
        this.info = function(){
                return "Naam: "+ this.naam + ", Nationaliteit: " + this.nationaliteit + ", Leeftijd: " + this.leeftijd
        }
}

let pasagiers=[3];

pasagiers[0]= new Pasagier('Daems Patrick', 'Belg', 52);
pasagiers[1] = new Pasagier('De Donder Kristel', 'Belg', 51);
pasagiers[2] = new Pasagier('Daems Linka', 'Belg', 19);


let showMessage = function(id, message){
        let element = document.getElementById(id);
        element.textContent = message;    
}

window.onload = function(){
        showMessage("pasagier1",pasagiers[0].info());
        showMessage("pasagier2",pasagiers[1].info());
        showMessage("pasagier3",pasagiers[2].info());    
};
    