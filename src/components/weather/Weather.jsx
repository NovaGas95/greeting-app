import React from 'react'
import './weather.css'
import Search from './search/Search'
import CurrentWeather from './currentWeather/CurrentWeather'
import { WEATHER_API_URL, WEATHER_API_KEY } from '../../api'
import { useState } from 'react'

const Weather = () => {

  const [currentWeather, setCurrentWeather] = useState(null)

  const handleOnSearchChange = (searchData) => {

    const [lat, lon] = searchData.value.split(" ");

    fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
      .then(response => response.json())
      .then(response => {
        setCurrentWeather({ city: searchData.label, ...response })
      })
      .catch((err) => console.log(err))


  }
  return (

    <div className='weather__container' >

      <Search
        onSearchChange={handleOnSearchChange}
      />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  )
}

export default Weather