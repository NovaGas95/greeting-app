import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


const Greeting = () => {


  const [greetingMessage, setGreetingMessage] = useState("krazy")
  const [user, setUser] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)



  useEffect(() => {
    let d = new Date()
    let h = d.getHours()
    if (h > 4 && h < 12) {
      setGreetingMessage('Good Morning')
    } else if (h > 12 && h < 17) {
      setGreetingMessage('Good Afternoon')
    }
    else {
      setGreetingMessage('Good Evening')
    }
  }, [])


  function submitUser(e) {
    e.preventDefault()
    setIsSubmitted(true)
  }

  let name;
  if (isSubmitted) {
    name = user
  }

  return (

    <div className='greeting__container'>
      <h3 className='greeting__title'> {greetingMessage} </h3>
      {
        !isSubmitted ?
          <form 
          onSubmit={submitUser}
          className='greeting__form'>
            <input
              type="text"
              className='greeting__input'
              onChange={event => { setUser(event.target.value) }}
            />
          </form>
          : (<span
            onClick={() => {
              setIsSubmitted(false)
            }}
          >{name}!</span>)
          
      }
          <div></div>

    </div>
  )
}

export default Greeting