import React from 'react'

const Skills = () => {
  return (
    <div id='Skills' className=' pt-10'>
    <div className=' '>
        <h1 className='text-3xl mx-4 pt-8 px-10'>Tech Stack</h1><hr className='  bg-gray-900  m-4 mx-12 mt-6 border-[1px] '/>
 <div>
    <div className=' px-10 bg-red-200 mx-5'>
        <h3  className='text-2xl p-4'>Front_end</h3>
        <ul className='flex gap-4 bg-red-600 mx-6'>
            <li>HTML</li>
            <li>CSS</li>
            <li>React.JS</li>
            <li>Vue.JS</li>
            <li>Tailwind CSS</li>
            <li>Javascript</li>
            <li>SQL</li>
        </ul>
    </div>
    <div className=' px-10 bg-red-200 mx-5'>
        <h3  className='text-2xl p-4'>Back_end</h3>
        <ul className='flex gap-4 bg-red-600 mx-6'>
            <li>Node.JS</li>
            <li>Express.js</li>
            <li>Python</li>
            <li>Django</li>
        </ul>
    </div>
    <div className=' px-10 bg-red-200 mx-5'>
        <h3  className='text-2xl p-4'>Data Analysis</h3>
        <ul className='flex gap-4 bg-red-600 mx-6'>
            <li>Numpy</li>
            <li>Pandas</li>
            <li>Matplotlib</li>
            <li>Seaborn</li>
        </ul>
    </div>
    <div className=' px-10 bg-red-200 mx-5'>
        <h3  className='text-2xl p-4'>Tools</h3>
        <ul className='flex gap-4 bg-red-600 mx-6'>
            <li>Git</li>
            <li>Vs Code</li>
            <li>Postman</li>
            <li>Postman</li>
        </ul>
    </div>
    <div className=' px-10 bg-red-200 mx-5'>
        <h3  className='text-2xl p-4'>Database</h3>
        <ul className='flex gap-4 bg-red-600 mx-6'>
            <li>Mysql</li>
            <li>MongoDBB</li>
            
        </ul>
    </div>
</div>
    </div>

    </div>
  )
}

export default Skills