import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">{forecast[4].dt}</div>
            <WeatherIcon code={forecast[4].weather[4].icon} size={36} />
            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">
                {Math.round(forecast[4].temp.max)}°
              </span>
              <span className="WeatherForecast-temperature-min">
                {Math.round(forecast[4].temp.min)} °
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "616b14cbd38253313b3b8852fa77335d";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}$units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
