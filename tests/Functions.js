const Person = require('./OOP')
//do not have name =>Anyonymus function-- Function expressions

let sum = function(a,b)
{
    return a+b
};
console.log(sum(2,3))

let sum1 = (c,d) => c+d
console.log(sum1(12,43))

//parse
let date = '23'
let nextDay = '27'
let diff = parseInt(nextDay) - parseInt(date)
console.log(diff)
diff.toString()

//concatenate
let day = 'tuesday '
let newQuote = day + ' is Funday'
let val = newQuote.indexOf("day", 5)//buradaki amac ilk day den sonraki day i yakalamak
console.log(val)

//tuesday is Funday
let count = 0
let value = newQuote.indexOf("day")
while(value!== -1)
    {
        count ++
        value = newQuote.indexOf("day", value+1)

    }
console.log(count)

let person = new Person("Samina", "Silver")
console.log(person.fullName());