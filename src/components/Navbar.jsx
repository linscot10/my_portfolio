import React from 'react'

const Navbar = () => {
  return (
    <div className=' flex  gap-7 mx-10 pt-5 '>
        <nav className='flex flex-row gap-10  justify-start '>
            <div className='md:text-3xl  font-bold' >{"</>"}LAW<span className='text-green-700'>RENCE</span></div>
            <ul className='flex flex-row gap-4 md:text-2xl  '>
            <li className='flex items-center'><a href='#Home'>Home</a></li>
            <li className='flex items-center'><a href='#About'>About</a></li>
            <li className='flex items-center'><a href='#Skills'>Skills</a></li>
            <li className='flex items-center'><a href='#Projects'>Projects</a></li>
            <li className='flex items-center'><a href='#Contact'>Contact</a></li>
            </ul>


            
              
            
        </nav>

        <ul className='flex flex-row gap-4 md:text-xl  ml-auto'>
                 <li  className='flex items-center'><a href='#Home'>Blog</a></li>
            <button className='flex items-center rounded-lg bg-white p-2 mr-2'>Theme</button>
              </ul>
    </div>
  )
}

export default Navbar