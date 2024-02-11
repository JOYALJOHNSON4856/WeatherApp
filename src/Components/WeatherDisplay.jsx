import React from 'react';
import './WeatherDisplay.css'
import LiveDateTime from './LiveDateTime';
const WeatherDisplay = ({ data }) => {
  const { name, main, weather,wind } = data;
  const weatherIconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;

  return (
    <div className='weatherdisplay'>
        <div className="carsss">
        <h1> <i class="fa-solid fa-location-dot fa-xs"></i> {name}</h1>
        <p className='tym'>{<LiveDateTime/>}</p>
      <p className='temp'> {(main.temp.toFixed(0)/10)}°C</p>
      <p className='feel'>Feels like:{(main.feels_like.toFixed(0)/10)}°C</p>
      <img src={weatherIconUrl} alt="fff"/>
      <p className='kon'> {weather[0].description}</p>
      <div className="cond">
    
        <div className="wind">
        <img style={{height:'50px',width:'50px'}} src="https://cdn2.iconfinder.com/data/icons/save-for-a-rainy-day-1/60/cloud-sun-wind-512.png" alt="" />
        <p className='wi'>Windspeed: {wind.speed}km/hr</p>
        </div>
        <div className="humid">
    <img style={{height:'50px',width:'50px'}} src="https://cdn-icons-png.flaticon.com/512/9342/9342439.png" alt="" />
        <p>Humidity: {main.humidity}%</p>
        </div>
      </div>
     
      
        </div>
   
    </div>
  );
};

export default WeatherDisplay;