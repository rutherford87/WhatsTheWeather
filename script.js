//Selectors
var todayTemp = document.getElementById("todayTemp");
var submitBtn = document.getElementById('submitBtn');
var inputCityEl = document.getElementById('inputCity');


//Functions
function getWeatToday() {


  // fetch request gets a list of all the repos for the node.js organization
  var inputCity = inputCityEl.value;
  console.log('form value' +inputCity)
  var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=b1c903e5d1f873b35b51140c6c7621da';
    
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
//data has 5 day forecast in it - just call the correct [hour] from list when making the 5 day cards...
console.log('form value' +inputCity);

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
submitBtn.addEventListener("click", getWeatToday()); 
