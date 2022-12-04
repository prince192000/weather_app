//http://api.openweathermap.org/geo/1.0/weather?q={city name}&limit={limit}&appid={API key}

const weatherApi = {
    key: "17fabb7616a61217dca00ee43852fa09",

    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchBox = document.getElementById("input-box");
//Onclick function
 function myFunction() {
        console.log(searchBox.value);
        getWeatherReport(searchBox.value);
        document.querySelector('.weatherbody').style.display ="block";
    };

    //Get weather report
    function getWeatherReport(city) {
        fetch(`${weatherApi.baseUrl}?q=${city}&APPID=${weatherApi.key}&units=metric`)
   .then(weather => {
    return weather.json();
   }).then(showWeatherReport);
    }

    //Show weather report
    function showWeatherReport(weather){
console.log(weather);

let city = document.getElementById('city');
city.innerText = `${weather.name}, ${weather.sys.country}`;

let temp = document.getElementById('temp');
temp.innerHTML = `${Math.round(weather.main.temp)}&deg;c`;

let minmaxTemp = document.getElementById('min-max');
minmaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;c (min) / ${Math.ceil(weather.main.temp_max)}&deg;c (max)`;

let weatherType = document.getElementById('weather');
weatherType.innerHTML = `${weather.weather[0].main}`;

let date = document.getElementById('date');
let todayDate = new Date();
date.innerHTML = dateManage(todayDate);


if(weatherType.textContent == 'Clear') {
    document.body.style.backgroundImage = "url('clear.jpg')";
    
} else if(weatherType.textContent == 'Clouds') {

    document.body.style.backgroundImage = "url('cloudy.jpg')";
    
} else if(weatherType.textContent == 'Haze') {

    document.body.style.backgroundImage = "url('haze.jpg')";
    
}     else if(weatherType.textContent == 'Rain') {
    
    document.body.style.backgroundImage = "url('rainy.jpg')";
    
} else if(weatherType.textContent == 'Snow') {
    
    document.body.style.backgroundImage = "url('images/snowy.jpg')";

} else if(weatherType.textContent == 'Thunderstorm') {

    document.body.style.backgroundImage = "url('thunder-lightning.jpg')";
    
} 
else if(weatherType.textContent == 'Wind') {

    document.body.style.backgroundImage = "url('Windy.jpg')";
    
} 
else if(weatherType.textContent == 'Overcast') {

    document.body.style.backgroundImage = "url('overcast.jpg')";
    
} 
else if(weatherType.textContent == 'Fogg') {

    document.body.style.backgroundImage = "url('foggy.jpg')";
    
} 
else if(weatherType.textContent == 'Smoke') {

    document.body.style.backgroundImage = "url('smoke.jpg')";
    
}
}

   

    //Date manage

    function dateManage(dateArg){

let days = ['Sunday','Monday' , 'Tuesday' , 'Wednesday','Thursday','Friday','Saturday','Sunday'];

let months = ['January','February' , 'March' , 'April','May','June','July','August','September','October','November','December'];

let year = dateArg.getFullYear();
let month = months[dateArg.getMonth()];
let date = dateArg.getDate();

let day = days[dateArg.getDay()];


return `${date} ${month} (${day}) ${year}`;
    }



