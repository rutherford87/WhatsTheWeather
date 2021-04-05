//Selectors
var cityHeader = document.getElementById('cityHeader');
var todayTempEl = document.getElementById("todayTemp");
var todayWindEl = document.getElementById('todayWind');
var todayHumidEl = document.getElementById('todayHumid');
var todayUVEl = document.getElementById('todayUV');
var submitBtn = document.getElementById('submitBtn');
var inputCityEl = document.getElementById('inputCity');
var containerEl = document.getElementsByClassName('container');
var cityList = [];
var today = moment();

//Day 1 Forecast selectors
var day1Temp = document.getElementById('day1Temp');
var day1Wind = document.getElementById('day1Wind');
var day1Humid = document.getElementById('day1Humid');
var day1UV = document.getElementById('day1UV');

//Day 2 Forecast selectors
var day2Temp = document.getElementById('day2Temp');
var day2Wind = document.getElementById('day2Wind');
var day2Humid = document.getElementById('day2Humid');
var day2UV = document.getElementById('day2UV');

//Functions
  //getWeatToday will fetch the current conditions from the city in the form after clicking submit
function getWeatToday(event) {
  event.preventDefault();
  var inputCity = inputCityEl.value;
  cityList.push(inputCity);
  localStorage.setItem('cityList', JSON.stringify(cityList));

  //recall list on screen with create elements?
  var cityUl = document.getElementById('cityUl');
     
      
  while( cityUl.firstChild ){
  cityUl.removeChild( cityUl.firstChild );
} 
      for (var i=0; i<cityList.length; i++){
 
       var relistCity = document.createElement('BUTTON');
      var text = document.createTextNode(cityList[i]);
      relistCity.appendChild(text);
      cityUl.appendChild(relistCity);
    }
  var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' +inputCity+ '&units=imperial&appid=b1c903e5d1f873b35b51140c6c7621da';  
 
  fetch(requestUrl)
    .then(function (response) {
      // console.log(response);
      return response.json();
      //console.log(response)
    })
    .then(function (data) {
     console.log(data)
        cityHeader.textContent=(inputCity+' on ' +(today.format("dddd, MMM Do, YYYY")));
        todayTempEl.textContent=("Temp: " +data.list[0].main.temp +'°F');
        todayWindEl.textContent=('Wind: ' + data.list[0].wind.speed + ' mph');
        todayHumidEl.textContent=('Humidity: '+data.list[0].main.humidity+' %');
        console.log(data.list[0].dt)

        day1Temp.textContent=('Temp: ' +data.list[8].main.temp);
        day1Wind.textContent=('Wind: ' + data.list[8].wind.speed + ' mph');
        day1Humid.textContent=('Humidity: '+data.list[8].main.humidity+' %');
       
        day2Temp.textContent=('Temp: ' +data.list[16].main.temp);
        day2Wind.textContent=('Wind: ' + data.list[16].wind.speed + ' mph');
        day2Humid.textContent=('Humidity: '+data.list[16].main.humidity+' %');
    });
}
//data has 5 day forecast in it - just call the correct [hour] from list when making the 5 day cards...


//Event Listeners
submitBtn.addEventListener("click", getWeatToday); 
