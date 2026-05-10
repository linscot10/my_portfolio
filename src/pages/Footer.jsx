import React from 'react'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div>
      <hr/>
      <div>
      <div>
      <h2>Osuru Lawrence Scott</h2>
      <p>Software Engineer with a passion for creating innovative, scalable, and high-performance solutions.</p>
      </div>
      <div>
      <ul>
        <li><a href="Home">Home</a></li>
        <li><a href="About">About</a></li>
        <li><a href="Skills">Skills</a></li>
        <li><a href="Projects">Projects</a></li>
        <li><a href="Contact">Contact</a></li>
      </ul>
      </div>

      <div>
        <h3>Connect</h3>
        <ul>
          <li className=' text-gray-700  hover:text-black p-3 '><a href='#'><FontAwesomeIcon className='text-black w-8  h-8' icon={faGithub} /></a></li>
                      <li className=' text-gray-700  hover:text-black pt-3'><a href='#'><FontAwesomeIcon className='text-blue-600 w-8 h-8' icon={faLinkedin} /></a></li>
                      <li className=' text-gray-700  hover:text-black pt-3'><a href='#'><FontAwesomeIcon className='text-red-600 w-8 h-8' icon={faInstagram} /></a></li>
        </ul>
      </div>
      <div>
      </div>

      </div>
      <hr/>
<p>&copy;2026 osuru lawrence. All rights reserved</p>
    </div>
  )
}

export default Footer