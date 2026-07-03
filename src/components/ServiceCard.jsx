import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/motionVariants'

const ServiceCard = ({ service }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border-2
    border-blue-400 dark:border-indigo-500 shadow-2xl shadow-blue-200 dark:shadow-indigo-900/30
    hover:border-indigo-500 dark:hover:border-blue-400 hover:shadow-indigo-300 dark:hover:shadow-blue-900/50
    transition-all duration-300 hover:scale-105 cursor-pointer bg-white dark:bg-gray-900'
      variants={fadeInUp}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -4 }}
    >
      <div
        className='pointer-events-none blur-2xl rounded-full bg-gradient-to-r
    from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute z-0
    transition-opacity duration-500 mix-blend-lighten opacity-70'
        style={{ top: position.y - 150, left: position.x - 150 }}
      />

      <div
        className='flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5
    transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative'
      >
        <div className='bg-gray-100 dark:bg-gray-700 rounded-full'>
          <img
            src={service.icon}
            alt=''
            className='max-w-24 bg-white dark:bg-gray-900 rounded-full m-2'
          />
        </div>

        <div className='flex-1'>
          <h3 className='font-bold'>{service.title}</h3>
          <p className='text-sm mt-2'>{service.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default ServiceCard
