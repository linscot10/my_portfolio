import React from 'react'
import Image_1 from './../assets/vscode.png'

const Projects = () => {
  return (
    <div className="flex justify-center flex-col  items-center m-7 p-4 h-screen ">
        <h1 className=" text-4xl p-3 ">Projects</h1>
      <div className="flex justify-center items-center p-5 ">
        <div className="flex   bg-gray-300  flex-col p-3 py-2 m-2 rounded-lg hover:border-gray-400 hover:border-[2px] shadow-lg h-[460px]  w-[300px]">
          <div className=" w-1/2 rounded-lg"><img src={Image_1} alt="images" className=" rounded-lg" /></div>
          <p className=' text-gray-400'><strong className='text-black'>Period:</strong> <span>April 2026-May2026</span></p>

          <h1  className="text-xl py-2">Portfolio Project</h1>
          <p className=''>

           A free and simple unofficial Google Translate API that supports 108 languages with no API key required. 
          </p>
          <p>Translate text or files up to 5000 characters, with automatic language detection and multi-threaded translation for efficiency.</p>
          <p> Perfect for handling multiple languages seamlessly.</p>
          <div className='flex gap-2 py-2'><p className="bg-gray-500 rounded-lg px-2">React.js</p> <p className="bg-gray-500 rounded-lg px-2">Tailwind</p></div>

          <a href="#" className='py-2' >View Project</a>
        </div>
        <div className="flex   bg-gray-300  flex-col p-3 py-2 m-2 rounded-lg hover:border-gray-400 hover:border-[2px] shadow-lg h-[460px]  w-[300px]">
          <div className=" w-1/2 rounded-lg"><img src={Image_1} alt="images" className=" rounded-lg" /></div>
           <p className=' text-gray-400'><strong className='text-black'>Period:</strong> <span>April 2026-May2026</span></p>
          <h1 className="text-xl py-2">Portfolio Project</h1>
          <p className=''>

           A free and simple unofficial Google Translate API that supports 108 languages with no API key required. 
          </p>
          <p>Translate text or files up to 5000 characters, with automatic language detection and multi-threaded translation for efficiency.</p>
          <p> Perfect for handling multiple languages seamlessly.</p>
          <div className='flex gap-2 py-2'><p className="bg-gray-500 rounded-lg px-2">React.js</p> <p className="bg-gray-500 rounded-lg px-2">Tailwind</p></div>
          <a href="# className='py-2'">View Project</a>
        </div>
        <div className="flex   bg-gray-300  flex-col p-3 py-2 m-2 rounded-lg hover:border-gray-400 hover:border-[2px] shadow-lg h-[460px]  w-[300px]">
          <div className=" rounded-lg"><img src={Image_1} alt="images" className=" rounded-lg" width='150' /></div>
           <p className=' text-gray-400'><strong className='text-black'>Period:</strong> <span>April 2026-May2026</span></p>
          <h1 className="text-xl py-2">Portfolio Project</h1>
          <p className=''>

           A free and simple unofficial Google Translate API that supports 108 languages with no API key required. 
          </p>
          <p>Translate text or files up to 5000 characters, with automatic language detection and multi-threaded translation for efficiency.</p>
          <p> Perfect for handling multiple languages seamlessly.</p>
          <div className='flex gap-2 py-2'><p className="bg-gray-500 rounded-lg px-2">React.js</p> <p className="bg-gray-500 rounded-lg px-2">Tailwind</p></div>
          <a href="# className='py-2'">View Project</a>
        </div>
        <div className="flex   bg-gray-300  flex-col p-3 py-2 m-2 rounded-lg hover:border-gray-400 hover:border-[2px] shadow-lg h-[460px]  w-[300px]">
          <div className=" rounded-lg"><img src={Image_1} alt="images" className=" rounded-lg" width='150' /></div>
           <p className=' text-gray-400'><strong className='text-black'>Period:</strong> <span>April 2026-May2026</span></p>
          <h1 className="text-xl py-2">Portfolio Project</h1>
          <p className=''>

           A free and simple unofficial Google Translate API that supports 108 languages with no API key required. 
          </p>
          <p>Translate text or files up to 5000 characters, with automatic language detection and multi-threaded translation for efficiency.</p>
          <p> Perfect for handling multiple languages seamlessly.</p>
          <div className='flex gap-2 py-2'><p className="bg-gray-500 rounded-lg px-2">React.js</p> <p className="bg-gray-500 rounded-lg px-2">Tailwind</p></div>
          <a href="# className='py-2'">View Project</a>
        </div>
      </div>

      <div>
        <h1 className=" text-4xl p-3 ">Certifcations</h1>
      </div>
    </div>
  )
}

export default Projects