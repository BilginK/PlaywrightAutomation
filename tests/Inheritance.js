const Person = require("./OOP");

class Pet extends Person
{
    get location()
    {
        return "BlueCross"
    }
    constructor(firstName, lastName)
    {
        //call paretn class constructor
        super(firstName, lastName)
    }
    
}

let pet = new Pet("sam", "san")
pet.fullName()
console.log(pet.location)