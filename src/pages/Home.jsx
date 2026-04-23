import React from 'react'
import Navbar from '../components/Navbar'
import image from './../assets/hero.svg'

const Home = () => {
  return (
    <div className='bg-mint-100 mt-0 h-screen' id='Home'>

        <Navbar/>
      <div className="flex md:flex-row mt-20  gap-20 justify-center mx-5  pb-10 pt-11 ">
          <div className=' flex flex-col w-1/2 p-2  justify-center'>
            <h1 className='md:text-5xl p-3'><strong>I'm  Lawrence</strong></h1>
            <h2 className='md:text-3xl text-gray-700 p-3'>Software Developer</h2>
            <p  className=' text-gray-700 p-3'>Turning ideas into interactive reality</p>
            <ul className='flex gap-2'>
                <li className=' text-gray-700  hover:text-black p-3 '><a href='#'>github</a></li>
                <li className=' text-gray-700  hover:text-black pt-3'><a href='#'>LinkedIn</a></li>
                <li className=' text-gray-700  hover:text-black pt-3'><a href='#'>Insta</a></li>
            </ul>
        </div>

        <div  className='flex justify-start  mx-15 w-1/2  '>
          <img  className='text-xl ' src={image} width='400'/>
        </div>
        </div>
        
    </div>
  )
}

export default Home