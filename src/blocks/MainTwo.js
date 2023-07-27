import React from 'react'
import Skills from '../components/Skills'
import Hobbies from '../components/Hobbies'

const MainTwo = () => {
  return (
    <div className='flex'>
        <div className='items-center'>
            <h2> Skills </h2>
            <Skills />

        </div>
        <div className='items-center'>
            <Hobbies />

        </div>
        
        MainTwo

    </div>
  )
}

export default MainTwo