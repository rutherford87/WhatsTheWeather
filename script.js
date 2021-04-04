//Selectors
var todayTemp = document.getElementById("todayTemp");
var submitBtn = document.getElementById('submitBtn');
var inputCityEl = document.getElementById('inputCity');
var containerEl = document.getElementsByClassName('container');
var cityList = [];

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
 
       var relistCity = document.createElement('li');
      var text = document.createTextNode(cityList[i]);
      relistCity.appendChild(text);
      cityUl.appendChild(relistCity);
    }
  var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' +inputCity+ '&appid=b1c903e5d1f873b35b51140c6c7621da';  
 
  fetch(requestUrl)
    .then(function (response) {
      // console.log(response);
      return response.json();
      //console.log(response)
    })
    .then(function (data) {
     console.log(data)
        todayTemp.textContent=("Temp: " +data.list[0].main.temp);
        console.log(data.list[0].dt)
    });
}
//data has 5 day forecast in it - just call the correct [hour] from list when making the 5 day cards...
console.log('form no function' +inputCity);

function getForecast() {
    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=b1c903e5d1f873b35b51140c6c7621da';//compare the hours returned to the above to see if it is a forecast
      
    fetch(requestUrl)
      .then(function (response) {
        // console.log(response);
        return response.json();
        //console.log(response)
      })
      .then(function (data) {
       console.log(data)
        //Loop over the data to generate a table, each table row will have a link to the repo url
          todayTemp.textContent=("Temp: " +data.list[0].main.temp);
          console.log(data.list[0].dt)
      });
  }
 
//Event Listeners
submitBtn.addEventListener("click", getWeatToday); 
