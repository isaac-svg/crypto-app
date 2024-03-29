import React, { useContext } from 'react'
import   { ThemeContext } from '../context/ThemeContext'
import { HiMoon } from 'react-icons/hi'
import { HiSun } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import {AiOutlineMenu} from "react-icons/ai"

const ThemeToggle = () => {
    const {theme,setTheme} = useContext(ThemeContext)
  return ( 
    <div className='p-2'>
        {
        theme==="dark"?
        (
        <div className='flex items-center cursor-pointer' 
        onClick={()=> setTheme(theme === "dark"?"light":"dark")}
        >
        <HiMoon className='text-primary mr-2 text-2xl'/>Light Mode</div>)
        :
        (<div className='flex items-center cursor-pointer' 
        onClick={()=>setTheme(theme==="dark"?"light":"dark")}
        >
            <HiSun className='text-primary mr-2 text-2xl'/>Dark Mode</div>)
    }
    
    </div>
  )
}

export default ThemeToggle