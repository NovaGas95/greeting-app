import React from 'react'
import './weather.css'
import Search from './Search'
import CurrentWeather from './CurrentWeather'

const Weather = () => {

  const handleOnSearchChange = (searchData) => { 
    console.log(searchData)
  }
  return (

    <div className='weather__container' >

      <Search
        onSearchChange={handleOnSearchChange}
      />

      

    </div>
  )
}

export default Weather