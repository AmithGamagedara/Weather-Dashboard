import { useEffect, useState } from "react";
import "./App.css";
import CurrentWeather from "./Components/CurrentWeather/CurrentWeather";
import Forecast from "./Components/Forecast/Forecast";
import { getCurrentWeather, getForecast } from "./services/weatherApi";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);
  const city = "Colombo";

  useEffect(() => {
    setError(null);
    const fetchData = async () => {
      try {
        //data=current weather data
        const data = await getCurrentWeather(city);
        //fdata=forecast weather data
        const fdata = await getForecast(city);

        if (!data) throw new Error("Couldn’t load current weather");
        if (!fdata || !Array.isArray(fdata.list))
          throw new Error("Couldn’t load forecast");

        if (data) {
          setCurrentWeather({
            temp: data.main.temp,
            con: data.weather[0].main,
            lo: data.name,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            hum: data.main.humidity,
            wiSpeed: data.wind.speed,
            pres: data.main.pressure,
            fLike: data.main.feels_like,
          });
        }

        if (fdata && Array.isArray(fdata.list)) {
          const daily = fdata.list
            .filter((i) => i.dt_txt && i.dt_txt.includes("12:00:00"))
            .slice(0, 5);

          const formatted = daily.map((item, idx) => {
            const dateObj = new Date(item.dt * 1000);
            const label =
              idx === 0
                ? "Today"
                : idx === 1
                ? "Tomorrow"
                : dateObj.toLocaleDateString("en-US", { weekday: "short" });

            return {
              id: idx + 1,
              day: label,
              temp_max: Math.round(item.main.temp_max),
              temp_min: Math.round(item.main.temp_min),
              icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
              desc: item.weather[0].main,
            };
          });

          setForecast(formatted);
        }
      } catch (err) {
        setError(err.message);
      } finally {
      }
    };

    fetchData();
  }, []);

  // const currentWeather = {
  //   temp: 22,
  //   con: "sunny",
  //   lo: "Colombo",
  //   icon: "./assets/weather_icons/sunny.svg",
  //   hum: 65,
  //   wiSpeed: 12,
  //   pres: 1013,
  //   feels_like: 25,
  // };

  //   const demoForecast = [
  //   {
  //     id: 1,
  //     day: "Today",
  //     temp_max: 25,
  //     temp_min: 15,
  //     icon: "https://openweathermap.org/img/wn/01d@2x.png",
  //     desc: "Sunny",
  //   },
  //   {
  //     id: 2,
  //     day: "Tomorrow",
  //     temp_max: 23,
  //     temp_min: 14,
  //     icon: "https://openweathermap.org/img/wn/02d@2x.png",
  //     desc: "Partly Cloudy",
  //   },
  //   {
  //     id: 3,
  //     day: "Wed",
  //     temp_max: 18,
  //     temp_min: 12,
  //     icon: "https://openweathermap.org/img/wn/10d@2x.png",
  //     desc: "Light Rain",
  //   },
  //   {
  //     id: 4,
  //     day: "Thu",
  //     temp_max: 20,
  //     temp_min: 13,
  //     icon: "https://openweathermap.org/img/wn/11d@2x.png",
  //     desc: "Thunderstorm",
  //   },
  //   {
  //     id: 5,
  //     day: "Fri",
  //     temp_max: 24,
  //     temp_min: 16,
  //     icon: "https://openweathermap.org/img/wn/01d@2x.png",
  //     desc: "Clear",
  //   },
  // ];

  return (
    <div className="weather-dashboard">
      {error && (
        <div className="alert-box">
          <span>{error}</span>
          <button onClick={() => setError(null)}>&times;</button>
        </div>
      )}
      {/* header section */}
      <header className="dashboard-header">
        <h1 className="dashboard-title">
          <span className="title-icon">🌤️</span>
          Weather Dashboard
        </h1>
        <p className="dashboard-subtitle">Your personal weather companion</p>
      </header>

      {/* dashboard content section */}
      <div className="dashboard-content">
        <div className="left-container">
          <CurrentWeather data={currentWeather} />
        </div>
        <div className="right-container">
          <Forecast items={forecast} />
        </div>
      </div>
    </div>
  );
}

export default App;
