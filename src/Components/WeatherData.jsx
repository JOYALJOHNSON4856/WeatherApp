import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay';
import './WeatherData.css'

const WeatherData = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const apiKey = '6557810176c36fac5f0db536711a6c52';

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      setWeatherData(response.data);
      setError('');
      
    } catch (error) {
      setWeatherData(null);
      setError('Error fetching weather data. Please try again.');
    }
  };

  return (
    <div className="mainz">
 <div className='inputts'>
  
  <input
     type="text"
     placeholder='Enter city name'
     className='form-control'
     value={city}
     onChange={(e) => setCity(e.target.value)}
   />

 <button className='btn btn-primary' onClick={fetchWeather}>Get Weather</button>


 


 
</div>
{error && <p style={{ color: 'red' }}>{error}</p>}
{weatherData && <WeatherDisplay data={weatherData} />}
    </div>
   
  );
};

export default WeatherData;