import React from 'react'

const Projects = () => {
  return (
    <div className='border-solid-900'>
        <h2 className=' font-bold items-center border-t-4 border-indigo-600 '> LIST OF PROJECTS</h2>
        <ol>
              <li><a classname="font-bold" href='https://rodgersmm.github.io/Akan-Name-Generator/'><b> Akan Name Generator App:</b></a>
               Akan name generator is a web application that allow users to generate thier Akan Names after 
               entering date of birth. </li>
             <li><a href="https://rodgersmm.github.io/Delani-Studio/"> <b>Delani Studio App:</b></a>
               Delani studio is a web application that showcase various digital services offered. 
             </li>
             <li><a href="https://rodgersmm.github.io/Quiz-Board/"><b> Quiz Board App: </b> </a>
               This is a quiz application that provide multiple answers. The user will answer all questions
               before clicking submit to get their score.                T
             
             </li>
             <li><a href="https://github.com/RodgersMM/Caesar-Cipher-App"><b> Caesar Cipher App </b>  </a>
               This is a java application that shifts alphabtical strings given number of times. 
               The user enters alphabet then clicks Enter. After that they enter an integer to shift alphabets by that number of times. 
            </li>

            <li><a href="https://github.com/RodgersMM/Wildlife-Tracker-App"><b>Wildlife Tracker App </b>  </a>
               This is a java application that shifts alphabtical strings given number of times. 
               The user enters alphabet then clicks Enter. After that they enter an integer to shift alphabets by that number of times. 
            </li>
        </ol>
    </div>
  )
}

export default Projects