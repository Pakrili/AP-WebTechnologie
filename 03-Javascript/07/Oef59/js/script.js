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

let busArray = new Array();

function addbus(licensePlate,destination,seats,reserved){
    bus = new Bus(licensePlate,destination,seats,reserved);
    busArray.push(bus);
}

addbus('1-RVN-837','Amsterdam',54,20);
addbus('1-HSK-619','Barcelona',54,2);

function addPassenger(bus, name, nationality, age){
    bus.reserved ++;
    passenger = new Passenger(name, nationality, age);
    bus.passengers.push(passenger);
}


addPassenger( busArray[0] ,'Daems Patrick', 'Belg', 52);
addPassenger( busArray[0], 'De Donder Kristel', 'Belg', 51);

addPassenger( busArray[1] ,'Daems Linka', 'Belg', 19);
addPassenger( busArray[1], 'Van Eupen Quinten', 'Belg', 18);

 
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
    showMessage("header", busArray[0].busInfo());
    document.getElementById("passengerlist").appendChild(createList(busArray[0].passengers));
    showMessage("bus2", busArray[1].busInfo());
    document.getElementById("passengerlist2").appendChild(createList(busArray[1].passengers));

    for(bus=0;bus < busArray.length; bus++){
        console.log("Bestemming " + busArray[bus].destination)
        for(passenger=0; passenger<busArray[bus].passengers.length;passenger++){
            let passengerNr = passenger+1
            console.log("passagier " + passengerNr +" : " + busArray[bus].passengers[passenger].name )
        }
    }
};
    