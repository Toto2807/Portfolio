// import { useState } from 'react'
import Header from './components/Header'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './page/Home'
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="flex flex-col text-white bg-gradient-to-br from-[#010208] via-[#061148] to-[#00f2fe] min-h-screen bg-[length:200%_200%] animate-bg overflow-hidden">
      <Header />
      <main className='flex-1'>
        <Routes>
          <Route path='/' element= { <Home />} />
        </Routes>
      </main>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
