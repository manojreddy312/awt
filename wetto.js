async function fetchWeather(){
    city = document.getElementById("city").value;
    let  response = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=b79ad55a7ed9a75fdb36ac8bbd7eac15&units=metric');
    var result = await response.json();
    document.getElementById("temp").value=result.main.temp;
}
fetchWeather();