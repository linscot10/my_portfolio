import React from 'react'
import me from '../assets/ChatGPT Image Apr 18, 2026, 06_55_41 PM.png'

const About = () => {
    return (
    <div id='About' className=''>
        <div className="  flex sm:items-center    flex-col   md:flex-row  gap-6 bg-mint-50  justify-center pb-5">
                 
                 <div className="   p-7 flex sm:text-center sm:items-center   flex-col  mt-5 w-full md:w-1/2 ">
                    <img src={me}  alt="Lawrence"
    className="w-72 md:w-80 rounded-md mx-auto"/>
                    <div className=' flex items-start gap-6 p-3 sm:text-center '>
                        <a href="#" className='rounded-md bg-green-300 p-4 hover:bg-orange-200 h-11 w-32 text-center'>Learn More</a>
                        <a href="#" className='rounded-md bg-green-300 p-4 hover:bg-orange-200  h-11 w-32 text-center'> Get In Touch</a>
                    </div>
                    
                 </div>

                 <div className="   mt-11 pt-10 px-5 md:px-10 w-full md:w-1/2 pb-3">
                    <h1 className='text-4xl'>About Me</h1>
                    <hr className='w-20 h-1 bg-gray-900  mt-1 md:border-[2px] '/>
                    <p className='pt-3 text-gray-600'>I am a developer by curiosity with a keen interest in technology. Beside challenging myself, I love learning new technologies and languages.</p>
                    <p className='mt-8  text-gray-600'> Starting as a software developer, I have a strong foundation in web development and a genuine passion for creating scalable and maintainable solutions. I possess a product-oriented mindset and empathy for customers and have  experience working with both front-end and back-end technologies.</p>
                    <div className='flex  gap-2 mt-4  sm:text-sm'>
                       <button className='rounded-md bg-green-300 p-4 hover:bg-orange-200   text-start pb-2 '>Learner</button>
                        <button className='rounded-md bg-green-300 p-4 hover:bg-orange-200  text-start pb-2 '>Passion for Tech</button>
                        <button className='rounded-md bg-green-300 p-4 hover:bg-orange-200   text-start pb-2 '>Cyber Security Enthusiast</button>
                    </div>
                 </div>
        </div>
        </div>
    )
}

export default About