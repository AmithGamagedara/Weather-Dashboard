import React from "react";
import sunny from "../../assets/weather_icons/sunny.svg";
import "../CurrentWeather/CurrentWeather.css";

function CurrentWeather({
    temp,
    con,
    lo,
    icon,
    hum,
    wiSpeed,
    pres,
    fLike,
}) {

  return (
    <div>
      <section className="cw-card">
        <div className="cw-icon-wrapper">
          <img  className="cw-icon" alt={icon} src={icon}/>
        </div>

        <h2 className="cw-temp">{temp}°C</h2>
        <p className="cw-condition">{con}</p>

        <p className="cw-location">📍 {lo}</p>

        <div className="cw-grid">
          <div className="cw-grid-bg">
            <p className="cw-label">Humidity</p>
            <p className="cw-value">{hum}%</p>
          </div>
          <div className="cw-grid-bg">
            <p className="cw-label">Wind Speed</p>
            <p className="cw-value">{wiSpeed} km/h</p>
          </div>
          <div className="cw-grid-bg">
            <p className="cw-label">Pressure</p>
            <p className="cw-value">{pres} hPa</p>
          </div>
          <div className="cw-grid-bg">
            <p className="cw-label">Feels Like</p>
            <p className="cw-value">{fLike} °C</p>
          </div>
        </div>

        <button className="cw-btn">⭐ Add to Favorites</button>
      </section>
    </div>
  );
}

export default CurrentWeather;
