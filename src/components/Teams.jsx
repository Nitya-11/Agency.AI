import React from 'react'
import { motion } from 'framer-motion'
import Title from './Title'
import { teamData } from '../assets/assets'
import { defaultViewport, fadeInUp, staggerContainer } from '../utils/motionVariants'

const Teams = () => {
  return (
    <div
      id='team'
      className='flex flex-col items-center gap-7 px-4 sm:px-12
    lg:px-24 xl:px-40 pt-30 pb-16 text-gray-700 dark:text-white'
    >
      <Title
        title='Meet the team'
        desc="A passionate team of digital experts dedicated to your brand's success"
      />

      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full'
        initial='hidden'
        whileInView='visible'
        viewport={defaultViewport}
        variants={staggerContainer(0.12, 0.2)}
      >
        {teamData.map((member, index) => (
          <motion.div
            key={index}
            className='flex flex-col items-center gap-3 group cursor-pointer'
            variants={fadeInUp}
            whileHover={{ y: -8 }}
          >
            <div
              className='relative overflow-hidden rounded-full w-24 h-24 border-3 border-blue-400 
            dark:border-indigo-500 shadow-lg hover:shadow-indigo-300 dark:hover:shadow-indigo-900/50 
            transition-all duration-300 hover:scale-110 hover:border-indigo-500 dark:hover:border-blue-400'
            >
              <img src={member.image} alt={member.name} className='w-full h-full object-cover' />
            </div>
            <div className='text-center'>
              <h3 className='font-bold text-base'>{member.name}</h3>
              <p className='text-sm text-gray-600 dark:text-gray-400'>{member.title}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Teams
