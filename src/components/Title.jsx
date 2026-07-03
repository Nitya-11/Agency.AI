import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, defaultViewport } from '../utils/motionVariants'

const Title = ({ title, desc }) => {
  return (
    <motion.div
      className='flex flex-col items-center'
      initial='hidden'
      whileInView='visible'
      viewport={defaultViewport}
      variants={fadeInUp}
    >
      <h2 className='text-3xl sm:text-5xl font-medium'>{title}</h2>
      <p className='max-w-lg text-center text-gray-500 dark:text-white/75 mb-6'>
        {desc}
      </p>
    </motion.div>
  )
}

export default Title
