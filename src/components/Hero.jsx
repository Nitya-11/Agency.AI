import React from 'react'
import { motion } from 'framer-motion'
import assets from '../assets/assets'
import { fadeInUp, staggerContainer } from '../utils/motionVariants'

const Hero = () => {
  return (
    <motion.div
      id='hero'
      className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12
      lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700
      dark:text-white relative'
      initial='hidden'
      animate='visible'
      variants={staggerContainer(0.2, 0.1)}
    >
      <div className='absolute inset-0 -z-10'>
        <div className='absolute top-0 left-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse'></div>
        <div className='absolute top-20 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse'></div>
        <div className='absolute -bottom-20 left-1/3 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40'></div>
      </div>

      <motion.div
        className='inline-flex items-center gap-2 border border-gray-300 p-1.5
        pr-4 rounded-full'
        variants={fadeInUp}
      >
        <img className='w-20' src={assets.group_profile} alt='' />
        <p className='text-xs font-medium'> Trusted by 10k+ people</p>
      </motion.div>

      <motion.h1
        className='text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight'
        variants={fadeInUp}
      >
        Turning imagination into{' '}
        <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>
          digital
        </span>{' '}
        impact.
      </motion.h1>

      <motion.p
        className='text-gray-600 dark:text-gray-300 max-w-2xl text-lg'
        variants={fadeInUp}
      >
        Creating meaningful connections and turning big ideas <br />
        into interactive digital experiences.
      </motion.p>

      <motion.img
        src={assets.hero_img}
        alt='hero'
        className='w-full max-w-4xl rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-shadow'
        variants={fadeInUp}
      />
    </motion.div>
  )
}

export default Hero
