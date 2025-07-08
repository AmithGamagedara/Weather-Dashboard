import React from "react";

function WeatherCard({ day, temp_max, temp_min, icon, desc, active, onSelect }) {
  return (
    <button className={`fc-card ${active ? "active" : ""}`} onClick={onSelect}>
      <p className="fc-day">{day}</p>
      <div className="fw-icon-wrapper">
      <img src={icon} alt={desc} className="fc-icon"/>
      </div>
      <div className="fc-temps">
        <span>{temp_max}°</span>
        <span className="fc-low">{temp_min}°</span>
      </div>
      <p className="fc-desc">{desc}</p>
    </button>
  );
}

export default WeatherCard;
