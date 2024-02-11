import React, {  useState } from 'react'
import './Landing.css'
import { useNavigate } from 'react-router-dom'
import LiveDateTime from '../Components/LiveDateTime'
function LandingPage() {
  const navigateByUrl=useNavigate()
  
  
  return (
    <>
    <div className="main">
      <div className="part1 text-center">
       <h1 className='text-center'>Real time weather app</h1>
       <p className='paras'>
A weather app is  tool designed to provide users with real-time and forecasted weather information for a specific location. Typically, users input a city or use their device's location services to retrieve accurate weather data. The app leverages weather APIs, such as OpenWeatherMap, to fetch and display information like temperature, humidity, wind speed, and atmospheric conditions. Users can stay informed about current weather conditions and plan their activities accordingly. Weather apps often feature user-friendly interfaces, intuitive design. Whether it's checking the day's forecast or preparing for a trip, weather apps have become indispensable for individuals seeking up-to-date and reliable weather information</p>
       <button className='btn btn-primary' onClick={()=>navigateByUrl("/home")}>Get started</button>
      </div>
      <div className="part2">
   <div className="image">
   <h1><i class="fa-solid fa-location-dot fa-xs me-2"></i>Thrissur</h1>
   <p><LiveDateTime/></p>
  <img style={{height:'100px',width:'140px', marginTop:'-20px'}} src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" alt="" />
  <h1>31&#8451;</h1>
  <h5>feels like 30&#8451;</h5>
  <div className="wind-speed">
    <div className="wind">
      <img style={{height:'50px',width:'50px'}} src="https://cdn2.iconfinder.com/data/icons/save-for-a-rainy-day-1/60/cloud-sun-wind-512.png" alt="" />
    <h6>wind:4km/hr</h6>
    </div>
    <div className="speed">
    <img style={{height:'50px',width:'50px'}} src="https://cdn-icons-png.flaticon.com/512/9342/9342439.png" alt="" />
    <h6>humidity:30%</h6>
    </div>
   
  </div>
   </div>
      </div>
    </div>
    
    </>
  )
}

export default LandingPage