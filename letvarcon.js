console.log(a)//prints undefined 
var a=1
console.log(a)//prints 1
var a =2
console.log(a)//prints 2
a=3
console.log(a)//prints 3
let b = 4
console.log(b)//prints 4
//let b = 5 //cannot redeclare block scoped variable b
function f(){
   let b = 6 //redeclaring is allowed here 
   let d=10
}
f()
console.log(b)//prints 5
//console.log(d) //gives reference error 
const c = 6
console.log(c)//prints 6
/*
c=7
console.log(c) //gives type error
const c=8 //cant redeclare block scoped variable c
*/