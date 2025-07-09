# 🌦️ React Weather Dashboard
This is a responsive weather dashboard application that shows you the current weather and a 5-day forecast for your chosen city. It is built to be easy to use and works well on both desktop and mobile devices.

<div align="left">
  <img src="https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" /> <!-- NEW -->
  <img src="https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/OpenWeather-0066A1?style=for-the-badge&logo=OpenWeather&logoColor=white" alt="OpenWeather API" />
  <img src="https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</div>

## ✨ Features

|  |  |
|---|---|
| **Current weather panel** | Temperature, status icon, location, humidity, wind speed (km/h), pressure, and “feels like.” |
| **5‑day forecast** | Noon snapshot for each day (Today, Tomorrow, +3 days). |
| **Section‑level loaders** | Each panel shows its own centered spinner. |
| **Error banner** | Displays a dismissible alert banner when an API request fails (e.g., network error or invalid API key). |
| **Responsive layout** | Two‑column on desktop (≥ 1240 px). Single‑column & centered cards below 480 px. |
| **Environment‑safe** | API key loaded from `.env`; never committed. |

---
<br/>

## 🌐 Live Demo

💻 [Open the application here](https://weather-dashboard-react-application.netlify.app/)

<br/><br/>

> **API key setup:**  
> A sample file named **`.env.sample`** is included in the project.  
> It contains one line:
>
> ```dotenv
> VITE_API_KEY="PLACE_YOUR_API_KEY_HERE"
> ```
>
> Copy this file to **`.env`**, replace `PLACE_YOUR_API_KEY_HERE` with your own OpenWeather API key, and save.  
> The `.env` file is in `.gitignore`, so your personal key will never be committed to the repository.

<br/><br/>
## How to run the application locally?

### Clone the repository
To get started, clone the repository to your local machine:

```bash
git clone https://github.com/AmithGamagedara/Weather-Dashboard.git
cd Weather-Dashboard
```

Install the required Node.js dependencies:
```bash
npm install
```

-> replace your api key

Run the React application:
```bash
npm run dev
```

