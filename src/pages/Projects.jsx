import React from 'react'
import Image_1 from './../assets/vscode.png'

const Projects = () => {
  return (
    <div className="flex justify-center flex-col  items-center m-7 p-4">
        <h1 className=" text-4xl p-3 ">Projects</h1>
      <div className="flex justify-center items-center p-5">
        <div className="flex justify-center  bg-gray-300  flex-col p-3 m-2 rounded-lg hover:border-gray-400 hover:border-[2px] shadow-lg">
          <div className=" bg-red-300 w-1/2 rounded-lg"><img src={Image_1} alt="images" className="   rounded-lg" /></div>
          <p>Period:April 2026-May2026</p>

          <h1>Portfolio Project</h1>
          <p>

            A free and simple unofficial Google Translate API that supports 108 languages with no API key required. Translate text or files up to 5000 characters, with automatic language detection and multi-threaded translation for efficiency. Perfect for handling multiple languages seamlessly.
          </p>
          <di><p>React.js</p> <p>Tailwind</p></di>

          <a href="#">View Project</a>
        </div>
        <div className="flex justify-center  bg-gray-300  flex-col p-3 m-2 rounded-lg hover:border-gray-400 hover:border-[2px] shadow-lg">
          <div><img src={Image_1} alt="images" /></div>
          <p>Period:April 2026-May2026</p>
          <h1>Portfolio Project</h1>
          <p>

            A free and simple unofficial Google Translate API that supports 108 languages with no API key required. Translate text or files up to 5000 characters, with automatic language detection and multi-threaded translation for efficiency. Perfect for handling multiple languages seamlessly.
          </p>
          <di><p>React.js</p> <p>Tailwind</p></di>
          <a href="#">View Project</a>
        </div>
        <div className="flex justify-center  bg-gray-300  flex-col p-3 m-2 rounded-lg hover:border-gray-400 hover:border-[2px] shadow-lg">
          <div><img src={Image_1} alt="images" /></div>
          <p>Period:April 2026-May2026</p>
          <h1>Portfolio Project</h1>
          <p>

            A free and simple unofficial Google Translate API that supports 108 languages with no API key required. Translate text or files up to 5000 characters, with automatic language detection and multi-threaded translation for efficiency. Perfect for handling multiple languages seamlessly.
          </p>
          <di><p>React.js</p> <p>Tailwind</p></di>
          <a href="#">View Project</a>
        </div>
      </div>

      <div>
        <h1 className=" text-4xl p-3 ">Certifcations</h1>
      </div>
    </div>
  )
}

export default Projects