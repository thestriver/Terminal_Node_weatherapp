const axios = require("axios");


// const request = require("request");

let apiKey = "6ab227b4a350dd98e3e201f54ba95085";
let city = "denver";
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

// request(url, function (err, response, body) {
//   if (err) {
//     console.log("error:", err);
//   } else {
//     // console.log("body:", body);
//     let weather = JSON.parse(body);
//     let message = `It's ${weather.main.temp} in ${weather.name} and
//     the city's coordinates are ${weather.coord.lon} : ${weather.coord.lat}`;
//     console.log(message);
//   }
// });

// Make a request for a user with a given ID
axios
  .get(url)
  .then(function (response) {
    // handle success
    // console.log(response.data);
    console.log(`It's ${response.data.main.temp} in ${response.data.name} 
    and the pressure is about ${response.data.main.pressure}`);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
