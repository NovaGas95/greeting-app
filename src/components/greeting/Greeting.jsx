import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './greeting.css'


const Greeting = () => {


  const [greetingMessage, setGreetingMessage] = useState("")
  const [user, setUser] = useState("User :)")
  const [isSubmitted, setIsSubmitted] = useState(true)



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

  useEffect(() => {
    const item = localStorage.getItem("user")
    const loadedItem = JSON.parse(item)
    if (loadedItem) {
      setUser(loadedItem)
    }
  }
    , [])

  useEffect(() => {
    const jsonUser = JSON.stringify(user)
    localStorage.setItem("user", jsonUser)
  }, [user])

  function submitUser(e) {
    e.preventDefault()
    setIsSubmitted(true)
  }

  let name;
  if (isSubmitted) {
    name = <span>{user}</span>
  }

  const openNameInput = () => {
    setIsSubmitted(false);
  }
  return (

    <div className='greeting__container'>
      <h3> {greetingMessage} </h3>
      {
        !isSubmitted ?
          <form
            className='greeting__form'
            onSubmit={submitUser}
          >
            <input
              type="text"
              value={user}
              onChange={event => { setUser(event.target.value) }}
            />
          </form>
          : (<span
            className='greeting__username'
            onClick={openNameInput}
          >
            {name}
          </span>)

      }


    </div>
  )
}

export default Greeting