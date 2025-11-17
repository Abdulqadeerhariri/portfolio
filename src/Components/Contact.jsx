import React from 'react'
import './component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSms, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="contact flex flex-row justify-evenly items-top mt-38">
      {/* left side menu */}
      <div className="left-side flex flex-col gap-y-10">
        <div className="title text-blue-600">
          <h1 className='font-bold mb-4'>Get in Tuch</h1>
          <p className='text-sm'>I'd like to hear from you!</p>
        </div>
        <div className="second-info">
          <p className='text-sm mb-9'>if you have any idea or justify wanna<br />
            say hi, please use the contact form!
          </p>
        </div>
        <div className="mail text-xl font-bold">
          <p><FontAwesomeIcon icon={faSms} className='mr-3.5' /> qadeerhariri700@outlook.com</p>
        </div>
        <div className="last-contact flex flex-row items-center gap-x-10 text-2xl">
          <div className="like"><FontAwesomeIcon icon={faThumbsUp} /></div>
          <div className="social-media flex flex-row items-center gap-x-2.5">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
      </div>
      {/* right side menu */}
      <div className="right-side flex flex-col gap-y-7">
        <div className="introduction flex flex-row gap-x-5">
          <div className="firstname">
            <p>First Name</p>
            <input type="text"/>
          </div>
          <div className="lastname">
            <p>Last Name</p>
            <input type="text"/>
          </div>
        </div>
        <div className="email">
          <p>Email</p>
          <input type="text" className='mail' />
        </div>
        <div className="msg">
          <p>Message</p>
          <textarea></textarea>
        </div>
        <button className='text-white'>Send</button>
      </div>
    </div>
  )
}

export default Contact