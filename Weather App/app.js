const apiKey = "543b6cd53345298ecf9055dad4644f74";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const weatherIcon = document.querySelector(".weather-icon");
function search(){   
    try{
    let city = document.getElementById("searchInput").value;
    if (city === "" || city === null){
        return;
    }
    checkWeather(city);
    }catch(e){
        console.log(e);
    }
}

async function checkWeather(city){
    const response = await fetch(apiURL+ `&q=${city}` + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "./assets/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./assets/clear.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./assets/rain.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./assets/mist.png";
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "./assets/snow.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./assets/drizzle.png";
    }

}

