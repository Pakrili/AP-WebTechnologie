let demoData = [
    {
        "_id": "5dd21529cdf562a55f3a2122",
        "age": 27,
        "name": "Bird Davis",
        "gender": "male",
        "email": "birddavis@unia.com"
    },
    {
        "_id": "5dd2152949b47064b022e0b2",
        "age": 22,
        "name": "Rosemarie Fields",
        "gender": "female",
        "email": "rosemariefields@unia.com"
    },
    {
        "_id": "5dd2152930a6072a55126d4a",
        "age": 20,
        "name": "Mcgowan Hill",
        "gender": "male",
        "email": "mcgowanhill@unia.com"
    },
    {
        "_id": "5dd215291a9f7b57b5fb6542",
        "age": 21,
        "name": "Marks Parsons",
        "gender": "male",
        "email": "marksparsons@unia.com"
    },
    {
        "_id": "5dd2152977a8756cdea19e51",
        "age": 34,
        "name": "Alexis Britt",
        "gender": "female",
        "email": "alexisbritt@unia.com"
    },
    {
        "_id": "5dd215298100cfa91527522b",
        "age": 36,
        "name": "Aisha Potter",
        "gender": "female",
        "email": "aishapotter@unia.com"
    },
    {
        "_id": "5dd215295a3b0276bd921acc",
        "age": 28,
        "name": "Socorro Atkins",
        "gender": "female",
        "email": "socorroatkins@unia.com"
    },
    {
        "_id": "5dd215298e7ecedae6358f7e",
        "age": 40,
        "name": "Connie Mcmahon",
        "gender": "female",
        "email": "conniemcmahon@unia.com"
    },
    {
        "_id": "5dd21529e8dcda1845babbd6",
        "age": 40,
        "name": "Nadine Stein",
        "gender": "female",
        "email": "nadinestein@unia.com"
    },
    {
        "_id": "5dd21529f657969b374f4673",
        "age": 34,
        "name": "Dollie Patterson",
        "gender": "female",
        "email": "dolliepatterson@unia.com"
    },
    {
        "_id": "5dd215296218d570686e8b6e",
        "age": 31,
        "name": "Helga Rodriquez",
        "gender": "female",
        "email": "helgarodriquez@unia.com"
    },
    {
        "_id": "5dd2152929fa54134dfd01b6",
        "age": 21,
        "name": "Hardin Snider",
        "gender": "male",
        "email": "hardinsnider@unia.com"
    },
    {
        "_id": "5dd21529bc1bb5a0f6a3a5de",
        "age": 33,
        "name": "Foster Bird",
        "gender": "male",
        "email": "fosterbird@unia.com"
    },
    {
        "_id": "5dd215291b27616e6469ed9d",
        "age": 28,
        "name": "Watkins Cash",
        "gender": "male",
        "email": "watkinscash@unia.com"
    },
    {
        "_id": "5dd215295aaccc9f5f63cfb9",
        "age": 27,
        "name": "Jocelyn Blackburn",
        "gender": "female",
        "email": "jocelynblackburn@unia.com"
    },
    {
        "_id": "5dd215293e082a4f5765540b",
        "age": 34,
        "name": "Denise Wilkinson",
        "gender": "female",
        "email": "denisewilkinson@unia.com"
    },
    {
        "_id": "5dd215292f7859bd8c8238f7",
        "age": 35,
        "name": "Roxie Conway",
        "gender": "female",
        "email": "roxieconway@unia.com"
    },
    {
        "_id": "5dd215296324b2bd42823112",
        "age": 35,
        "name": "Finley Mcgee",
        "gender": "male",
        "email": "finleymcgee@unia.com"
    }
];

let amountMale = 0;
let amountFemale = 0;
let amountPlus30 = 0;

for (person of demoData) {
    if( person.gender.toUpperCase() == "MALE"){
        amountMale++;
    }
    else{
        amountFemale++;
    }
    if(person.age > 30){amountPlus30++;}
}

let male = document.getElementById("male");
let female = document.getElementById("female");
let plus30 = document.getElementById("plus30");

male.textContent = "Het aantal mannen is " + amountMale;
female.textContent = "Het aantal vrouwen is " + amountFemale;
plus30.textContent = "Het aantal personen ouder dan 30 is " + amountPlus30;
