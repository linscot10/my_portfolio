import React from 'react'
import Navbar from '../components/Navbar'
import image from './../assets/hero.svg'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import myResume from './../assets/osuru lawrence CV.pdf (1).pdf'

const Home = () => {
  return (
    <div className=' bg-mint-100 mt-0 ' id='Home'>

      <Navbar />
      <div className=" flex  md:flex-row  mt-3 md:mt-20 gap-8 md:gap-20 justify-center mx-5 pb-2 md:pb-10 pt-4 md:pt-11 overflow-hidden  items-center ">
        <div className='  w-full flex flex-col md:w-1/2 p-2  justify-center'>
          <h1 className=' text-xl md:text-5xl p-1 md:p-3'><strong>I'm  Lawrence</strong></h1>
          <h2 className='text-lg md:text-3xl text-gray-700 p-1 md:p-3'>Software Developer</h2>
          <p className=' text-gray-700 md:text-2xl text-sm p-1 md:p-3'>Turning ideas into interactive reality</p>
          <ul className='flex gap-2'>
            <li className=' text-gray-700  hover:text-black  p-1 md:p-3'><a href='#'><FontAwesomeIcon className='text-black md:w-8  md:h-8 w-4  h-4' icon={faGithub} /></a></li>
            <li className=' text-gray-700  hover:text-black pt-1 p-1 md:pt-3'><a href='#'><FontAwesomeIcon className='text-blue-600 md:w-8 md:h-8' icon={faLinkedin} /></a></li>
            <li className=' text-gray-700  hover:text-black pt-1 p-1 md:pt-3'><a href='#'><FontAwesomeIcon className='text-red-600 md:w-8 md:h-8' icon={faInstagram} /></a></li>
          </ul>

          <a href={myResume} download='resume.pdf'><button className='bg-green-400 w-32 md:w-32 md:h-12 h-8 text-xl my-3 hover:bg-green-600 rounded-md'>Download CV</button>
          </a> 
        </div>

        <div className='flex justify-start  mx-auto md:w-1/2  '>
          <img className='text-xl '  alt="Developer illustration"
   className="w-72 md:w-96" src={image}/>
        </div>
      </div>

    </div>
  )
}

export default Home