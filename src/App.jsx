import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/Navbar/Navbar'
import Hero from './assets/Hero-section/Hero'
import Cards from './Cards/Cards'
import Footer from './Footer/Footer'
import Consert1 from './Consert1/Consert1'
import Consert2 from './Consert2/Consert2'
import Contactform from './Contactform/Contactform'
import Footerlast from './Footerlast/Footerlast'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
     <Cards />
     <Footer />
     <Consert1 />
     <Consert2 />
     <Contactform />
     <Footerlast />
    </>
  )
}

export default App
