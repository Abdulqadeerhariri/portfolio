import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogle, faTwitter, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faComputer } from '@fortawesome/free-solid-svg-icons';
import { faHandPaper } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="full-page flex flex-row items-center mt-40 justify-between pl-32 pr-32">
      <div className="home-info flex flex-col gap-y-5">
        <div className="name"><h1 className='text-6xl font-bold'>Hello <FontAwesomeIcon icon={faHandPaper} className='text-amber-300' /></h1></div>
        <div className="work-info text-lg">
          <p>I'm <span className='text-blue-600 text-lg font-bold'>QADEER HARIRI</span></p>
          <p>Web Development Enthusiast</p>
        </div>
        <div className="refrence flex flex-row w-60 justify-between">
          <div className='bg-gray-500 p-1 rounded-full text-white'><FontAwesomeIcon icon={faGithub} /></div>
          <div className='bg-blue-800 p-1 rounded-full text-white'><FontAwesomeIcon icon={faLinkedin} /></div>
          <div className='bg-red-500 p-1 rounded-full text-white'><FontAwesomeIcon icon={faGoogle} /></div>
          <div className='bg-blue-500 p-1 rounded-full text-white'><FontAwesomeIcon icon={faTwitter} /></div>
          <div className='bg-pink-600 p-1 rounded-full text-white'><FontAwesomeIcon icon={faInstagram} /></div>
          <div className='bg-blue-500 p-1 rounded-full text-white'><FontAwesomeIcon icon={faTelegram} /></div>
        </div>
        <div className="btn">
          <button className='w-48 text-white'>Contact Me</button>
        </div>
      </div>
      <div className="home-image">
        <FontAwesomeIcon icon={faComputer} className='text-9xl' />
      </div>
    </div>
  )
}

export default Home