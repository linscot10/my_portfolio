import React from 'react'

const Card = ({name,image,period,description,tech,link}) => {
  return (
   <div className="flex   bg-gray-300  flex-col p-3 py-2 m-2 rounded-lg hover:border-gray-400 hover:border-[2px] shadow-lg h-[460px]  w-[300px]">
          <div className=" w-3/4 rounded-lg"><img src={image} alt="images" className=" rounded-lg" /></div>
          <p className=' text-gray-400'><strong className='text-black'>Period:</strong> <span>{period}</span></p>

          <h1  className="text-xl py-2">{name}</h1>
          <p className=''>
{description}
          </p>
          <p>{description}</p>
         
          <div className='flex gap-2 py-2'>
          {tech.map((language,index)=>(<p key={index} className="bg-gray-500 rounded-lg px-2">{language}</p>))}
          </div>

          <a href={link} className='py-2 hover:underline ' >View Project</a>
        </div> 
  )
}

export default Card