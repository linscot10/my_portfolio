import React from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className='flex items-center justify-center flex-col py-5 px-3 my-5'>
      <hr className='  bg-gray-900  m-4 mx-12 mt-6 border-[1px]  w-full'/>
      <div className='flex grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-5  p-5 w-full'>
      
        <div className='md:w-full px-5'>
          <h2 className='text-2xl my-4'>Osuru Lawrence Scott</h2>
          <p className='text-gray-400'>Software Engineer with a passion for creating innovative, scalable, and high-performance solutions.</p>
      
        </div>
        <div className='md:w-full flex flex-col items-center justify-center'>
          <h3 className='text-xl my-2'>Links</h3>
          <ul className='flex flex-col items-center justify-center text-sm'>
            <li><a href="Home">Home</a></li>
            <li><a href="About">About</a></li>
            <li><a href="Skills">Skills</a></li>
            <li><a href="Projects">Projects</a></li>
            <li><a href="Contact">Contact</a></li>
          </ul>
        </div>

        <div className='md:w-full flex items-center justify-center gap-2 flex-col'>
          <h3 className='text-xl my-2'>Connect</h3>
          <ul  className='flex items-center justify-center gap-1'>
            <li className=' text-gray-700   pt-2 '><a href='https://github.com/linscot10' target="_blank"><FontAwesomeIcon className='text-black w-6  h-6' icon={faGithub} /></a></li>
                        <li className=' text-gray-700  pt-2'><a href='https://www.linkedin.com/in/lawrence-scott-osuru/' target="_blank"><FontAwesomeIcon className='text-blue-600 w-6 h-6' icon={faLinkedin} /></a></li>
                        <li className=' text-gray-700  pt-2'><a href='mailto:osurulawrence@gmail.com'><FontAwesomeIcon icon={faEnvelope} className='text-black w-6 h-6' /></a></li>
          </ul>
        </div>
      <div>
      </div>

      </div>
      <hr className='  bg-gray-500  m-4  mt-6 border-[1px]  w-3/4'/>
      <div className='text-sm'> 
      <p>&copy;2026 osuru lawrence. All rights reserved</p>
      </div>

    </div>
  )
}

export default Footer