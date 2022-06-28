
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
