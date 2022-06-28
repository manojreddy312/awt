let double = (n) => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(n*2)
        }, 1000);
        resolve(2*n)
    })
}

double(2).then(double).then(double).then(console.log)//prints 16