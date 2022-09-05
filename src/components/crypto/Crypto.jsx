import React from 'react'
import './crypto.css'
import { useState, useEffect } from 'react'


const Crypto = () => {

  const [fetch, setFetch] = useState({})

  useEffect(()=> {

   const update = () => {
    fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=10')
    .then((response) => response.jason())
    .then((response) => console.log(response))
   }
   update()
  },[])

  


  return (
    <div>
      <div className='container'>
        <button onClick={() => console.log(fetch)}>Fetch</button>
      </div>
    </div>
  )
}

export default Crypto