import React, { useState } from 'react'
import WeatherCard from '../Common/WeatherCard';
import "../Forecast/Forecast.css"

function Forecast({items=[]}) {

    const [selectedId, setSelectedId] = useState(null);

  return (
    <div>

        <section className="forecast-wrapper">
      <h3>5‑Day Forecast</h3>

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

  )
}

export default Forecast