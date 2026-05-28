import React, {useState} from 'react'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  const [isOpen, setIsopen]= useState(false);
  return (
    <div className=' flex   mx-10 pt-5 '>
   
        <nav className='max-w-7xl gap-10 px-4 flex   justify-between items-center h-16  w-full'>
        
            <div className='md:text-3xl  font-bold' >{"</>"}LAW<span className='text-green-700'>RENCE</span></div>
            <ul className='hidden md:flex  gap-4 md:text-2xl  '>
            <li className=' flex items-center hover:text-blue-500'><a href='#Home'>Home</a></li>
            <li className='flex items-center hover:text-blue-500'><a href='#About'>About</a></li>
            <li className='flex items-center hover:text-blue-500'><a href='#Skills'>Skills</a></li>
            <li className='flex items-center hover:text-blue-500'><a href='#Projects'>Projects</a></li>
            <li className='flex items-center hover:text-blue-500'><a href='#Contact'>Contact</a></li>
            </ul>

            
<button
onClick={()=>setIsopen(!isOpen)}
className="md:hidden focus:outline-none"
>
{
  isOpen?(
   <FontAwesomeIcon className="w-6 h-6" icon={faXmark} />
  ):(
     <FontAwesomeIcon className="w-6 h-6" icon={faBars} />
  )

}

</button>

 <ul className=' hidden md:flex flex-row gap-4 md:text-xl  ml-auto  items-center'>
                 <li  className='flex items-center'><a href='#Home'>Blog</a></li>
            <button className=' text-lg flex items-center justify-center rounded-md w-24 bg-white p-2 hover:bg-gray-200'>Theme</button>
              </ul>



            
              
            
        </nav>
 {
          isOpen && (
                       <ul className='md:hidden  pb-4 px-4 space-y-2 '>
            <li className=' flex items-center hover:text-blue-500'><a href='#Home'>Home</a></li>
            <li className='flex items-center hover:text-blue-500'><a href='#About'>About</a></li>
            <li className='flex items-center hover:text-blue-500'><a href='#Skills'>Skills</a></li>
            <li className='flex items-center hover:text-blue-500'><a href='#Projects'>Projects</a></li>
            <li className='flex items-center hover:text-blue-500'><a href='#Contact'>Contact</a></li>
              <li  className='flex pt-4 items-center'><a href='#Home'>Blog</a></li>
            <button className='flex items-center rounded-md bg-white p-2 mr-2'>Theme</button>
            </ul>
            
          )
        }
        

       
    </div>
  )
}

export default Navbar