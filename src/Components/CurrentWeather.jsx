import React from "react";
import sunny from "../assets/weather icons/sunny.svg";
import "../Components/CurrentWeather.css";

function CurrentWeather() {
  return (
    <div>
      <section className="cw-card">
        <div className="cw-icon-wrapper">
          <img src={sunny} className="cw-icon" />
        </div>

        <h2 className="cw-temp">24°C</h2>
        <p className="cw-condition">sunny</p>

        <p className="cw-location">📍 colombo</p>

        <div className="cw-grid">
          <div className="cw-grid-bg">
            <p className="cw-label">Humidity</p>
            <p className="cw-value">19%</p>
          </div>
          <div className="cw-grid-bg">
            <p className="cw-label">Wind Speed</p>
            <p className="cw-value">200 km/h</p>
          </div>
          <div className="cw-grid-bg">
            <p className="cw-label">Pressure</p>
            <p className="cw-value">100 hPa</p>
          </div>
          <div className="cw-grid-bg">
            <p className="cw-label">Feels Like</p>
            <p className="cw-value">24°C</p>
          </div>
        </div>

        <button className="cw-btn">⭐ Add to Favorites</button>
      </section>
    </div>
  );
}

export default CurrentWeather;
