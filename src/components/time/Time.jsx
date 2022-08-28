import React from 'react'
import { useState, useEffect } from 'react'
import './time.css'

const Time = () => {

  const [currentDate, setCurrentDate] = useState("")
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    function update() {

      let d = new Date()
      let hours = d.getHours()
      let minutes = d.getMinutes()

      if (minutes < 10) minutes = '0' + minutes
      if (hours < 10) hours = '0' + hours

      let time = `${hours}:${minutes}`

      setCurrentDate(d.toString().slice(0, 11))
      setCurrentTime(time)
    }

    setInterval(update, 1000);


  }, [])

  console.log(currentTime)

  return (
    <div className='time__container'>
      <div>
        {currentDate}
      </div>
      <div>
        {currentTime}
      </div>
    </div>

  )
}

export default Time