const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1cf9e66972msh9a22549e698898fp14aa8ejsn3c56297089a1",
    "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  fetch(
    "https://yahoo-weather5.p.rapidapi.com/weather?location=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cityName.innerHTML =
        response.location.city +
        ", " +
        response.location.region +
        ", " +
        response.location.country;
      timeStamp = response.current_observation.pubDate;
      console.log(timeStamp);
      temp.innerHTML = Math.round(
        (response.current_observation.condition.temperature - 32) / 1.8
      );
      weather.innerHTML = response.current_observation.condition.text;
      pubDate.innerHTML = new Date().toDateString();

      humidity.innerHTML = response.current_observation.atmosphere.humidity;
      pressure.innerHTML = response.current_observation.atmosphere.pressure;
      visibility.innerHTML = response.current_observation.atmosphere.visibility;

      wind_speed.innerHTML = response.current_observation.wind.speed;
      sunrise.innerHTML = response.current_observation.astronomy.sunrise;
      sunset.innerHTML = response.current_observation.astronomy.sunset;

      day1.innerHTML = response.forecasts[1].day;
      day2.innerHTML = response.forecasts[2].day;
      day3.innerHTML = response.forecasts[3].day;
      day4.innerHTML = response.forecasts[4].day;
      day5.innerHTML = response.forecasts[5].day;
      day6.innerHTML = response.forecasts[6].day;

      w1.innerHTML = response.forecasts[1].text;
      w2.innerHTML = response.forecasts[2].text;
      w3.innerHTML = response.forecasts[3].text;
      w4.innerHTML = response.forecasts[4].text;
      w5.innerHTML = response.forecasts[5].text;
      w6.innerHTML = response.forecasts[6].text;

      mt1.innerHTML = Math.round((response.forecasts[1].low - 32) / 1.8);
      mt2.innerHTML = Math.round((response.forecasts[2].low - 32) / 1.8);
      mt3.innerHTML = Math.round((response.forecasts[3].low - 32) / 1.8);
      mt4.innerHTML = Math.round((response.forecasts[4].low - 32) / 1.8);
      mt5.innerHTML = Math.round((response.forecasts[5].low - 32) / 1.8);
      mt6.innerHTML = Math.round((response.forecasts[6].low - 32) / 1.8);

      max1.innerHTML = Math.round((response.forecasts[1].high - 32) / 1.8);
      max2.innerHTML = Math.round((response.forecasts[2].high - 32) / 1.8);
      max3.innerHTML = Math.round((response.forecasts[3].high - 32) / 1.8);
      max4.innerHTML = Math.round((response.forecasts[4].high - 32) / 1.8);
      max5.innerHTML = Math.round((response.forecasts[5].high - 32) / 1.8);
      max6.innerHTML = Math.round((response.forecasts[6].high - 32) / 1.8);
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Pune");

delhi.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather("Delhi");
});

mumbai.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather("Mumbai");
});

banglore.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather("bangalore");
});
