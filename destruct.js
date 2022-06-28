//fat arrows 
let sum = (a,b)=>{
    return a+b
}
let result = sum(3,4)
console.log(result)


//destructuring operators 
let [a,b,...c] = [1,2,3,4,5]
console.log(a)
console.log(b)
console.log(c)


//function generators 
let arr = [1,2,3]
function * generator(){
yield 'a'
yield* arr
return 'over'
yield 'b'
}
var it = generator()
console.log(JSON.stringify(it.next()))
console.log(JSON.stringify(it.next()))
console.log(JSON.stringify(it.next()))
console.log(JSON.stringify(it.next()))
console.log(JSON.stringify(it.next()))
console.log(JSON.stringify(it.next()))


/*
output:-

7
1
2
[ 3, 4, 5 ]
{"value":"a","done":false}
{"value":1,"done":false}  
{"value":2,"done":false}
{"value":3,"done":false}
{"value":"over","done":true}
{"done":true}
*/