import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Title from './Title'
import assets from '../assets/assets'
import { defaultViewport, fadeInUp, staggerContainer } from '../utils/motionVariants'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY)
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('message', formData.message)
      formDataToSend.append('from_name', 'Contact Form')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
    }
  }

  return (
    <div
      id='contact'
      className='flex flex-col items-center gap-7 px-4 sm:px-12
    lg:px-24 xl:px-40 pt-30 pb-16 text-gray-700 dark:text-white'
    >
      <Title
        title='Reach out to us'
        desc="Ready to grow your brand? Let's connect and build something exceptional together."
      />

      <motion.div
        className='w-full max-w-2xl'
        initial='hidden'
        whileInView='visible'
        viewport={defaultViewport}
        variants={staggerContainer(0.1, 0.3)}
      >
        <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
          <motion.div className='grid grid-cols-1 md:grid-cols-2 gap-6' variants={fadeInUp}>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold text-gray-800 dark:text-white'>Your name</label>
              <div className='relative'>
                <img src={assets.person_icon} alt='name' className='absolute left-3 top-3 w-5 h-5' />
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Enter your name'
                  className='w-full pl-10 pr-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg 
                  bg-white dark:bg-gray-800 text-gray-700 dark:text-white 
                  placeholder-gray-500 dark:placeholder-gray-400
                  focus:outline-none focus:border-blue-400 dark:focus:border-indigo-500 
                  transition-colors duration-300'
                  required
                />
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <label className='font-semibold text-gray-800 dark:text-white'>Email id</label>
              <div className='relative'>
                <img src={assets.email_icon} alt='email' className='absolute left-3 top-3 w-5 h-5' />
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Enter your email'
                  className='w-full pl-10 pr-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg 
                  bg-white dark:bg-gray-800 text-gray-700 dark:text-white 
                  placeholder-gray-500 dark:placeholder-gray-400
                  focus:outline-none focus:border-blue-400 dark:focus:border-indigo-500 
                  transition-colors duration-300'
                  required
                />
              </div>
            </div>
          </motion.div>

          <motion.div className='flex flex-col gap-2' variants={fadeInUp}>
            <label className='font-semibold text-gray-800 dark:text-white'>Message</label>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Enter your message'
              rows='6'
              className='px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg 
              bg-white dark:bg-gray-800 text-gray-700 dark:text-white 
              placeholder-gray-500 dark:placeholder-gray-400
              focus:outline-none focus:border-blue-400 dark:focus:border-indigo-500 
              transition-colors duration-300 resize-none'
              required
            />
          </motion.div>

          <motion.button
            type='submit'
            className='flex items-center justify-center gap-2 w-fit px-8 py-3 bg-blue-600 
            hover:bg-indigo-600 text-white font-semibold rounded-full 
            transition-all duration-300 hover:scale-105 cursor-pointer'
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
            <span>→</span>
          </motion.button>

          <AnimatePresence>
            {submitted && (
              <motion.div
                className='p-4 bg-green-100 border-2 border-green-500 text-green-700 
            dark:bg-green-900 dark:border-green-500 dark:text-green-100 rounded-lg'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </div>
  )
}

export default Contact
