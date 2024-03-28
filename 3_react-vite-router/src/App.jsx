import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes, Link } from 'react-router-dom'

import Index from './pages/index'
import About from './pages/about'
import Contact from './pages/contact'
import NotFound from './pages/pnf'

function App() {
  return (
    <>
      {/* <Index />
    <About /> */}

      <div className="navbar">

        <Link to='/'>home</Link>
        <Link to='/about'>about</Link>
        <Link to='/contact'>contact</Link>
      </div>

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
