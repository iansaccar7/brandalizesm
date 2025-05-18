import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Results from './components/Results'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AOS from 'aos'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    })
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Results />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App