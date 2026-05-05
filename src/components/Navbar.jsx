import React from 'react'

const Navbar = () => {
  return (
    <div className='mx-10 pt-5'>
        <nav className='flex flex-row gap-10  justify-start'>
            <div className='md:text-3xl  font-bold' >{"</>"}LAW<span className='text-green-700'>RENCE</span></div>
            <ul className='flex flex-row gap-4 md:text-2xl '>
            <li><a href='#Home'>Home</a></li>
            <li><a href='#About'>About</a></li>
            <li><a href='#Skills'>Skills</a></li>
            <li><a href='#Projects'>Projects</a></li>
            <li><a href='#Contact'>Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar