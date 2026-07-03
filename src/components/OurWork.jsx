import React from 'react'
import { motion } from 'framer-motion'
import Title from './Title'
import assets from '../assets/assets'
import { defaultViewport, fadeInUp, staggerContainer } from '../utils/motionVariants'

const OurWork = () => {
  const portfolioData = [
    {
      title: 'Mobile app marketing',
      description: 'We turn bold ideas into powerful digital solutions that connect...',
      image: assets.work_mobile_app,
    },
    {
      title: 'Dashboard management',
      description: 'We turn bold ideas into powerful digital solutions that connect...',
      image: assets.work_dashboard_management,
    },
    {
      title: 'Fitness app promotion',
      description: 'We turn bold ideas into powerful digital solutions that connect...',
      image: assets.work_fitness_app,
    },
  ]

  return (
    <div
      id='our-work'
      className='flex flex-col items-center gap-7 px-4 sm:px-12
    lg:px-24 xl:px-40 pt-30 pb-16 text-gray-700 dark:text-white'
    >
      <Title
        title='Our latest work'
        desc='Browse our portfolio of innovative digital projects that showcase creativity, performance, and results.'
      />

      <motion.div
        className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full'
        initial='hidden'
        whileInView='visible'
        viewport={defaultViewport}
        variants={staggerContainer(0.15, 0.2)}
      >
        {portfolioData.map((project, index) => (
          <motion.div
            key={index}
            className='flex flex-col gap-4 group cursor-pointer'
            variants={fadeInUp}
            whileHover={{ y: -6 }}
          >
            <div
              className='relative overflow-hidden rounded-lg border-2 border-blue-400 dark:border-indigo-500 
           hover:border-indigo-500 dark:hover:border-blue-400 shadow-lg hover:shadow-indigo-300 
           dark:hover:shadow-indigo-900/50 transition-all duration-300 hover:scale-105 bg-gray-100 dark:bg-gray-800'
            >
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-64 object-cover transition-transform 
             duration-300 group-hover:scale-110'
              />
            </div>
            <div>
              <h3 className='font-bold text-lg'>{project.title}</h3>
              <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default OurWork
