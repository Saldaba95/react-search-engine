import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Forecast-app">
      <input className="Search" type="search" placeholder="Enter a city...." />
      <button
        type="Submit"
        className="btn btn-secondary
      "
      >
        Search
      </button>
      <h1>New York</h1>
      <ul>
        <li>Sunday 05:00</li>
        <li>Mostly Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/SunnyDayV3.svg"
            alt="Forecast-image"
          />
          5°c
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 12%</li>
            <li>Humidity: 90%</li>
            <li>Wind: 12 m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
