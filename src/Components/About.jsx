import React from 'react'
import photo from '../assets/about.jpg'

const About = () => {
  return (
    <div className="about flex flex-row justify-evenly items-top mt-7">
      <div className="photo">
        <img src={photo} className='h-120 w-130 rounded-bl-2xl rounded-tl-2xl' />
      </div>
      <div className="description flex flex-col [&>p]:text-lg [&>span]:text-xl [&>span]:mt-14 [&>p]:font-medium [&>span]:font-bold [&>span]:text-blue-600">
        <h1 className='text-3xl font-bold mb-4 text-blue-600'>About Me</h1>
        <p className='text-lg'>
          I'm a Full Stack Web Developer with a passion for creating modern, responsive, and <br />high-performing web applications.
        </p>

        <span>Core Skills:</span>
        <p>
          - Frontend: React.js, HTML5, CSS3, Tailwind CSS, JavaScript (ES6+)<br />
          - Backend: Node.js, Express.js, REST APIs<br />
          - Database: MongoDB, Firebase<br />
          - Tools & Workflow: Git, GitHub, Vite, Postman, VS Code
        </p>

        <span>What I'm looking for:</span>
        <p>
          Opportunities to work on challenging projects, collaborate with skilled developers, <br />and grow as a professional in the field of web development.
        </p>
      </div>
    </div>
  )
}

export default About