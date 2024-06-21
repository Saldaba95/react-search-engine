import React from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temp">{Math.round(props.celsius)}</span>
      <span className="unit">°C</span>
    </div>
  );
}
