import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Sunday 07:00",
      description: response.data.weather[0].description,
      iconUrl:
        "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/SunnyDayV3.svg",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Container">
        <div className="Weather">
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  className="Search w-100"
                  type="search"
                  placeholder="Enter a city...."
                  autoFocus="on"
                />
              </div>
              <div className="col-3">
                <button
                  type="Submit"
                  className="btn btn-secondary w-100
      "
                >
                  Search
                </button>
              </div>
            </div>
          </form>
          <h1>{weatherData.city}</h1>
          <ul>
            <li>{weatherData.date}</li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
          <div className="row mt-3">
            <div className="col-6">
              <div className="clearfix">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  className="float-left"
                />
                <div className="float-right">
                  <span className="temp">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="unit"> °c</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation: 12%</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} m/s</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "616b14cbd38253313b3b8852fa77335d";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading.....";
  }
}
