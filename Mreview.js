function getReview1(){
fetch('https://imdb-api.com/en/API/UserRatings/k_io03whlz/tt1375666')
.then(response=>{
    console.log(response.json());
})
}

getReview1();
