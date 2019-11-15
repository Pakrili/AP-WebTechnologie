function Bus(licensePlate,destination,seats,reserved){
        this.licensePlate = licensePlate;
        this.destination = destination;
        this.seats= seats;
        this.reserved= reserved;
        this.busInfo= function(){
            let freeSeats = this.seats - this.reserved;
            return "Bestemming: " + this.destination + ", Vrije plaatsen: " + freeSeats + ", Nummerplaat: " + this.licensePlate;
        };
        this.passengers = [];
    }

function Passenger(name, nationality, age){
        this.name = name;
        this.nationality = nationality;
        this.age = age;
        this.info = function(){
                return "Naam: "+ this.name + ", Nationaliteit: " + this.nationality + ", Leeftijd: " + this.age
        }
}

let bus1 = new Bus('1-RVN-837','Amsterdam',54,41);


function addPassenger(bus, name, nationality, age){
    bus.reserved ++;
    passenger = new Passenger(name, nationality, age);
    bus.passengers.push(passenger);
}


addPassenger( bus1 ,'Daems Patrick', 'Belg', 52);
addPassenger( bus1, 'De Donder Kristel', 'Belg', 51);

 
function createList(passengers){

    let list=document.createElement('ul');
    
    for(let i=0;i<passengers.length;i++)
    {
        let listItem=document.createElement('li');
        listItem.appendChild(document.createTextNode(passengers[i].info()));
        list.appendChild(listItem);
    }
    
    return list;
}


let showMessage = function(id, message){
    let element = document.getElementById(id);
    element.textContent = message;    
}

window.onload = function(){
    showMessage("header", bus1.busInfo());
    document.getElementById("passengerlist").appendChild(createList(bus1.passengers));
};
    