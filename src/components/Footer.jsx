import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import assets from '../assets/assets'
import { defaultViewport, fadeInUp, staggerContainer } from '../utils/motionVariants'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Our work', href: '#our-work' },
    { name: 'Testimonial', href: '#testimonial' },
  ]

  const socialLinks = [
    { icon: assets.facebook_icon, href: '#', label: 'Facebook' },
    { icon: assets.twitter_icon, href: '#', label: 'Twitter' },
    { icon: assets.instagram_icon, href: '#', label: 'Instagram' },
    { icon: assets.linkedin_icon, href: '#', label: 'LinkedIn' },
  ]

  return (
    <motion.footer
      className='bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800'
      initial='hidden'
      whileInView='visible'
      viewport={defaultViewport}
      variants={staggerContainer(0.1, 0.1)}
    >
      <div className='px-4 sm:px-12 lg:px-24 xl:px-40 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          <motion.div className='flex flex-col gap-4' variants={fadeInUp}>
            <img src={assets.logo} alt='Logo' className='w-32' />
            <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed'>
              From strategy to execution, we craft digital solutions that move your business forward.
            </p>
          </motion.div>

          <motion.div className='flex flex-col gap-4' variants={fadeInUp}>
            <h3 className='font-bold text-gray-900 dark:text-white'>Quick Links</h3>
            <nav className='flex flex-col gap-2'>
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-indigo-500
                  transition-colors duration-300 text-sm'
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>

          <motion.div className='flex flex-col gap-4' variants={fadeInUp}>
            <h3 className='font-bold text-gray-900 dark:text-white'>Subscribe to our newsletter</h3>
            <p className='text-gray-600 dark:text-gray-400 text-sm'>
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <form onSubmit={handleSubscribe} className='flex gap-2'>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                className='flex-1 px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg
                bg-white dark:bg-gray-800 text-gray-700 dark:text-white
                placeholder-gray-500 dark:placeholder-gray-400
                focus:outline-none focus:border-blue-400 dark:focus:border-indigo-500
                transition-colors duration-300 text-sm'
                required
              />
              <motion.button
                type='submit'
                className='px-6 py-3 bg-blue-600 hover:bg-indigo-600 text-white font-semibold 
                rounded-lg transition-all duration-300 hover:scale-105 text-sm whitespace-nowrap'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
            <AnimatePresence>
              {subscribed && (
                <motion.p
                  className='text-green-600 dark:text-green-400 text-sm'
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  Thanks for subscribing!
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <div className='border-t border-gray-200 dark:border-gray-800'></div>

      <div className='px-4 sm:px-12 lg:px-24 xl:px-40 py-8'>
        <motion.div
          className='flex flex-col md:flex-row items-center justify-between gap-4'
          variants={fadeInUp}
        >
          <p className='text-gray-600 dark:text-gray-400 text-sm'>
            Copyright 2026 © agency.ai - All Right Reserved.
          </p>

          <div className='flex gap-4'>
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                className='w-10 h-10 flex items-center justify-center rounded-full 
                bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-indigo-600
                transition-all duration-300 hover:scale-110 group'
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={social.icon}
                  alt={social.label}
                  className='w-5 h-5 filter group-hover:invert transition-all duration-300'
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
