import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
import {faReact,faHtml5,faCss3Alt,faVuejs,faTailwindCss,faJs,faNodeJs,faPython,faGitAlt,faLinux}  from '@fortawesome/free-brands-svg-icons'

import {faDatabase} from  '@fortawesome/free-solid-svg-icons'

import Django from './../assets/django.png'


const Skills = () => {
  return (
    <div id='Skills' className=' pt-10 bg-gray-50 pb-6'>
    <div className=' '>
        <h1 className='text-3xl mx-4 pt-8 px-10 text-center md:text-start justify-center'>Tech Stack</h1><hr className='  bg-gray-900  m-4 mx-12 mt-6 border-[1px] '/>
 <div>
    <div className=' px-10  mx-5'>
        <h3  className='text-2xl p-4 flex gap-1 justify-center  md:justify-start items-end'> <p className='justify-center text-3xl text-blue-500 items-start'>|</p>Front_end</h3>
        <ul className='flex gap-6 md:gap-4 flex-wrap mx-6 justify-center'>
            <li  className='bg-white shadow-sm rounded-lg group  hover:bg-gray-200 h-1/3 hover:border-[1px] hover:border-gray-400    hover:rounded-lg text-gray-600 hover:text-white w-1/3  text-center  p-3 hover:shadow-lg'><FontAwesomeIcon icon={faHtml5}  className='text-orange-400 text-3xl group-hover:text-5xl'/>HTML</li>
            <li  className='group hover:bg-gray-200 h-1/3 hover:shadow-lg  hover:rounded-lg text-gray-600 hover:border-[1px] hover:border-gray-400 hover:text-white w-1/3 bg-white shadow-sm rounded-lg text-center  p-3'><FontAwesomeIcon icon={faCss3Alt}  className='text-blue-400 text-3xl group-hover:text-5xl'/>CSS</li>
            <li  className='group hover:bg-gray-200 h-1/3 hover:shadow-lg  hover:rounded-lg text-gray-600 hover:border-[1px] hover:border-gray-400 hover:text-white w-1/3 bg-white shadow-sm rounded-lg text-center  p-3'><FontAwesomeIcon icon={faReact}  className='text-blue-400 text-3xl group-hover:text-5xl'/>React.JS</li>
            <li  className='group hover:bg-gray-200 h-1/3 hover:shadow-lg  hover:rounded-lg text-gray-600 hover:border-[1px] hover:border-gray-400 hover:text-white w-1/3 bg-white shadow-sm rounded-lg text-center  p-3'><FontAwesomeIcon icon={faVuejs}  className='text-green-400 text-3xl group-hover:text-5xl'/>Vue.JS</li>
            <li  className='group hover:bg-gray-200  h-1/3 hover:shadow-lg hover:rounded-lg text-gray-600 hover:border-[1px] hover:border-gray-400 hover:text-white w-1/3 bg-white shadow-sm rounded-lg text-center  p-3'><FontAwesomeIcon icon={faTailwindCss}  className='text-blue-400 text-3xl group-hover:text-5xl'/>Tailwind</li>
            <li  className='group hover:bg-gray-200 h-1/3 hover:shadow-lg  hover:rounded-lg text-gray-600 hover:border-[1px] hover:border-gray-400 hover:text-white w-1/3 bg-white shadow-sm rounded-lg text-center  p-3'><FontAwesomeIcon icon={faJs}  className='text-yellow-400 text-3xl group-hover:text-5xl'/>Javascript</li>
            <li  className='group hover:bg-gray-200 h-1/3 hover:shadow-lg  text-gray-600 hover:border-[1px] hover:border-gray-400 hover:text-white w-1/3 bg-white shadow-sm rounded-lg text-center  p-3 hover:rounded-lg'><FontAwesomeIcon icon={faDatabase}  className='text-blue-400 text-3xl group-hover:text-5xl'/>SQL</li>
        </ul>
    </div>
    <div className=' px-10  mx-5'>
        <h3  className='text-2xl p-4 flex gap-1 justify-center  md:justify-start items-end'> <p className='justify-center text-3xl text-blue-500 items-start'>|</p><span className=''>Back_end</span></h3>
        <ul className='flex gap-6 md:gap-4 flex-wrap mx-6 justify-center'>
            <li className='group hover:bg-gray-200 hover:border-[1px] hover:border-gray-400 h-1/3 hover:shadow-lg text-gray-600 hover:text-white hover:border-[1px] hover:border-gray-400 w-1/3 bg-white shadow-sm rounded-lg text-center  p-3 hover:rounded-lg'><FontAwesomeIcon icon={faNodeJs}  className='text-green-400 text-3xl group-hover:text-5xl'/>Node.JS/Express.js</li>
            <li className='group hover:bg-gray-200 hover:border-[1px] hover:border-gray-400 h-1/3 hover:shadow-lg text-gray-600 hover:text-white w-1/3 bg-white shadow-sm rounded-lg text-center  p-3 hover:rounded-lg'><FontAwesomeIcon icon={faPython}  className='text-blue-400 text-3xl group-hover:text-5xl'/>Python</li>
            
        </ul>
    </div>
    <div className=' px-10  mx-5'>
        <h3  className='text-2xl p-4 flex gap-1 justify-center  md:justify-start items-end'> <p className='justify-center text-3xl text-blue-500 items-start'>|</p><span className=''>Data  Analysis</span> </h3>
        <ul className='flex gap-6 md:gap-4 flex-wrap mx-6 justify-center'>
            <li className='group hover:bg-gray-200 hover:border-[1px] hover:border-gray-400 h-1/3 hover:shadow-lg text-gray-600 hover:text-white w-1/3 bg-white shadow-sm rounded-lg text-center  p-3 hover:rounded-lg'>Numpy</li>
            <li className='group hover:bg-gray-200 hover:border-[1px] hover:border-gray-400 h-1/3 hover:shadow-lg text-gray-600 hover:text-white w-1/3 bg-white shadow-sm rounded-lg text-center  p-3 hover:rounded-lg'>Pandas</li>
            <li className='group hover:bg-gray-200 hover:border-[1px] hover:border-gray-400 h-1/3 hover:shadow-lg text-gray-600 hover:text-white w-1/3 bg-white shadow-sm rounded-lg text-center  p-3 hover:rounded-lg'>Matplotlib</li>
            <li className='group hover:bg-gray-200 hover:border-[1px] hover:border-gray-400 h-1/3 hover:shadow-lg text-gray-600 hover:text-white w-1/3 bg-white shadow-sm rounded-lg text-center  p-3 hover:rounded-lg'>Seaborn</li>
        </ul>
    </div>
    <div className=' px-10  mx-5'>
        <h3  className='text-2xl p-4 flex gap-1 justify-center  md:justify-start items-end'> <p className='justify-center text-3xl text-blue-500 items-start'>|</p><span className=''> Tools</span></h3>
        <ul className='flex gap-6 md:gap-4 flex-wrap mx-6 justify-center'>
            <li className='group hover:bg-gray-200 hover:border-[1px] hover:border-gray-400 h-1/3 hover:shadow-lg text-gray-600 hover:text-white w-1/3 bg-white shadow-sm rounded-lg text-center  p-3 hover:rounded-lg'><FontAwesomeIcon icon={faGitAlt}  className='text-orange-600 text-3xl group-hover:text-5xl'/>Git</li>
            <li className='group hover:bg-gray-200 hover:border-[1px] hover:border-gray-400 h-1/3 hover:shadow-lg text-gray-600 hover:text-white w-1/3 bg-white shadow-sm rounded-lg text-center  p-3 hover:rounded-lg'>Vs Code</li>
            <li className='group hover:bg-gray-200 hover:border-[1px] hover:border-gray-400 h-1/3 hover:shadow-lg text-gray-600 hover:text-white w-1/3 bg-white shadow-sm rounded-lg text-center  p-3 hover:rounded-lg'>Postman</li>
            <li className='group hover:bg-gray-200 hover:border-[1px] hover:border-gray-400 h-1/3 hover:shadow-lg text-gray-600 hover:text-white w-1/3 bg-white shadow-sm rounded-lg text-center  p-3 hover:rounded-lg'><FontAwesomeIcon icon={faLinux}  className='text-black-400 text-3xl group-hover:text-5xl'/>Linux</li>
        </ul>
    </div>
    <div className=' px-10  mx-5'>
        <h3  className='text-2xl p-4 flex gap-1 justify-center  md:justify-start'> <p className='justify-center text-3xl text-blue-500 items-start'>|</p><span> Database</span></h3>
        <ul className='flex gap-6 md:gap-4 flex-wrap mx-6 justify-center'>
            <li className='group hover:bg-gray-200 hover:border-[1px] hover:border-gray-400 h-1/3 hover:shadow-lg text-gray-600 hover:text-white w-1/3 bg-white shadow-sm rounded-lg text-center  p-3 hover:rounded-lg'>Mysql</li>
            <li className='group hover:bg-gray-200 hover:border-[1px] hover:border-gray-400 h-1/3 hover:shadow-lg  text-gray-600 hover:text-white w-1/3 bg-white shadow-sm rounded-lg text-center  p-3 hover:rounded-lg'>MongoDBB</li>
            
        </ul>
    </div>
</div>
    </div>

    </div>
  )
}

export default Skills