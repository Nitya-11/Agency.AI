import React, { useState } from 'react'
import { motion } from 'framer-motion'
import assets from '../assets/assets'
import { slideDown } from '../utils/motionVariants'

const Navbar = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const handleNavClick = (href) => {
    const sectionId = href.substring(1)
    sessionStorage.setItem('lastSection', sectionId)
    setIsMenuOpen(false)
  }

  return (
    <motion.div
      className='w-full flex justify-between items-center px-4
    sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20
    backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70 max-sm:relative max-sm:bg-primary'
      initial='hidden'
      animate='visible'
      variants={slideDown}
    >
      <motion.img
        src={theme === 'dark' ? assets.logo_dark : assets.logo}
        className='w-32 sm:w-40 max-sm:z-30 max-sm:relative'
        alt=''
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      />

      <div
        className={`text-gray-700 dark:text-white sm:text-sm 
      max-sm:w-full max-sm:fixed top-16 left-0 
      max-sm:flex-col 
      max-sm:bg-primary max-sm:text-white max-sm:pt-5 max-sm:pb-10 max-sm:px-4 ${isMenuOpen ? 'max-sm:flex' : 'max-sm:hidden'} flex 
      sm:items-center gap-5 transition-all`}
      >
        <a href='#' onClick={() => handleNavClick('#')} className='sm:hover:border-b'>
          Home
        </a>
        <a href='#services' onClick={() => handleNavClick('#services')} className='sm:hover:border-b'>
          Services
        </a>
        <a href='#our-work' onClick={() => handleNavClick('#our-work')} className='sm:hover:border-b'>
          Our Work
        </a>
        <a href='#contact' onClick={() => handleNavClick('#contact')} className='sm:hover:border-b'>
          Contact Us
        </a>
      </div>

      <div className='flex items-center gap-4'>
        <motion.button
          onClick={toggleTheme}
          className='p-1.5 border border-gray-500 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all'
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          {theme === 'dark' ? (
            <img src={assets.sun_icon} className='w-6 h-6' alt='sun icon' />
          ) : (
            <img src={assets.moon_icon} className='w-6 h-6' alt='moon icon' />
          )}
        </motion.button>

        <img
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          src={isMenuOpen ? assets.close_icon : assets.menu_icon}
          alt='menu'
          className='w-6 sm:hidden cursor-pointer max-sm:z-30 max-sm:relative'
        />

        <motion.a
          href='#contact'
          onClick={() => handleNavClick('#contact')}
          className='text-sm max-sm:hidden 
        flex items-center gap-2 bg-primary text-white px-6 py-2 
        rounded-full cursor-pointer hover:scale-103 transition-all'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Connect <img src={assets.arrow_icon} width={14} alt='' />
        </motion.a>
      </div>
    </motion.div>
  )
}

export default Navbar
