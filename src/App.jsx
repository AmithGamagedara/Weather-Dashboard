import "./App.css";
import CurrentWeather from "./Components/CurrentWeather";
import Forecast from "./Components/Forecast";

function App() {
  const currentWeather = {
    temperature: 22,
    condition: "sunny",
    description: "Sunny",
    location: "London, UK",
    humidity: 65,
    windSpeed: 12,
    pressure: 1013,
    feelsLike: 25,
  };

  const forecast = [
    {
      name: "Today",
      high: 25,
      low: 15,
      condition: "sunny",
      description: "Sunny",
    },
    {
      name: "Tomorrow",
      high: 23,
      low: 14,
      condition: "partlyCloudy",
      description: "Partly Cloudy",
    },
    {
      name: "Wednesday",
      high: 18,
      low: 12,
      condition: "lightRain",
      description: "Light Rain",
    },
    {
      name: "Thursday",
      high: 20,
      low: 13,
      condition: "thunderstorm",
      description: "Thunderstorm",
    },
    {
      name: "Friday",
      high: 24,
      low: 16,
      condition: "clear",
      description: "Clear",
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
        <CurrentWeather />
        <Forecast />
      </div>
    </div>
  );
}

export default App;
