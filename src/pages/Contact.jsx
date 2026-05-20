import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperPlane} from  '@fortawesome/free-solid-svg-icons'
import { faGithub,faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons'
const Contact = () => {
  const [formData, setFormData]= useState({
    name:"",
    email:"",
    subject:"",
    message:""
  })
  const handleChange=(e)=>{
    setFormData({
      ...formData,[e.target.name]:e.target.value
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <div id='Contact' className=' mr-6 flex flex-col justify-center gap-5 items-center py-5  mt-5'>
    <h1 className='text-3xl p-5'>Contact Me</h1>
    <div className=' flex gap-4 justify-center w-3/4 px-5'>
    <div className=' p-7 m-3 ml-2 w-1/2'>
    {/* <h2> Get In Touch</h2> */}
    <h1 className='text-4xl '>Let’s build something</h1>
    <h1 className='text-4xl text-blue-500'>great</h1><hr className='w-20 h-1 bg-gray-900  mt-1 border-[2px] ml-4'/>
    <p className='py-2 text-gray-500'>Got an idea, opportunity, or just want to connect?</p>
    <p className=' text-gray-500 pb-2'>I’m always open to meaningful conversations.</p>
    <div className='flex flex-col'>
    <a href='http://github.com/linscot10' className='group p-4 mt-3 hover:shadow-lg bg-gray-100 hover:border-[1px] hover:border-gray-600 border-[1px] border-gray-200 rounded-lg' ><div className='flex flex-row  gap-4'> <div className='bg-white w-16 rounded-md shadow-lg text-2xl flex justify-center items-center h-12 '><FontAwesomeIcon className='text-black group-hover:w-8 group-hover:h-12' icon={faGithub}   /></div><div><h2 className='text-xl'>GitHub</h2><p>github.com/linscot10</p></div></div></a>
    <a href='http://www.linkedin.com/in/lawrence-scott-osuru' className='group p-4 mt-4 hover:shadow-lg  bg-gray-100 hover:border-[1px] hover:border-gray-600 border-[1px] border-gray-200 rounded-lg'><div className='flex flex-row  gap-4'><div  className='bg-white w-16 rounded-md shadow-lg text-2xl flex justify-center items-center h-12 '><FontAwesomeIcon className='text-blue-600 group-hover:w-6 group-hover:h-12' icon={faLinkedin}   /></div><div><h2 className='text-xl'>LinkedIn</h2><p>linkedin.com/in/lawrence-scott-osuru/</p></div></div></a>
    <a href='#' className='group p-4 mt-4 hover:shadow-lg bg-gray-100 hover:border-[1px] hover:border-gray-600 border-[1px] border-gray-200 rounded-lg'><div className='flex flex-row  gap-4'><div  className='bg-white w-16 rounded-md shadow-lg text-2xl flex justify-center items-center h-12 '><FontAwesomeIcon className='text-red-600 group-hover:w-6 group-hover:h-12' icon={faInstagram} /></div> <div><h2 className='text-xl'>Instagram</h2><p>github.com/linscot10</p></div></div></a>
    </div>
    </div>
    <div className=' shadow-lg bg-gray-100 rounded-lg flex justify-center items-center  p-7 m-3 w-1/2'>
    <form onSubmit={handleSubmit}>
    <div className='flex gap-4 '>
    <label className='flex flex-col '>Name
    <input name='name' onChange={handleChange} value={formData.name} required  type='text' placeholder='Your name' className='rounded-lg p-2 border-[2px] focus:outline-none  focus:border-gray-400 border-gray-100 '/>
    </label>
    <label className='flex flex-col'>Email
    <input name='email' onChange={handleChange} value={formData.email} required type='email' placeholder='you@example.com' className='rounded-lg p-2  border-[2px]  focus:outline-none focus:border-gray-400 border-gray-100 '/>
    </label>
    </div>
<div className='flex flex-col mt-7'>

    <label className='mt-7'>Subject</label>
    <input name='subject' onChange={handleChange} value={formData.subject} required type='text' placeholder="What's this about" className='rounded-lg p-2  border-[2px]  focus:outline-none focus:border-gray-400 border-gray-100 '/>
    <label  className='mt-7'>Message</label>
    <textarea name='message' onChange={handleChange} value={formData.message} required placeholder='Tell me more...' width='300' height='300' className='rounded-lg p-2 border-[2px]  focus:outline-none focus:border-gray-400 border-gray-100 '></textarea>
</div>
<button type='Submit' className='mt-7 bg-mint-200 py-4 px-3 hover:bg-mint-300 rounded-lg text-white '><FontAwesomeIcon icon={faPaperPlane} className='text-gray-400 mr-2 ' />Send Message</button>
    </form>
    </div>
    </div>    
    </div>
  )
}

export default Contact