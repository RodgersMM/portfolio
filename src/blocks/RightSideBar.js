import React from 'react'

const RightSideBar = () => {
  return (
   <div>
    <div className='items-left'>
        <h2>Skills</h2>

    </div>

    <div className='items-left'>
        <h2>Technical Skills</h2>

        <ul>
            <h3>Vanilla</h3>
            <li>HTML  </li>
            <li>CSS</li>
            <li>Javascript</li>
        </ul>
        <ul>
            <h3>Frameworks</h3>
            <li>REACT</li>
            <li>jQuery</li>
            <li>Nodejs</li>
            <li>Express</li>
            <li>MongoDB</li>
        </ul>
    </div>
        
    <div className='items-left'>
        <h3>Tools</h3>
        <ul>
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