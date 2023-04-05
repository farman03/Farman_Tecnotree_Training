// import React, { useState, useEffect } from 'react';

// const WeatherApp = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const API_KEY = 'your-api-key';
//   const CITY_NAME = 'your-city-name';

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`
//       );
//       const data = await response.json();
//       setWeatherData(data);
//     };
//     fetchWeatherData();
//   }, []);

//   const getWeatherIconUrl = (iconCode) => {
//     return `http://openweathermap.org/img/w/${iconCode}.png`;
//   };

//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp * 1000);
//     const hours = date.getHours();
//     const minutes = '0' + date.getMinutes();
//     const formattedTime = hours + ':' + minutes.substr(-2);
//     return formattedTime;
//   };

//   return (
//     <div className="app-container">
//       {weatherData ? (
//         <div className="weather-container">
//           <div className="city">{weatherData.name}</div>
//           <div className="description">{weatherData.weather[0].description}</div>
//           <div className="temperature">{Math.round(weatherData.main.temp)}°C</div>
//           <div className="icon-container">
//             <img className="icon" src={getWeatherIconUrl(weatherData.weather[0].icon)} alt="weather icon" />
//           </div>
//           <div className="details-container">
//             <div className="detail">
//               <div className="label">Feels like</div>
//               <div className="value">{Math.round(weatherData.main.feels_like)}°C</div>
//             </div>
//             <div className="detail">
//               <div className="label">Humidity</div>
//               <div className="value">{weatherData.main.humidity}%</div>
//             </div>
//             <div className="detail">
//               <div className="label">Wind</div>
//               <div className="value">{Math.round(weatherData.wind.speed)} km/h</div>
//             </div>
//           </div>
//           <div className="last-updated">Last updated: {formatDate(weatherData.dt)}</div>
//         </div>
//       ) : (
//         <div className="loading">Loading...</div>
//       )}
//     </div>
//   );
// };

// export default WeatherApp;

import React from "react";

const Weather = ({ weatherData }) => {
  return (
    <div className="weather-info">
      <h3>{weatherData.name}</h3>
      <p>{weatherData.weather[0].description}</p>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Feels like: {weatherData.main.feels_like}°C</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind: {weatherData.wind.speed}m/s</p>
    </div>
  );
};

export default Weather;
