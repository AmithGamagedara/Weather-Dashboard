import "./App.css";
import CurrentWeather from "./Components/CurrentWeather/CurrentWeather";
import Forecast from "./Components/Forecast/Forecast";

function App() {
  const currentWeather = {
    temp: 22,
    con: "sunny",
    lo: "Colombo",
    icon: "./assets/weather_icons/sunny.svg",
    hum: 65,
    wiSpeed: 12,
    pres: 1013,
    feels_like: 25,
  };

  const demoForecast = [
  {
    id: 1,
    day: "Today",
    temp_max: 25,
    temp_min: 15,
    icon: "https://openweathermap.org/img/wn/01d@2x.png",
    desc: "Sunny",
  },
  {
    id: 2,
    day: "Tomorrow",
    temp_max: 23,
    temp_min: 14,
    icon: "https://openweathermap.org/img/wn/02d@2x.png",
    desc: "Partly Cloudy",
  },
  {
    id: 3,
    day: "Wed",
    temp_max: 18,
    temp_min: 12,
    icon: "https://openweathermap.org/img/wn/10d@2x.png",
    desc: "Light Rain",
  },
  {
    id: 4,
    day: "Thu",
    temp_max: 20,
    temp_min: 13,
    icon: "https://openweathermap.org/img/wn/11d@2x.png",
    desc: "Thunderstorm",
  },
  {
    id: 5,
    day: "Fri",
    temp_max: 24,
    temp_min: 16,
    icon: "https://openweathermap.org/img/wn/01d@2x.png",
    desc: "Clear",
  },
];

  return (
    <div className="weather-dashboard">
      <header className="dashboard-header">
        <h1 className="dashboard-title">
          <span className="title-icon">🌤️</span>
          Weather Dashboard
        </h1>
        <p className="dashboard-subtitle">Your personal weather companion</p>
      </header>

      <div className="dashboard-content">
        <div className="left-container">
        <CurrentWeather {...currentWeather}/>
        </div>
        <div className="right-container">
        <Forecast items={demoForecast}/>
        </div>
      </div>
    </div>
  );
}

export default App;
