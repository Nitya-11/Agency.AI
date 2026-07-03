import React from 'react'
import { motion } from 'framer-motion'
import { company_logos } from '../assets/assets'
import { defaultViewport, fadeInUp, staggerContainer } from '../utils/motionVariants'

const TrustedBy = () => {
  return (
    <motion.div
      className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40
    gap-10 text-gray-700 dark:text-white/80'
      initial='hidden'
      whileInView='visible'
      viewport={defaultViewport}
      variants={staggerContainer(0.1, 0.1)}
    >
      <motion.h3 className='font-semibold' variants={fadeInUp}>
        Trusted by Leading Companies
      </motion.h3>

      <motion.div
        className='flex items-center justify-center flex-wrap gap-10 m-4'
        variants={staggerContainer(0.08, 0.2)}
      >
        {company_logos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            alt=''
            className='max-h-5 sm:max-h-6 dark:drop-shadow-xl'
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

export default TrustedBy
