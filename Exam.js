
/*
// random number 1
var x = 9
for (i = 0; i <= 255; i++) {
    var y = math.round((i * Math.random + 9))
    return y;
}
//date
2(1)
var year = new Date()
var yeartoday = year.getFullYear()
console.log(yeartoday);

2(2)
var month = new Date()
var monthToday = month.getMonth()
Number(monthToday)
console.log(monthToday)

2(3)
var date = new Date()
date.getDate()
console.log(date)

2(4)
var date = new Date();
  Number(date.getDate())  
console.log(date);

2(5) 
var hour = new Date();
hour.getHours()
alert(hour)

2(6)
var minute = new Date()
minute.getMinutes()

2(7)
function year(x,y,z,p) {
  var x = (24 * 60 * 60)
var y = (2022 - 1970)
if (z === 365) {
 var   p= (z*y*x)
} else if (z = 366) {
  var  p = (z*y*x)
    }
    var year = new Date().getFullYear()
    var date = new Date().getDate()
    let monthleft = (year - date)
    var monthused = (z - monthleft)
    var totalseconds = (p + monthused * x)
 return totalseconds

//at this point it is to junuary
  
}
year()
//
3
var user  = new Date()
if (user >= 18) {
    var date = new Date().getFullYear
    window.prompt(date)
} else {
    console.log("you are underage")
}

4
var d = new Date().setFullYear(YYYY - MM - DD-HH-mm)
var d = new Date()
  .getFullYear(DD-MM-YYYY-HH-mm )
  var d = new Date()
    .getFullYear(DD/MM/YYYY/HH/mm)
    

5

var user = 18
window.prompt("enter your age")
if (user >= 18) {
        alert("you are old")
}
else {
    alert('not quality')
}
6
var mikeAge = 10
window.prompt("enter your age")
if (age>mikeAge) {
    alert("you are older")
} else if (age< mikeAge) {
    alert('i am older')
}
else {
    alert("same age")
}
7
function num(a, b) {
    if (a > b) {
        alert( "a is greater than b")
    } else {
        alert("a is less than b")
    }
}
const number = num(5, 4)
console.log(number)

8











part B
1
//var grade = 64

//if(grade >= 80){
  //document.write("excellent")
//}else if(grade >= 70 && grade <80){
  //document.write("good A ")
//}else if(grade >= 60 && grade <70){
//
//}
//else
  //{document.write("poor")}


2




3
var x = [0,1,2,3,4,5,6,7,8,9,10]
for (i = 0; i <= x.length; i++){
    console.log(i*i)
}

4
var x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var y = x.map(mapNum)

for (i = 0; i <= x.length; i++) {


    function mapNum(value) {
        document.write(value * i)
    }
}
5
//sum of even
var x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var y = x.map(mapNum)

for (i = 0; i <= x.length; i+=2) {


    function mapNum(value) {
        document.write(value * i)
    }
}
6
var x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var y = x.map(mapNum)

for (i = 0; i <= x.length; i+=2) {


    function mapNum(value) {
        document.write(value * i)
    }
}

//odd
var x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var y = x.map(mapNum)

for (i = 0; i <= x.length; i +=!2 ) {


    function mapNum(value) {
        document.write(value * i)
    }
}

var array = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
var i = 0;
var len = array.length;
for (; i < len; ) {
  text += array[i] + "<br>";
  i++;
}
7
var fruit = ['banana', 'orange', 'mango', 'lemon'] 
var i = 0;
var len = fruit.length;
for ( i < len;) {
    text += fruit[i] + "<br>";
    i++;
}

8





part c 

const countries = [
'Albania',
'Bolivia',
'Canada',
'Denmark',
'Ethiopia',
'Finland',
'Germany',
'Hungary',
'Ireland',
'Japan',
'Kenya'
]

1 const land = countries.find((itemN) => itemN === countries.includes("land"))
3 const land = countries.find((itemN) => itemN === countries.includes("land"))


7
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift("meat"); 
shoppingCart.push("sugar")
shoppingCart.pop()

9
1. const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
2. const backEnd = ['Node','Express', 'MongoDB']
var fullstack = frontEnd.concatbackEnd


10
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.compare()











