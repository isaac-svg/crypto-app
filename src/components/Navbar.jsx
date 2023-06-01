import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleNav =   ()=>{
        setNav(!nav)
    }
  return (
    <div className='rounded-div flex items-center justify-between h-20 font-bold'>
        <Link to={'/'}>
            <h1 className='text-2xl'>Crytobase</h1>
        </Link>
        <div className='hidden md:block'>
            <ThemeToggle/>
        </div>
        <div className='hidden md:block'>
        <Link to={'/signin'} className='p-4 hover:text-accent '>Sign in</Link>
        <Link to={'/signup'} className='bg-button text-btnText px-5 ml-2 rounded-2xl shadow-lg hover:shadow-2xl '>Sign up</Link>
    </div>
    <div onClick={handleNav } className='block md:hidden z-10 cursor-pointer'>
        {nav?<AiOutlineClose size={25}/>:<AiOutlineMenu size={25}/>}
    </div>
    {/* small */}
    <div className={nav?'md:hidden fixed top-20 left-0 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10':"fixed left-[-100%] h-[90%] flex-flex-col items-center justify-between ease-in duration-300 top-20"}>
        <ul className='w-full p-4'>
            <li className='border-b p-6'><Link to={'/'}>Home</Link></li>
            <li className='border-b p-6'><Link to={'/account'}>Account</Link></li>
            <li className='border-b p-6'><ThemeToggle/></li>
        </ul>
        <div className='flex flex-col w-full  p-4 '>
        <Link to={'/signin'} className='p-4 hover:text-accent '><button className='w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl'>Sign In</button></Link>
        <Link to={'/signup'} className='bg-button text-btnText px-5 ml-2 rounded-2xl shadow-lg hover:shadow-2xl '><button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'>Sign Up</button></Link>
        </div>
    </div>
    </div>
  )
}

export default Navbar