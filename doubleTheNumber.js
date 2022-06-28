function doubleAfter2Secods(n){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(n*2),2000);
    })
}

doubleAfter2Secods(2)
.then((result1)=>doubleAfter2Secods(3)
.then((result2)=>doubleAfter2Secods(4)
.then((result3)=>console.log(result1+result2+result3)
)))