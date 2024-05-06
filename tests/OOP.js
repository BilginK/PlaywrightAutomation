module.exports=class Person
{

age = 25
get location()
{
    return "Canada"
}

//constructor is a method which executes by default when you create object of the class
constructor(firstName, lastName)
{
    this.firstName = firstName
    this.lastName = lastName
}

fullName()
{
    console.log(this.firstName+" "+ this.lastName)
}

}

//NOT: BURASI FUNCTIONS SINIFINDA fullName() objesi cagrildigi ICIN YORUMA ALINDI YOKSA HATA ALIYORUZ
// let person = new Person("Tim", "Joe")
// let person1 = new Person("Ahmet", "Kaya")
// console.log(person.age)
// console.log(person.location)
// console.log(person.fullName())
// console.log(person1.fullName())