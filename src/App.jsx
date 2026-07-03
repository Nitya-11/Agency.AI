import React,{useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {

  const [theme,setTheme] = useState('light')

  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  useEffect(() => {
    // Save scroll position before page unload
    const handleBeforeUnload = () => {
      const currentSection = document.querySelector('[id]')?.id || 'home'
      sessionStorage.setItem('lastSection', currentSection)
    }

    // Restore scroll position on page load
    const restoreScrollPosition = () => {
      const lastSection = sessionStorage.getItem('lastSection')
      if (lastSection) {
        const element = document.getElementById(lastSection)
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' })
          }, 500)
        }
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    restoreScrollPosition()

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  return (
    <div className='bg-white dark:bg-black text-black dark:text-white transition-colors duration-300'>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
      <TrustedBy/>
      <Services/>
      <OurWork />
      <Teams />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
