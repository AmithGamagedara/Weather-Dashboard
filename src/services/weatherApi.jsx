const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

//current weather api integration
export const getCurrentWeather = async (city) => {
  try {
    const res = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!res.ok) throw new Error("API Error");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
};

//forecast weather api integration
export const getForecast = async (city) => {
  try {
    const res = await fetch(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!res.ok) throw new Error("Forecast API Error");
    return await res.json();
  } catch (error) {
    console.error("Error fetching forecast:", error);
    return null;
  }
};
