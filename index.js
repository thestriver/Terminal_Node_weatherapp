const axios = require("axios");

let apiKey = "6ab227b4a350dd98e3e201f54ba95085";
let city = "denver";
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

// Make a request for a user with a given ID
axios
  .get(url)
  .then(function (response) {
    // handle success
    console.log(`It's ${response.data.main.temp} in ${response.data.name} 
    and the pressure is about ${response.data.main.pressure}`);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
