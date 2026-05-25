import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // Handle mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle')
    const navMenu = document.querySelector('.nav-menu')

    const toggleMenu = () => {
      setMenuOpen(!menuOpen)
      navToggle?.classList.toggle('active')
      navMenu?.classList.toggle('active')
    }

    navToggle?.addEventListener('click', toggleMenu)

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a')
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        setMenuOpen(false)
        navToggle?.classList.remove('active')
        navMenu?.classList.remove('active')
      })
    })

    return () => {
      navToggle?.removeEventListener('click', toggleMenu)
    }
  }, [menuOpen])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  )
}

export default App
