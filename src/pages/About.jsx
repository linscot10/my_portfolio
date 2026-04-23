import React from 'react'
import me from '../assets/ChatGPT Image Apr 18, 2026, 06_55_41 PM.png'

const About = () => {
    return (
    <div id='About' className=''>
        <div className=" flex  gap-6 bg-mint-50 w-screen justify-center">
                 
                 <div className=" p-7 flex justify-center items-center flex-col  mt-5  w-1/2 ">
                    <img src={me} className="rounded-md" width='300'/>
                    <div className=' flex items-start gap-6 p-3 text-center '>
                        <a href="#" className='rounded-md bg-green-300 p-4 hover:bg-orange-200 h-11 w-30 text-center'>Learn More</a>
                        <a href="#" className='rounded-md bg-green-300 p-4 hover:bg-orange-200  h-11 w-30 text-center'> Get In Touch</a>
                    </div>
                    
                 </div>

                 <div className=" mt-11 pt-10 pr-10 w-1/2 ">
                    <h1 className='text-4xl'>About Me</h1>
                    <hr className='w-20 h-1 bg-gray-900  mt-1 border-[2px] '/>
                    <p className='pt-3 text-gray-600'>I am a developer by curiosity with a keen interest in technology. Beside challenging myself, I love learning new technologies and languages.</p>
                    <p className='mt-8  text-gray-600'> Starting as a software developer, I have a strong foundation in web development and a genuine passion for creating scalable and maintainable solutions. I possess a product-oriented mindset and empathy for customers and have  experience working with both front-end and back-end technologies.</p>
                    <div className='flex  gap-3 mt-4'>
                       <button className='rounded-md bg-green-300 p-4 hover:bg-orange-200  h-11 w-30 text-center pb-3 '>Learner</button>
                        <button className='rounded-md bg-green-300 p-4 hover:bg-orange-200  h-11 w-30 text-center pb-3 '>Passion for Tech</button>
                        <button className='rounded-md bg-green-300 p-4 hover:bg-orange-200  h-11 w-30 text-center pb-3 '>Cyber Security Enthusiast</button>
                    </div>
                 </div>
        </div>
        </div>
    )
}

export default About