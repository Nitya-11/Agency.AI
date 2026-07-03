import React from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({theme, setTheme}) => {
  return (
    <>
     <button className='flex items-center justify-center transition-all'>
        {theme === 'dark' ? (
            <img onClick={()=> setTheme('light')} src={assets.sun_icon} className='size-8.5 p-1.5
            border border-gray-500 rounded-full cursor-pointer hover:bg-gray-100 transition-all' alt="sun icon"/>
        ) : (
            <img onClick={()=> setTheme('dark')} src={assets.moon_icon} className='size-8.5 p-1.5 border 
            border-gray-500 rounded-full cursor-pointer hover:bg-gray-900 transition-all' alt="moon icon" />
        )}
     </button>
    </>
  )
}

export default ThemeToggleBtn
