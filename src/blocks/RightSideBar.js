import React from 'react'

const RightSideBar = () => {
  return (
   <div className=''>
    <div className='items-left'>
        <h2 className='border-solid border-4 border-indigo-600'>Skills</h2>

    </div>

    <div className='items-left font-bold border-solid border-4 border-indigo-600 '>
        <h2>Technical Skills</h2>

        <ul>
            <h3>Vanilla</h3>
            <li>HTML  </li>
            <li>CSS</li>
            <li>Javascript</li>
        </ul>
        <ul>
            <h3 className=' border-solid border-4 border-indigo-600 '>Frameworks</h3>
            <li>REACT</li>
            <li>jQuery</li>
            <li>Nodejs</li>
            <li>Express</li>
            <li>MongoDB</li>
        </ul>
    </div>
        
    <div className='items-left'>
        <h3 className=' border-solid border-4 border-indigo-600'>Tools</h3>
        <ul className=' border-solid border-4 border-indigo-600'>
            <li>GitHub</li>
            <li>Figma</li>
            <li>Postman</li>
            <li>VScode</li>
        </ul>

    </div>
    <div className='items-left'>
        <h3>Projects</h3>

    </div>
        
   </div>
  )
}

export default RightSideBar