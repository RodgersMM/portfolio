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
            <Hobbies />
            </div>
        </div>

    </div>
  )
}

export default LeftSidebar