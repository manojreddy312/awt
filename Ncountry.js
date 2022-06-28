 async function getN(){
    let response = await fetch("https://restcountries.com/v3.1/currency")
    var result = await response.json();
    console.log(result);
}

getN();