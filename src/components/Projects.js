import React from 'react'

const Projects = () => {
  return (
    <div className='border-solid'>
        <h2> List of Projects </h2>
        <ul>
              <li><a classname="font-bold" href='https://rodgersmm.github.io/Akan-Name-Generator/'>Akan Name Generator App:</a>
               Akan name generator is a web application that allow users to generate thier Akan Names after 
               entering date of birth. </li>
             <li><a href="https://rodgersmm.github.io/Delani-Studio/">Delani Studio App:</a>
               Delani studio is a web application that showcase various digital services offered. 
             </li>
             <li><a href="https://rodgersmm.github.io/Quiz-Board/">Quiz Board App:  </a>
               This is a quiz application that provide multiple answers. The user will answer all questions
               before clicking submit to get their score.                T
             
             </li>
             <li><a href="https://github.com/RodgersMM/Caesar-Cipher-App ">Caesar Cipher App</a>
               This is a java application that shifts alphabtical strings given number of times. 
               The user enters alphabet then clicks Enter. After that they enter an integer to shift alphabets by that number of times. 
            </li>
        </ul>


    </div>
  )
}

export default Projects