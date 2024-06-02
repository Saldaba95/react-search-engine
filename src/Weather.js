import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
export default function Weather() {
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
        <h1>New York, USA</h1>
        <ul>
          <li>Sunday 05:00</li>
          <li>Mostly Sunny</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/SunnyDayV3.svg"
                alt="imageforcurrentweather"
                className="float-left"
              />
              <div className="float-left">
                <span className="temp">5</span>
                <span className="unit"> °c</span>
              </div>
            </div>
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
    </div>
  );
}
