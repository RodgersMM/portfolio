import React from 'react'
import Profile from '../images/Profile.jpeg'

const Image = () => {
  return (
    <div className='border-solid border-4 border-indigo-600 '>
        <img src={Profile } />
        <h2>Rodgers Mutua</h2>
        <p>Software Engineer</p>
    </div>
  )
}

export default Image