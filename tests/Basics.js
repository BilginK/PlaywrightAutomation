var marks = Array(6)
marks = new Array(20,30,40,50,60)

marks = [20,30,40,50,60,70,75,95,105,112]
console.log(marks.slice(2,5))
marks.push(33)
console.log(marks)
marks.pop();
console.log(marks)
marks.unshift(11)
console.log(marks)
console.log(marks.includes(120))

var sum = 0
for(let i = 0; i<marks.length; i++)
{
    sum = sum + marks[i]
}
console.log(sum)

//reduce
total = marks.reduce((sum, mark)=> sum + mark, 0)
console.log(total)

//filter
let newFilter = marks.filter(mark=>mark%2===0)
console.log(newFilter)

//map
let mapArry = newFilter.map(mark=>mark*3)
console.log(mapArry)

//sort()
let fruit = ["banana", "mango", "pomegrante", "apple"]
console.log(fruit.sort())
console.log(fruit.reverse())

var score = [12, 3, -5, -10, 23, 8 ]
console.log(score.sort((a,b)=>a-b))