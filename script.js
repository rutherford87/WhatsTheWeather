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

//var cityButton = document.getElementsByClassName(city button)

//Day 1 Forecast selectors
var day1card = document.getElementById('day1card');
var day1Temp = document.getElementById('day1Temp');
var day1Wind = document.getElementById('day1Wind');
var day1Humid = document.getElementById('day1Humid');
var day1UV = document.getElementById('day1UV');

//Day 2 Forecast selectors
var day2card = document.getElementById('day2card');
var day2Temp = document.getElementById('day2Temp');
var day2Wind = document.getElementById('day2Wind');
var day2Humid = document.getElementById('day2Humid');
var day2UV = document.getElementById('day2UV');
//Day 4 Forecast selectors
var day3card = document.getElementById('day3card');
var day3Temp = document.getElementById('day3Temp');
var day3Wind = document.getElementById('day3Wind');
var day3Humid = document.getElementById('day3Humid');
var day3UV = document.getElementById('day3UV');
//Day 4 Forecast selectors
var day4card = document.getElementById('day4card');
var day4Temp = document.getElementById('day4Temp');
var day4Wind = document.getElementById('day4Wind');
var day4Humid = document.getElementById('day4Humid');
var day4UV = document.getElementById('day4UV');
//Day 5 Forecast selectors
var day5card = document.getElementById('day5card');
var day5Temp = document.getElementById('day5Temp');
var day5Wind = document.getElementById('day5Wind');
var day5Humid = document.getElementById('day5Humid');
var day5UV = document.getElementById('day5UV');

//Functions
  //getWeatToday will fetch the current conditions from the city in the form after clicking submit
function getWeatToday(event) {
  event.preventDefault();

  //***Add style for display none to 
  var inputCity = inputCityEl.value;
  cityList.push(inputCity);
  localStorage.setItem('cityList', JSON.stringify(cityList));

  //recall list on screen with create elements?
  var cityUl = document.getElementById('cityUl');
     
      
  while( cityUl.firstChild ){
  cityUl.removeChild( cityUl.firstChild );
} 
      for (var i=0; i<cityList.length; i++){
 
       var relistCity = document.createElement('button');
       relistCity.setAttribute('id', 'cityButton');
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

     var lat = data.city.coord.lat;
     var long = data.city.coord.lon;
     console.log(lat)
     console.log(long)


        cityHeader.textContent=(inputCity+' on ' +(today.format("dddd, MMM Do, YYYY")));
        var displayIcon = document.createElement("img");
        displayIcon.src = "https://openweathermap.org/img/wn/"+data.list[0].weather[0].icon+"@2x.png";
        cityHeader.appendChild(displayIcon);
        todayTempEl.textContent=("Temp: " +data.list[0].main.temp +'°F');
        todayWindEl.textContent=('Wind: ' + data.list[0].wind.speed + ' mph');
        todayHumidEl.textContent=('Humidity: '+data.list[0].main.humidity+' %');
       
        //1 day forecast card
        var displayIcon1 = document.createElement("img");
        displayIcon1.src = "https://openweathermap.org/img/wn/"+data.list[8].weather[0].icon+"@2x.png";
        day1card.appendChild(displayIcon1);
        day1Temp.textContent=('Temp: ' +data.list[8].main.temp);
        day1Wind.textContent=('Wind: ' + data.list[8].wind.speed + ' mph');
        day1Humid.textContent=('Humidity: '+data.list[8].main.humidity+' %');
               
        //2 day forecast card
        var displayIcon2 = document.createElement("img");
        displayIcon2.src = "https://openweathermap.org/img/wn/"+data.list[16].weather[0].icon+"@2x.png";
        day2card.appendChild(displayIcon2);
        day2Temp.textContent=('Temp: ' +data.list[16].main.temp);
        day2Wind.textContent=('Wind: ' + data.list[16].wind.speed + ' mph');
        day2Humid.textContent=('Humidity: '+data.list[16].main.humidity+' %');
                //3 day forecast card
                var displayIcon3 = document.createElement("img");
                displayIcon3.src = "https://openweathermap.org/img/wn/"+data.list[24].weather[0].icon+"@2x.png";
                day3card.appendChild(displayIcon3);
                day3Temp.textContent=('Temp: ' +data.list[24].main.temp);
                day3Wind.textContent=('Wind: ' + data.list[24].wind.speed + ' mph');
                day3Humid.textContent=('Humidity: '+data.list[24].main.humidity+' %');
                        //4 day forecast card
        var displayIcon4 = document.createElement("img");
        displayIcon4.src = "https://openweathermap.org/img/wn/"+data.list[32].weather[0].icon+"@2x.png";
        day4card.appendChild(displayIcon2);
        day4Temp.textContent=('Temp: ' +data.list[32].main.temp);
        day4Wind.textContent=('Wind: ' + data.list[32].wind.speed + ' mph');
        day4Humid.textContent=('Humidity: '+data.list[32].main.humidity+' %');
                //5 day forecast card
                var displayIcon5 = document.createElement("img");
                displayIcon5.src = "https://openweathermap.org/img/wn/"+data.list[39].weather[0].icon+"@2x.png";
                day5card.appendChild(displayIcon5);
                day5Temp.textContent=('Temp: ' +data.list[39].main.temp);
                day5Wind.textContent=('Wind: ' + data.list[39].wind.speed + ' mph');
                day5Humid.textContent=('Humidity: '+data.list[39].main.humidity+' %');
    var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+long+'&exclude=minutely,hourly,alerts&appid=b1c903e5d1f873b35b51140c6c7621da';  
 
         fetch(requestUrl)
           .then(function (response) {
             return response.json();
           })
           .then(function (data) {
            console.log(data)})
          //data logs correctly. UVI is found within the dataset, but getting it to call with data.current.uvi is unsuccessful  
          });
              
}

//Event Listeners
submitBtn.addEventListener('click', getWeatToday);

// //Recall forecast when a city from the list is selected, although it is unsuccessful currently
// if (cityList.length){
//   console.log(cityList);
// var cityButtons = document.getElementsById('cityButton')};


// cityButtons.addEventListener('click', function(event){
//   event.preventDefault();
//   console.log('click worked');
//   //***Add style for display none to 
//   var inputCity = event.target;
//     localStorage.setItem('cityList', JSON.stringify(cityList));

//   //recall list on screen with create elements?
//   var cityUl = document.getElementById('cityUl');
     
      
//   // while( cityUl.firstChild ){
//   // cityUl.removeChild( cityUl.firstChild );
// //} 
//       for (var i=0; i<cityList.length; i++){
 
//        var relistCity = document.createElement('button');
//        relistCity.setAttribute('id', 'cityButton');
//        var text = document.createTextNode(cityList[i]);
//       relistCity.appendChild(text);
//       cityUl.appendChild(relistCity);
//     }
//   var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' +inputCity+ '&units=imperial&appid=b1c903e5d1f873b35b51140c6c7621da';  
 
//   fetch(requestUrl)
//     .then(function (response) {
//       // console.log(response);
//       return response.json();
//       //console.log(response)
//     })
//     .then(function (data) {
//      console.log(data)
//         cityHeader.textContent=(inputCity+' on ' +(today.format("dddd, MMM Do, YYYY")));
//         todayTempEl.textContent=("Temp: " +data.list[0].main.temp +'°F');
//         todayWindEl.textContent=('Wind: ' + data.list[0].wind.speed + ' mph');
//         todayHumidEl.textContent=('Humidity: '+data.list[0].main.humidity+' %');
//         console.log(data.list[0].dt)

//         day1Temp.textContent=('Temp: ' +data.list[8].main.temp);
//         day1Wind.textContent=('Wind: ' + data.list[8].wind.speed + ' mph');
//         day1Humid.textContent=('Humidity: '+data.list[8].main.humidity+' %');
       
//         day2Temp.textContent=('Temp: ' +data.list[16].main.temp);
//         day2Wind.textContent=('Wind: ' + data.list[16].wind.speed + ' mph');
//         day2Humid.textContent=('Humidity: '+data.list[16].main.humidity+' %');
//     })});
