import React from 'react'
import About from '../components/About'
import Hobbies from '../components/Hobbies'
import Image from '../components/Image'
import Imagedsc from '../components/Imagedsc'

const LeftSidebar = () => {
  return (
    <div className='flex '>
        <div className='flex-col items-center'>
            <div>
                <Image />
            </div>
            <div>
                <Imagedsc />
            </div>

        </div>
        <div className="flex items-center">
            <div className='items-center-items'>
                <About />
            </div>
            <div className="items-center-items">
                <Hobbies />
            </div>
        </div>

    </div>
  )
}

export default LeftSidebar