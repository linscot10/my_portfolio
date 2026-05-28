import React, {useState} from 'react'

const Navbar = () => {
  const [isOpen, setIsopen]= useState(false);
  return (
    <div className=' flex   mx-10 pt-5 '>
        <nav className='max-w-7xl gap-10 px-4 flex   justify-between items-center h-16 '>
        
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
    <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
  ):(
     <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
  )

}

</button>



            
              
            
        </nav>

        <ul className=' hidden md:flex flex-row gap-4 md:text-xl  ml-auto '>
                 <li  className='flex items-center'><a href='#Home'>Blog</a></li>
            <button className='flex items-center rounded-lg bg-white p-2 mr-2'>Theme</button>
              </ul>
    </div>
  )
}

export default Navbar