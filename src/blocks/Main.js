import React from 'react'
import Skills from '../components/Skills'
import Hobbies from '../components/Hobbies'
import Projects from '../components/Projects'

const Main = () => {
  return (
    <div className='flex-col border-solid border-4 border-indigo-600  '>
        <div className='items-center'>
            <h2 className='items-center font-bold'> ABOUT ME </h2>
           I'm a passionate software engineer passionate about on Full-stack development and Agile Methodologies.
           I'm also a content creator and a digital strategist well-versed in SEO, SMM amd SEM. 
           
           <p>
           <b>Background:</b>          
            I'm a Telecommunication Engineering graduate with vast knowledge and experience on 
            2G, 3G, 4G, and 5G telecommunication technologies. 
           </p>

           <p>
            <b>Why I applied for this program?</b>Since I first landed my fingers on a computer keyboard, I developed
              incredible interest with websites. Similarly, when Apps came accross, I developed great interest top.
              It is for this reason I applied for software Engineering program to learn how to build apps, websites, 
              and applications. 
           </p>
        </div>
        <div className='items-center'>
          <Projects />   
           

        </div>
    </div>
  )
}

export default Main