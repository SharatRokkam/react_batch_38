import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"c9cc81972027746b6585cb802d5768bd"}`
      );
      console.log(response);
      setWeather(response);
    } catch (error) {
      console.log("error fetching the data:", error);
    }
  };

  const handleClick = () => {
    fetchWeather();
  };

  return (
    <>
      <h1>Weather App</h1>
      <div className="weather-container">
        <input
          type="text"
          placeholder="enter your query"
          value={city}
          onChange={handleCityChange}
        />
        <button onClick={handleClick}>Search</button>

        {weather && (
          <>
            <div>
              <h3>{weather.data.name}</h3>
              <p>Temperature is: {weather.data.main.temp} K</p>
              <p>Desciption : {weather.data.weather[0].description}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Weather;
