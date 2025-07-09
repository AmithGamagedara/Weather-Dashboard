import React, { useState } from "react";
import WeatherCard from "../Common/WeatherCard";
import "../Forecast/Forecast.css";
import Loader from "../Common/Loader";

function Forecast({ items = [] }) {
  const [selectedId, setSelectedId] = useState(null);
  if (items.length === 0)
    return (
      <section className="forecast-wrapper">
        <div className="loader-wrapper">
          <Loader />
        </div>
      </section>
    );

  return (
    <div>
      <section className="forecast-wrapper">
        <h3>5‑Day Forecast</h3>

        {/* individual weather card component */}
        <div className="forecast-list">
          {items.map((d) => (
            <WeatherCard
              key={d.id}
              {...d}
              active={d.id === selectedId}
              onSelect={() => setSelectedId(d.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Forecast;
