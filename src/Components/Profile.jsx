import React from 'react'
import profile from '../assets/about.jpg'
import { faWhatsapp, faTelegram, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  return (
    <div className="profile flex flex-row justify-center item-top mt-10 gap-x-10">
      <div className="left">
        <img src={profile} className='h-110 w-110 rounded-full'/>
      </div>
      <div className="right flex flex-col gap-y-18">
        <div className="first-info">
          <h1 className='font-bold'>AbdulQadir Hariri</h1>
          <p className='text-lg font-bold'>@hariri.code-HC700</p>
          <p className='text-xl font-bold items-center text-blue-600 mt-4'>qadeerhariri700@outlook.com</p>
        </div>
        <div className="phone flex flex-row gap-x-2 items-center">
          <div className="phone">
            <FontAwesomeIcon icon={faPhone} className='text-4xl' />
          </div>
          <div className="num text-lg font-bold text-blue-500">
            <p>+93(0) 730312961</p>
            <p>+93(0) 796369723</p>
          </div>
        </div>
        <div className="social flex flex-row gap-x-6 items-center">
          <div><p className='text-3xl font-bold'>Avalible</p></div>
          <div className="icons flex flex-row gap-x-3.5 text-2xl [&>div]:p-1.5 [&>div]:flex [&>div]:item-center     [&>div]:rounded-full ">
            <div className='bg-green-600 text-white'><FontAwesomeIcon icon={faWhatsapp} /></div>
            <div className='bg-blue-600 text-white'><FontAwesomeIcon icon={faFacebook} /></div>
            <div className='bg-pink-600 text-white'><FontAwesomeIcon icon={faInstagram} /></div>
            <div className='bg-blue-600 text-white'><FontAwesomeIcon icon={faTelegram} /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile